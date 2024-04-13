import React, {useEffect, useState} from 'react';
import {useSessionStorage} from 'react-use';
import {
    Grid,
    FormControl,
    Button,
    Typography,
    FormHelperText, Input, Divider, Box, CircularProgress, Chip, ListItem, ListItemText
} from '@mui/material';
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import axios from "axios";
import CustomListItem from "../../../components/elements/CustomedListItem";
import RegenerateButton from "../../../components/elements/RegenerateButton";

const Step4 = ({previousStep, nextStep}) => {
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

    const [error, setError] = useState({
        product1Name: false,
        product1Description: false,
    });

    const [showSuggestions1, setShowSuggestions1] = useState(false);
    const [suggestions1, setSuggestions1] = useState([]);
    const [loading1, setLoading1] = useState(false);
    const [loadedSuggestions1, setLoadedSuggestions1] = useState(false);
    const [errorMsg1, setErrorMsg1] = useState('');

    const [showSuggestions3, setShowSuggestions3] = useState(false);
    const [suggestions3, setSuggestions3] = useState([]);
    const [loading3, setLoading3] = useState(false);
    const [loadedSuggestions3, setLoadedSuggestions3] = useState(false);
    const [errorMsg3, setErrorMsg3] = useState('');

    const fetchProductNameSuggestionData = async ({
                                                      setLoading,
                                                      setErrorMsg,
                                                      setSuggestions,
                                                      setLoadedSuggestions
                                                  }) => {
        setLoading(true);
        setErrorMsg('');
        try {
            const response = await axios.post('/business-plan-writer/suggestion/product', {
                step1: step1FormData,
                step2: step2FormData,
                step3: step3FormData,
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
        fetchProductNameSuggestionData({
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
        setStep4FormData(prevState => ({
            ...prevState,
            product1Name: suggestion
        }));
    };
    const fetchSuggestionData3 = () => {
        fetchProductNameSuggestionData({
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
        setStep4FormData(prevState => ({
            ...prevState,
            product2Name: suggestion
        }));
    };

    const [showSuggestions2, setShowSuggestions2] = useState(false);
    const [suggestions2, setSuggestions2] = useState([]);
    const [loading2, setLoading2] = useState(false);
    const [loadedSuggestions2, setLoadedSuggestions2] = useState(false);
    const [errorMsg2, setErrorMsg2] = useState('');

    const [showSuggestions4, setShowSuggestions4] = useState(false);
    const [suggestions4, setSuggestions4] = useState([]);
    const [loading4, setLoading4] = useState(false);
    const [loadedSuggestions4, setLoadedSuggestions4] = useState(false);
    const [errorMsg4, setErrorMsg4] = useState('');

    const fetchProductDescriptionSuggestionData = async ({
                                                             setLoading,
                                                             setErrorMsg,
                                                             setSuggestions,
                                                             setLoadedSuggestions,
                                                             productOrServiceName,
                                                         }) => {
        setLoading(true);
        setErrorMsg('');
        try {
            const response = await axios.post('/business-plan-writer/suggestion/product-description', {
                step1: step1FormData,
                step2: step2FormData,
                step3: step3FormData,
                productOrServiceName: productOrServiceName,
            }, {timeout: 10000});

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
    const fetchSuggestionData2 = () => {
        fetchProductDescriptionSuggestionData({
            setLoading: setLoading2,
            setErrorMsg: setErrorMsg2,
            setSuggestions: setSuggestions2,
            setLoadedSuggestions: setLoadedSuggestions2,
            productOrServiceName: step4FormData.product1Name,
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
        if (!step4FormData.product1Name) {
            setErrorMsg2('Please input the name of product or service 1 first.');
            return;
        } else {
            setErrorMsg2('');
        }
        setShowSuggestions2(true);
        loadSuggestions2();
    };
    const handleSuggestionClick2 = (suggestion) => {
        if (!step4FormData.product1Name) {
            setErrorMsg2('Please input the name of product or service 1 first.');
            return;
        } else {
            setErrorMsg2('');
        }
        setStep4FormData(prevState => ({
            ...prevState,
            product1Description: suggestion
        }));
    };

    const fetchSuggestionData4 = () => {
        fetchProductDescriptionSuggestionData({
            setLoading: setLoading4,
            setErrorMsg: setErrorMsg4,
            setSuggestions: setSuggestions4,
            setLoadedSuggestions: setLoadedSuggestions4,
            productOrServiceName: step4FormData.product2Name,
        });
    }
    const loadSuggestions4 = () => {
        if (!loadedSuggestions4) {
            setLoading4(true);
            fetchSuggestionData4();
        }
    };
    const handleRegenerateClick4 = () => {
        if (!step4FormData.product2Name) {
            setErrorMsg4('Please input the name of product or service 2 first.');
            return;
        } else {
            setErrorMsg4('');
        }
        setLoading4(true);
        fetchSuggestionData4();
    };
    const handleFocus4 = () => {
        if (!step4FormData.product2Name) {
            setErrorMsg4('Please input the name of product or service 2 first.');
            return;
        } else {
            setErrorMsg4('');
        }
        setShowSuggestions4(true);
        loadSuggestions4();
    };
    const handleSuggestionClick4 = (suggestion) => {
        setStep4FormData(prevState => ({
            ...prevState,
            product2Description: suggestion
        }));
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setStep4FormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        setError(prev => ({...prev, [name]: false}));
    };

    const validateForm = () => {
        const newErrors = {...error};
        newErrors.product1Name = !step4FormData.product1Name;
        newErrors.product1Description = !step4FormData.product1Description;
        setError(newErrors);
        return !newErrors.product1Name && !newErrors.product1Description;
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
                        Product or Service 1 (required)
                    </Typography>
                    <Divider/>
                </Grid>
                <Grid item>
                    <FormControl fullWidth required error={error.product1Name}>
                        <Typography variant="subtitle1" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            {requiredLabel('Product or Service 1 Name', true)}
                        </Typography>
                        <Input
                            id="product1Name"
                            name="product1Name"
                            placeholder="Enter name of product or service 1"
                            value={step4FormData.product1Name}
                            onChange={handleChange}
                            onFocus={handleFocus1}
                            variant="outlined"
                            autoComplete="on"
                        />
                        {error.product1Name && <FormHelperText>Please input a name.</FormHelperText>}
                    </FormControl>
                    {loading1 && (
                        <Grid sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
                            <CircularProgress/>
                        </Grid>
                    )}
                    {!loading1 && showSuggestions1 && (
                        <Grid sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1, mt: 2}}>
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
                    <FormControl fullWidth required error={error.product1Description}>
                        <Typography variant="subtitle1" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            {requiredLabel('Product or Service 1 Description', true)}
                        </Typography>
                        <Input
                            id="product1Description"
                            name="product1Description"
                            type="text"
                            placeholder="Enter description of product or service 1"
                            value={step4FormData.product1Description}
                            onChange={handleChange}
                            onFocus={handleFocus2}
                            variant="outlined"
                            autoComplete="on"
                        />
                        {error.product1Description && <FormHelperText>Please input the description.</FormHelperText>}
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
                        Product or Service 2 (optional)
                    </Typography>
                    <Divider/>
                </Grid>
                <Grid item>
                    <FormControl fullWidth>
                        <Typography variant="subtitle1" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            {requiredLabel('Product or Service 2 Name', false)}
                        </Typography>
                        <Input
                            id="product2Name"
                            name="product2Name"
                            placeholder="Enter name of product or service 2"
                            value={step4FormData.product2Name}
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
                                <Chip
                                    key={index}
                                    label={suggestion}
                                    onClick={() => handleSuggestionClick3(suggestion)}
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
                        </Grid>
                    )}
                    {errorMsg3 && (
                        <Box sx={{color: 'red', textAlign: 'center', mt: 2}}>
                            {errorMsg3}
                        </Box>
                    )}
                    {showSuggestions3 && (
                        <Box sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
                            <RegenerateButton
                                onClick={handleRegenerateClick3}
                                disabled={loading3}
                            >
                                Regenerate Suggestions
                            </RegenerateButton>
                        </Box>
                    )}
                </Grid>

                <Grid item>
                    <FormControl fullWidth>
                        <Typography variant="subtitle1" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            {requiredLabel('Product or Service 2 Description', false)}
                        </Typography>
                        <Input
                            id="product2Description"
                            name="product2Description"
                            placeholder="Enter description of product or service 2"
                            value={step4FormData.product2Description}
                            onChange={handleChange}
                            onFocus={handleFocus4}
                            variant="outlined"
                            autoComplete="on"
                        />
                    </FormControl>
                    {loading4 && (
                        <Box sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
                            <CircularProgress/>
                        </Box>
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
                        <Box sx={{color: 'red', textAlign: 'center', mt: 2}}>
                            {errorMsg4}
                        </Box>
                    )}
                    {showSuggestions4 && (
                        <Box sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
                            <RegenerateButton
                                onClick={handleRegenerateClick4}
                                disabled={loading4}
                            >
                                Regenerate Suggestions
                            </RegenerateButton>
                        </Box>
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

export default Step4;