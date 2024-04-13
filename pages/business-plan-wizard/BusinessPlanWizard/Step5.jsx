import React, {useEffect, useState} from 'react';
import {useSessionStorage} from 'react-use';
import {
    Grid,
    FormControl,
    Button,
    Typography,
    FormHelperText, Input, Divider, CircularProgress, Chip
} from '@mui/material';
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import axios from "axios";
import CustomListItem from "../../../components/elements/CustomedListItem";
import RegenerateButton from "../../../components/elements/RegenerateButton";

const Step5 = ({previousStep, nextStep}) => {
    const [step1FormData, setStep1FormData] = useSessionStorage('BusinessPlanStepForm.step1FormData', {
        businessType: '',
        planUsage: ''
    });
    const [step2FormData, setStep2FormData] = useSessionStorage('BusinessPlanStepForm.step2FormData', {
        businessName: '',
        businessDescription: '',
        numberOfEmployees: '',
        productOrService: '',
        productServiceAccess: '',
        serviceArea: ''
    });
    const [step3FormData, setStep3FormData] = useSessionStorage('BusinessPlanStepForm.step3FormData', {
        group1Description: '',
        group1IncomeLevel: '',
        group2Description: '',
        group2IncomeLevel: '',
    });
    const [step4FormData, setStep4FormData] = useSessionStorage('BusinessPlanStepForm.step4FormData', {
        product1Name: '',
        product1Description: '',
        product2Name: '',
        product2Description: '',
    });

    const [step5FormData, setStep5FormData] = useSessionStorage('BusinessPlanStepForm.step5FormData', {
        successDriver1: '',
        successDriver2: '',
        weakness1: '',
        weakness2: '',
    });

    const [error, setError] = useState({
        successDriver1: false,
    });

    const [showSuggestions1, setShowSuggestions1] = useState(false);
    const [suggestions1, setSuggestions1] = useState([]);
    const [loading1, setLoading1] = useState(false);
    const [loadedSuggestions1, setLoadedSuggestions1] = useState(false);
    const [errorMsg1, setErrorMsg1] = useState('');

    const [showSuggestions2, setShowSuggestions2] = useState(false);
    const [suggestions2, setSuggestions2] = useState([]);
    const [loading2, setLoading2] = useState(false);
    const [loadedSuggestions2, setLoadedSuggestions2] = useState(false);
    const [errorMsg2, setErrorMsg2] = useState('');

    const fetchSuccessDriverSuggestionData = async ({
                                                        setLoading,
                                                        setErrorMsg,
                                                        setSuggestions,
                                                        setLoadedSuggestions
                                                    }) => {
        setLoading(true);
        setErrorMsg('');
        try {
            const response = await axios.post('/business-plan-writer/suggestion/success-driver', {
                step1: step1FormData,
                step2: step2FormData,
                step3: step3FormData,
                step4: step4FormData,
            }, {timeout: 6000});

            if (response.status !== 200) {
                throw new Error('Failed to fetch suggestions');
            }

            const suggestions = response.data.suggestion;
            setSuggestions(suggestions);
            setErrorMsg('');
        } catch (error) {
            setErrorMsg('Failed to generate suggestions. Please try again.');
        } finally {
            setLoading(false);
            setLoadedSuggestions(true);
        }
    };

    const fetchSuggestionData1 = () => {
        fetchSuccessDriverSuggestionData({
            setLoading: setLoading1,
            setErrorMsg: setErrorMsg1,
            setSuggestions: setSuggestions1,
            setLoadedSuggestions: setLoadedSuggestions1
        });
    }

    const loadSuggestions1 = () => {
        if (!loadedSuggestions1) {
            setLoading1(true);
            fetchSuggestionData1();
        }
    };

    const handleRegenerateClick1 = () => {
        setLoading1(true);
        fetchSuggestionData1();
    };
    const handleFocus1 = () => {
        setShowSuggestions1(true);
        loadSuggestions1();
    };
    const handleSuggestionClick1 = (suggestion) => {
        setStep5FormData(prevState => ({
            ...prevState,
            successDriver1: suggestion
        }));
    };

    const fetchSuggestionData2 = () => {
        fetchSuccessDriverSuggestionData({
            setLoading: setLoading2,
            setErrorMsg: setErrorMsg2,
            setSuggestions: setSuggestions2,
            setLoadedSuggestions: setLoadedSuggestions2
        });
    }
    const loadSuggestions2 = () => {
        if (!loadedSuggestions2) {
            setLoading2(true);
            fetchSuggestionData2();
        }
    };
    const handleRegenerateClick2 = () => {
        setLoading2(true);
        fetchSuggestionData2();
    };
    const handleFocus2 = () => {
        setShowSuggestions2(true);
        loadSuggestions2();
    };
    const handleSuggestionClick2 = (suggestion) => {
        setStep5FormData(prevState => ({
            ...prevState,
            successDriver2: suggestion
        }));
    };

    const [showSuggestions3, setShowSuggestions3] = useState(false);
    const [suggestions3, setSuggestions3] = useState([]);
    const [loading3, setLoading3] = useState(false);
    const [loadedSuggestions3, setLoadedSuggestions3] = useState(false);
    const [errorMsg3, setErrorMsg3] = useState('');

    const [showSuggestions4, setShowSuggestions4] = useState(false);
    const [suggestions4, setSuggestions4] = useState([]);
    const [loading4, setLoading4] = useState(false);
    const [loadedSuggestions4, setLoadedSuggestions4] = useState(false);
    const [errorMsg4, setErrorMsg4] = useState('');

    const fetchWeaknessSuggestionData = async ({
                                                   setLoading,
                                                   setErrorMsg,
                                                   setSuggestions,
                                                   setLoadedSuggestions
                                               }) => {
        setLoading(true);
        setErrorMsg('');
        try {
            const response = await axios.post('/business-plan-writer/suggestion/weakness', {
                step1: step1FormData,
                step2: step2FormData,
                step3: step3FormData,
                step4: step4FormData,
            }, {timeout: 6000});

            if (response.status !== 200) {
                throw new Error('Failed to fetch suggestions');
            }

            const suggestions = response.data.suggestion;
            setSuggestions(suggestions);
            setErrorMsg('');
        } catch (error) {
            setErrorMsg('Failed to generate suggestions. Please try again.');
        } finally {
            setLoading(false);
            setLoadedSuggestions(true);
        }
    };

    const fetchSuggestionData3 = () => {
        fetchWeaknessSuggestionData({
            setLoading: setLoading3,
            setErrorMsg: setErrorMsg3,
            setSuggestions: setSuggestions3,
            setLoadedSuggestions: setLoadedSuggestions3
        });
    }

    const loadSuggestions3 = () => {
        if (!loadedSuggestions3) {
            setLoading3(true);
            fetchSuggestionData3();
        }
    };

    const handleRegenerateClick3 = () => {
        setLoading3(true);
        fetchSuggestionData3();
    };
    const handleFocus3 = () => {
        setShowSuggestions3(true);
        loadSuggestions3();
    };
    const handleSuggestionClick3 = (suggestion) => {
        setStep5FormData(prevState => ({
            ...prevState,
            weakness1: suggestion
        }));
    };

    const fetchSuggestionData4 = () => {
        fetchWeaknessSuggestionData({
            setLoading: setLoading4,
            setErrorMsg: setErrorMsg4,
            setSuggestions: setSuggestions4,
            setLoadedSuggestions: setLoadedSuggestions4
        });
    }
    const loadSuggestions4 = () => {
        if (!loadedSuggestions4) {
            setLoading4(true);
            fetchSuggestionData4();
        }
    };
    const handleRegenerateClick4 = () => {
        setLoading4(true);
        fetchSuggestionData4();
    };
    const handleFocus4 = () => {
        setShowSuggestions4(true);
        loadSuggestions4();
    };
    const handleSuggestionClick4 = (suggestion) => {
        setStep5FormData(prevState => ({
            ...prevState,
            weakness2: suggestion
        }));
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setStep5FormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        setError(prev => ({...prev, [name]: false}));
    };

    const validateForm = () => {
        const newErrors = {...error};
        newErrors.successDriver1 = !step5FormData.successDriver1;
        setError(newErrors);
        return !newErrors.successDriver1;
    };

    const onFinish = (e) => {
        e.preventDefault();
        if (validateForm()) {
            nextStep();
        }
    };

    const requiredLabel = (label, required) => (
        <>
            {label} {required && <span style={{color: 'red'}}>*</span>}
        </>
    );

    return (
        <form noValidate autoComplete="on" onSubmit={onFinish}>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <Typography variant="h6" component="legend">
                        Success Drivers
                    </Typography>
                    <Divider/>
                </Grid>
                <Grid item>
                    <FormControl required error={error.successDriver1} fullWidth>
                        <Typography variant="subtitle1" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            {requiredLabel('Success Driver 1 (required)', true)}
                        </Typography>
                        <Input
                            id="successDriver1"
                            name="successDriver1"
                            type="text"
                            placeholder="E.g. Our product is high quality and affordable."
                            value={step5FormData.successDriver1}
                            onChange={handleChange}
                            onFocus={handleFocus1}
                            variant="outlined"
                            autoComplete="on"
                        />
                        {error.successDriver1 && <FormHelperText>Please input a Success Driver.</FormHelperText>}
                    </FormControl>
                    {loading1 && (
                        <Grid sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
                            <CircularProgress/>
                        </Grid>
                    )}
                    {!loading1 && showSuggestions1 && (
                        <Grid sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1, mt: 2}}>
                            {suggestions1.map((suggestion, index) => (
                                <CustomListItem
                                    key={index}
                                    suggestion={suggestion}
                                    handleClick={() => handleSuggestionClick1(suggestion)}
                                />
                            ))}
                        </Grid>
                    )}
                    {errorMsg1 && (
                        <Grid sx={{color: 'red', textAlign: 'center', mt: 2}}>
                            {errorMsg1}
                        </Grid>
                    )}
                    {showSuggestions1 && (
                        <Grid sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
                            <RegenerateButton
                                onClick={handleRegenerateClick1}
                                disabled={loading1}
                            >
                                Regenerate Suggestions
                            </RegenerateButton>
                        </Grid>
                    )}
                </Grid>

                <Grid item>
                    <FormControl fullWidth>
                        <Typography variant="subtitle1" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            {requiredLabel('Success Driver 2 (optional)', false)}
                        </Typography>
                        <Input
                            id="successDriver2"
                            name="successDriver2"
                            type="text"
                            placeholder="E.g. Our marketing team is highly skilled and experienced."
                            value={step5FormData.successDriver2}
                            onChange={handleChange}
                            onFocus={handleFocus2}
                            variant="outlined"
                            autoComplete="on"
                        />
                    </FormControl>
                    {loading2 && (
                        <Grid sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
                            <CircularProgress/>
                        </Grid>
                    )}
                    {!loading2 && showSuggestions2 && (
                        <Grid sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1, mt: 2}}>
                            {suggestions2.map((suggestion, index) => (
                                <CustomListItem
                                    key={index}
                                    suggestion={suggestion}
                                    handleClick={() => handleSuggestionClick2(suggestion)}
                                />
                            ))}
                        </Grid>
                    )}
                    {errorMsg2 && (
                        <Grid sx={{color: 'red', textAlign: 'center', mt: 2}}>
                            {errorMsg2}
                        </Grid>
                    )}
                    {showSuggestions2 && (
                        <Grid sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
                            <RegenerateButton
                                onClick={handleRegenerateClick2}
                                disabled={loading2}
                            >
                                Regenerate Suggestions
                            </RegenerateButton>
                        </Grid>
                    )}
                </Grid>

                <Grid item>
                    <Typography variant="h6" component="legend">
                        Weakness
                    </Typography>
                    <Divider/>
                </Grid>
                <Grid item>
                    <FormControl fullWidth>
                        <Typography variant="subtitle1" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            {requiredLabel('Weakness 1 (optional)', false)}
                        </Typography>
                        <Input
                            id="weakness1"
                            name="weakness1"
                            type="text"
                            placeholder="E.g. We are a new company and have not yet established a customer base."
                            value={step5FormData.weakness1}
                            onChange={handleChange}
                            onFocus={handleFocus3}
                            variant="outlined"
                            autoComplete="on"
                        />
                    </FormControl>
                    {loading3 && (
                        <Grid sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
                            <CircularProgress/>
                        </Grid>
                    )}
                    {!loading3 && showSuggestions3 && (
                        <Grid sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1, mt: 2}}>
                            {suggestions3.map((suggestion, index) => (
                                <CustomListItem
                                    key={index}
                                    suggestion={suggestion}
                                    handleClick={() => handleSuggestionClick3(suggestion)}
                                />
                            ))}
                        </Grid>
                    )}
                    {errorMsg3 && (
                        <Grid sx={{color: 'red', textAlign: 'center', mt: 2}}>
                            {errorMsg3}
                        </Grid>
                    )}
                    {showSuggestions3 && (
                        <Grid sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
                            <RegenerateButton
                                onClick={handleRegenerateClick3}
                                disabled={loading3}
                            >
                                Regenerate Suggestions
                            </RegenerateButton>
                        </Grid>
                    )}
                </Grid>

                <Grid item>
                    <FormControl fullWidth>
                        <Typography variant="subtitle1" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            {requiredLabel('Weakness 2 (optional)', false)}
                        </Typography>
                        <Input
                            id="weakness2"
                            name="weakness2"
                            type="text"
                            placeholder="E.g. Our budget is limited and we cannot afford to hire a large team."
                            value={step5FormData.weakness2}
                            onChange={handleChange}
                            onFocus={handleFocus4}
                            variant="outlined"
                            autoComplete="on"
                        />
                    </FormControl>
                    {loading4 && (
                        <Grid sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
                            <CircularProgress/>
                        </Grid>
                    )}
                    {!loading4 && showSuggestions4 && (
                        <Grid sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1, mt: 2}}>
                            {suggestions4.map((suggestion, index) => (
                                <CustomListItem
                                    key={index}
                                    suggestion={suggestion}
                                    handleClick={() => handleSuggestionClick4(suggestion)}
                                />
                            ))}
                        </Grid>
                    )}
                    {errorMsg4 && (
                        <Grid sx={{color: 'red', textAlign: 'center', mt: 2}}>
                            {errorMsg4}
                        </Grid>
                    )}
                    {showSuggestions4 && (
                        <Grid sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
                            <RegenerateButton
                                onClick={handleRegenerateClick4}
                                disabled={loading4}
                            >
                                Regenerate Suggestions
                            </RegenerateButton>
                        </Grid>
                    )}
                </Grid>

                <Grid container justifyContent="flex-start" spacing={2} sx={{mt: 2}}>
                    <Grid item>
                        <Button
                            color="inherit"
                            onClick={previousStep}
                            sx={{mr: 1}}
                        >
                            <KeyboardArrowLeft/> Back
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            onClick={onFinish}
                        >
                            Next <KeyboardArrowRight/>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    );
};

export default Step5;