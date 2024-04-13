import Layout from "../components/Layout/Layout";
import Link from "next/link";
import React, {useState} from 'react';
// Import Material UI components
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useRouter} from 'next/router'; // Import useRouter for navigation

export default function Register() {
    const [email, setEmail] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    // State hooks for validation messages
    const [emailError, setEmailError] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [rePasswordError, setRePasswordError] = useState('');
    const [isTermsAgreed, setIsTermsAgreed] = useState(false);
    const [termsError, setTermsError] = useState('');

    const [registerError, setRegisterError] = useState('');
    const [open, setOpen] = useState(false); // State hook for dialog open/close

    const router = useRouter();

    const handleOpenDialog = () => setOpen(true);

    const handleCloseDialog = (navigate = false) => {
        setOpen(false);
        if (navigate) router.push('/page-signin');
    };

    // Validation functions
    const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const validatePassword = (password) => {
        return (
            password.length >= 8 &&
            password.length <= 40 &&
            /[a-z]/.test(password) &&
            /[A-Z]/.test(password) &&
            /[0-9]/.test(password)
        );
    };
    const validateName = (name) => {
        return name.trim().length >= 2
    };

    const handleEmailBlur = () => {
        if (!validateEmail(email)) {
            setEmailError('Invalid email address.');
        } else {
            setEmailError('');
        }
    };

    const handleFirstNameBlur = () => {
        if (!validateName(firstname)) {
            setFirstNameError('First name must be at least 2 characters long.');
        } else {
            setFirstNameError('');
        }
    };

    const handleLastNameBlur = () => {
        if (!validateName(lastname)) {
            setLastNameError('Last name must be at least 2 characters long.');
        } else {
            setLastNameError('');
        }
    };

    const handlePasswordBlur = () => {
        if (!validatePassword(password)) {
            setPasswordError('Password: 8-40 chars, includes A-Z, a-z, 0-9.');
        } else {
            setPasswordError('');
        }
    };

    const handleRePasswordBlur = () => {
        if (password !== rePassword) {
            setRePasswordError('Passwords do not match.');
        } else {
            setRePasswordError('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setTermsError('');

        // Check if all fields are valid including the terms agreement
        if (emailError || firstNameError || lastNameError || passwordError || rePasswordError || !isTermsAgreed) {
            if (!isTermsAgreed) {
                setTermsError('You must agree to the terms and policies.');
            }
            alert('Please correct the errors before submitting.');
            return;
        }

        const userData = {
            first_name: firstname,
            last_name: lastname,
            email_address: email,
            password: password,
        };

        try {
            const response = await fetch('/auth/register/internal', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                setRegisterError('The email might already be registered.');
                return;
            } else {
                // Open the success dialog on successful registration
                setRegisterError('');
                handleOpenDialog();
            }

        } catch (error) {
            console.error('Network error:', error);
            setRegisterError('An unexpected error occurred. Please try again later.');
        }
    };

    // Dialog component integrated within your return statement
    const SuccessDialog = () => (
        <Dialog
            open={open}
            onClose={() => handleCloseDialog()}
            aria-labelledby="success-dialog-title"
            aria-describedby="success-dialog-description"
        >
            <DialogTitle id="success-dialog-title">{"Registration Successful!"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="success-dialog-description">
                    You have successfully registered. Would you like to log in now?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleCloseDialog()}>Not Now</Button>
                <Button onClick={() => handleCloseDialog(true)} autoFocus>
                    Go to Login
                </Button>
            </DialogActions>
        </Dialog>
    );


    return (
        <>
            <Layout>
                <section className="pt-100 login-register">
                    <div className="container">
                        <div className="row login-register-cover">
                            <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                                <div className="text-center">
                                    <p className="font-sm text-brand-2">Register </p>
                                    <h2 className="mt-10 mb-5 text-brand-1">Start for free Today</h2>
                                    <p className="font-sm text-muted mb-30">Access to all features. No credit card
                                        required.</p>
                                    <button className="btn social-login hover-up mb-20">
                                        <img src="assets/imgs/template/icons/icon-google.svg" alt="jobbox"/>
                                        <strong>Sign up with Google</strong>
                                    </button>
                                    <div className="divider-text-center">
                                        <span>Or continue with</span>
                                    </div>
                                </div>
                                <form className="login-register text-start mt-20" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="input-1">
                                            First Name *
                                        </label>
                                        <input className="form-control" id="input-1" type="text" required
                                               name="firstname" placeholder="Steven"
                                               value={firstname} onChange={(e) => setFirstName(e.target.value)}
                                               onBlur={handleFirstNameBlur}/>
                                        {firstNameError && <div style={{color: 'red'}}>{firstNameError}</div>}
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="input-2">
                                            Last Name *
                                        </label>
                                        <input className="form-control" id="input-2" type="text" required
                                               name="lastname" placeholder="Job"
                                               value={lastname} onChange={(e) => setLastName(e.target.value)}
                                               onBlur={handleLastNameBlur}/>
                                        {lastNameError && <div style={{color: 'red'}}>{lastNameError}</div>}
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="input-3">
                                            Email *
                                        </label>
                                        <input className="form-control" id="input-3" type="email" required
                                               name="emailaddress" placeholder="stevenjob@gmail.com" value={email}
                                               onChange={(e) => setEmail(e.target.value)}
                                               onBlur={handleEmailBlur}/>
                                        {emailError && <div style={{color: 'red'}}>{emailError}</div>}
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="input-4">
                                            Password *
                                        </label>
                                        <input className="form-control" id="input-4" type="password" required
                                               name="password" placeholder="************"
                                               value={password} onChange={(e) => setPassword(e.target.value)}
                                               onBlur={handlePasswordBlur}/>
                                        {passwordError && <div style={{color: 'red'}}>{passwordError}</div>}
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="input-5">
                                            Re-Password *
                                        </label>
                                        <input className="form-control" id="input-5" type="password" required
                                               name="re-password" placeholder="************"
                                               value={rePassword} onChange={(e) => setRePassword(e.target.value)}
                                               onBlur={handleRePasswordBlur}/>
                                    </div>
                                    <div className="login_footer form-group d-flex justify-content-between">
                                        <label className="cb-container">
                                            <input
                                                type="checkbox"
                                                checked={isTermsAgreed}
                                                onChange={e => setIsTermsAgreed(e.target.checked)}
                                            />
                                            <span className="text-small">Agree our terms and policy</span>
                                            <span className="checkmark"/>
                                        </label>
                                    </div>
                                    {termsError && <div style={{color: 'red'}}>{termsError}</div>}
                                    <div className="form-group">
                                        <button className="btn btn-brand-1 hover-up w-100" type="submit" name="login">
                                            Sign up
                                        </button>
                                    </div>
                                    {registerError &&
                                        <div style={{color: 'red', textAlign: 'center'}}>{registerError}</div>}
                                    <div className="text-muted text-center">
                                        Already have an account?
                                        <Link legacyBehavior href="/page-signin">
                                            <a>Sign in</a>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                            <div className="img-1 d-none d-lg-block">
                                <img className="shape-1" src="assets/imgs/page/login-register/img-1.svg" alt="JobBox"/>
                            </div>
                            <div className="img-2">
                                <img src="assets/imgs/page/login-register/img-2.svg" alt="JobBox"/>
                            </div>
                        </div>
                    </div>
                </section>
                <SuccessDialog/>
            </Layout>
        </>
    );
}
