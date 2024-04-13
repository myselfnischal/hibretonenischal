import React, {useState, useEffect} from 'react';
import {useSessionStorage} from 'react-use';
import {
    Box,
    Grid,
    RadioGroup,
    FormControl,
    Button,
    Typography,
    FormHelperText,
    Input,
    Divider,
    CircularProgress, Chip
} from '@mui/material';
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import axios from "axios";
import StyledFormControlLabel from "./StyledFormControlLabel";
import RegenerateButton from "../../../components/elements/RegenerateButton";

const Step3 = ({previousStep, nextStep}) => {
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

    const [error, setError] = useState({
        group1Description: false,
        group1IncomeLevel: false,
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

    const fetchSuggestionData = async ({
                                           setLoading,
                                           setErrorMsg,
                                           setSuggestions,
                                           setLoadedSuggestions
                                       }) => {
        setLoading(true);
        setErrorMsg('');
        try {
            const response = await axios.post('/business-plan-writer/suggestion/customer-description', {
                step1: step1FormData,
                step2: step2FormData
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
        fetchSuggestionData({
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
        setStep3FormData(prevState => ({
            ...prevState,
            group1Description: suggestion
        }));
    };

    const fetchSuggestionData2 = () => {
        fetchSuggestionData({
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
        setStep3FormData(prevState => ({
            ...prevState,
            group2Description: suggestion
        }));
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setStep3FormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        setError(prev => ({...prev, [name]: false}));
    };


    const validateForm = () => {
        const newErrors = {...error};
        newErrors.group1Description = !step3FormData.group1Description;
        newErrors.group1IncomeLevel = !step3FormData.group1IncomeLevel;
        // No validation for optional fields
        setError(newErrors);
        return !newErrors.group1Description && !newErrors.group1IncomeLevel;
    };

    const onFinish = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Received values of form: ', step3FormData);
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
                        Customer Group 1 (required)
                    </Typography>
                    <Divider/>
                </Grid>
                <Grid item>
                    <FormControl fullWidth required error={error.group1Description}>
                        <Typography variant="subtitle1" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            {requiredLabel('Customer Group 1 Description', true)}
                        </Typography>
                        <Input
                            id="group1Description"
                            name="group1Description"
                            placeholder="Enter description"
                            value={step3FormData.group1Description}
                            onChange={handleChange}
                            onFocus={handleFocus1}
                            variant="outlined"
                            autoComplete="on"
                        />
                        {error.group1Description && <FormHelperText>Please input a description.</FormHelperText>}
                    </FormControl>
                    {loading1 && (
                        <Box sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
                            <CircularProgress/>
                        </Box>
                    )}
                    {!loading1 && showSuggestions1 && (
                        <Box sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1, mt: 2}}>
                            {suggestions1.map((suggestion, index) => (
                                <Chip
                                    key={index}
                                    label={suggestion}
                                    onClick={() => handleSuggestionClick1(suggestion)}
                                    sx={{
                                        borderRadius: 4,
                                        backgroundColor: '#ffffff',
                                        color: '#1976d2',
                                        border: '1px solid #1976d2',
                                        '&:hover': {
                                            backgroundColor: '#eeeeee',
                                        },
                                    }}
                                />
                            ))}
                        </Box>
                    )}
                    {errorMsg1 && (
                        <Box sx={{color: 'red', textAlign: 'center', mt: 2}}>
                            {errorMsg1}
                        </Box>
                    )}
                    {showSuggestions1 && (
                        <Box sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
                            <RegenerateButton
                                onClick={handleRegenerateClick1}
                                disabled={loading1}
                            >
                                Regenerate Suggestions
                            </RegenerateButton>
                        </Box>
                    )}
                </Grid>

                <Grid item>
                    <FormControl component="fieldset" required error={error.group1IncomeLevel} fullWidth>
                        <Typography variant="subtitle1" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            {requiredLabel('Customer Group 1 Income Level', true)}
                        </Typography>
                        <RadioGroup
                            id="group1IncomeLevel"
                            name="group1IncomeLevel"
                            value={step3FormData.group1IncomeLevel}
                            onChange={handleChange}
                        >
                            <StyledFormControlLabel value="Low-income" groupValue={step3FormData.group1IncomeLevel}
                                                    label="Low-income"/>
                            <StyledFormControlLabel value="Medium-income" groupValue={step3FormData.group1IncomeLevel}
                                                    label="Medium-income"/>
                            <StyledFormControlLabel value="High-income" groupValue={step3FormData.group1IncomeLevel}
                                                    label="High-income"/>
                        </RadioGroup>
                        {error.group1IncomeLevel && <FormHelperText>Please select an income level.</FormHelperText>}
                    </FormControl>
                </Grid>

                {/* Customer Group 2 */}
                <Grid item>
                    <Typography variant="h6" component="legend">
                        Customer Group 2 (optional)
                    </Typography>
                    <Divider/>
                </Grid>
                <Grid item>
                    <FormControl fullWidth>
                        <Typography variant="subtitle1" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            {requiredLabel('Customer Group 2 Description', false)}
                        </Typography>
                        <Input
                            id="group2Description"
                            name="group2Description"
                            placeholder="Enter description (optional)"
                            value={step3FormData.group2Description}
                            onChange={handleChange}
                            onFocus={handleFocus2}
                            variant="outlined"
                            autoComplete="on"
                        />
                    </FormControl>
                    {loading2 && (
                        <Box sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
                            <CircularProgress/>
                        </Box>
                    )}
                    {!loading2 && showSuggestions2 && (
                        <Box sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1, mt: 2}}>
                            {suggestions2.map((suggestion, index) => (
                                <Chip
                                    key={index}
                                    label={suggestion}
                                    onClick={() => handleSuggestionClick2(suggestion)}
                                    sx={{
                                        borderRadius: 4,
                                        backgroundColor: '#ffffff',
                                        color: '#1976d2',
                                        border: '1px solid #1976d2',
                                        '&:hover': {
                                            backgroundColor: '#eeeeee',
                                        },
                                    }}
                                />
                            ))}
                        </Box>
                    )}
                    {errorMsg2 && (
                        <Box sx={{color: 'red', textAlign: 'center', mt: 2}}>
                            {errorMsg2}
                        </Box>
                    )}
                    {showSuggestions2 && (
                        <Box sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
                            <RegenerateButton
                                onClick={handleRegenerateClick2}
                                disabled={loading2}
                            >
                                Regenerate Suggestions
                            </RegenerateButton>
                        </Box>
                    )}
                </Grid>

                <Grid item>
                    <FormControl component="fieldset" fullWidth>
                        <Typography variant="subtitle1" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            {requiredLabel('Customer Group 2 Income Level', false)}
                        </Typography>
                        <RadioGroup
                            id="group2IncomeLevel"
                            name="group2IncomeLevel"
                            value={step3FormData.group2IncomeLevel}
                            onChange={handleChange}
                        >
                            <StyledFormControlLabel value="Low-income" groupValue={step3FormData.group2IncomeLevel}
                                                    label="Low-income"/>
                            <StyledFormControlLabel value="Medium-income" groupValue={step3FormData.group2IncomeLevel}
                                                    label="Medium-income"/>
                            <StyledFormControlLabel value="High-income" groupValue={step3FormData.group2IncomeLevel}
                                                    label="High-income"/>
                        </RadioGroup>
                    </FormControl>
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

export default Step3;
