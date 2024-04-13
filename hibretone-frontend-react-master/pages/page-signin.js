/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Layout from "../components/Layout/Layout";
import Link from "next/link";
import React, {useState} from 'react';
import {useLocalStorage} from 'react-use';
import {useRouter} from 'next/router';

export default function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loginError, setLoginError] = useState(''); // Add a state for login errors

    const [isLoggedIn, setIsLoggedIn] = useLocalStorage('is_logged_in', false);
    const [userAccount, setUserAccount] = useLocalStorage("user_account", {});

    const router = useRouter();

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
    const handleEmailBlur = () => {
        if (!validateEmail(email)) {
            setEmailError('Invalid email address.');
        } else {
            setEmailError('');
        }
    };
    const handlePasswordBlur = () => {
        if (!validatePassword(password)) {
            setPasswordError('Password: 8-40 chars, includes A-Z, a-z, 0-9.');
        } else {
            setPasswordError('');
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (emailError || passwordError) {
            alert('Please correct the errors before submitting.');
            return;
        }
        try {
            const responseInternal = await fetch('/auth/login/internal', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email_address: email,
                    password: password,
                }),
            });

            if (!responseInternal.ok) {
                setLoginError('Failed to login. Please check your email and password.');
                return;
            }

            const dataInternal = await responseInternal.json();
            setUserAccount(dataInternal.user_account);
            setIsLoggedIn(true);

            const responseJwt = await fetch("/auth/login/jwt", {
                method: "POST",
            });

            if (!responseJwt.ok) {
                setIsLoggedIn(false);
                setUserAccount({});
            }

            router.push('/');

        } catch (error) {
            console.error('Login error:', error);
            setLoginError('Failed to login.');
        }
    };

    return (
        <>
            <Layout>
                <section className="pt-100 login-register">
                    <div className="container">
                        <div className="row login-register-cover">
                            <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                                <div className="text-center">
                                    <p className="font-sm text-brand-2">Welcome back! </p>
                                    <h2 className="mt-10 mb-5 text-brand-1">Member Login</h2>
                                    <p className="font-sm text-muted mb-30">Access to all features. No credit card
                                        required.</p>
                                    <button className="btn social-login hover-up mb-20">
                                        <img src="assets/imgs/template/icons/icon-google.svg" alt="jobbox"/>
                                        <strong>Sign in with Google</strong>
                                    </button>
                                    <div className="divider-text-center">
                                        <span>Or continue with</span>
                                    </div>
                                </div>
                                <form className="login-register text-start mt-20" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="input-1">
                                            Email address *
                                        </label>
                                        <input className="form-control" id="input-1" type="email" required
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
                                               name="password" placeholder="************" value={password}
                                               onChange={(e) => setPassword(e.target.value)}
                                               onBlur={handlePasswordBlur}/>
                                        {passwordError && <div style={{color: 'red'}}>{passwordError}</div>}
                                    </div>
                                    <div className="login_footer form-group d-flex justify-content-between">
                                        <label className="cb-container">
                                            <input type="checkbox"/>
                                            <span className="text-small">Remenber me</span>
                                            <span className="checkmark"/>
                                        </label>
                                        <Link legacyBehavior href="/page-reset-password">
                                            <a className="text-muted">Forgot Password</a>
                                        </Link>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-brand-1 hover-up w-100" type="submit" name="login">
                                            Login
                                        </button>
                                    </div>
                                    {loginError && <div style={{color: 'red', textAlign: 'center'}}>{loginError}</div>}
                                    <div className="text-muted text-center">
                                        Don't have an Account?
                                        <Link legacyBehavior href="/page-register">
                                            <a>Sign up</a>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                            <div className="img-1 d-none d-lg-block">
                                <img className="shape-1" src="assets/imgs/page/login-register/img-4.svg" alt="JobBox"/>
                            </div>
                            <div className="img-2">
                                <img src="assets/imgs/page/login-register/img-3.svg" alt="JobBox"/>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
