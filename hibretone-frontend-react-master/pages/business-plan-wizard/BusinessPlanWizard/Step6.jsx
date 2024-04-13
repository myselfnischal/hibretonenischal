import React, {useState} from 'react';
import {
    Grid,
    Select,
    MenuItem,
    FormControl,
    Typography,
    Divider,
    Button,
    FormHelperText,
    InputLabel,
    Input,
    TextField,
    CircularProgress, Chip
} from '@mui/material';
import {useSessionStorage} from "react-use";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import axios from "axios";
import RegenerateButton from "../../../components/elements/RegenerateButton";

const currencySymbols = {
    USD: '$', // US Dollar
    EUR: '€', // Euro
    GBP: '£', // British Pound
    CNY: '¥', // Chinese Yuan
    JPY: '¥', // Japanese Yen
    AUD: 'A$', // Australian Dollar
    CAD: 'C$', // Canadian Dollar
};

const Step6 = ({previousStep, nextStep}) => {
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
    const [step6FormData, setStep6FormData] = useSessionStorage('BusinessPlanStepForm.step6FormData', {
        currency: '',
        totalInitialInvestment: '',
        investmentItem1: '',
        investmentAmount1: '',
        investmentItem2: '',
        investmentAmount2: '',
        investmentItem3: '',
        investmentAmount3: '',
        investmentItem4: '',
        investmentAmount4: '',
        investmentItem5: '',
        investmentAmount5: '',
    });

    const [error, setError] = useState({
        currency: false,
    });
    const [formError, setFormError] = useState('');

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

    const [showSuggestions5, setShowSuggestions5] = useState(false);
    const [suggestions5, setSuggestions5] = useState([]);
    const [loading5, setLoading5] = useState(false);
    const [loadedSuggestions5, setLoadedSuggestions5] = useState(false);
    const [errorMsg5, setErrorMsg5] = useState('');

    const fetchInvestmentItemSuggestionData = async ({
                                                         setLoading,
                                                         setErrorMsg,
                                                         setSuggestions,
                                                         setLoadedSuggestions
                                                     }) => {
        setLoading(true);
        setErrorMsg('');
        try {
            const response = await axios.post('/business-plan-writer/suggestion/investment-item', {
                step1: step1FormData,
                step2: step2FormData,
                step3: step3FormData,
                step4: step4FormData,
                step5: step5FormData
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
        fetchInvestmentItemSuggestionData({
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
        setStep6FormData(prevState => ({
            ...prevState,
            investmentItem1: suggestion
        }));
    };

    const fetchSuggestionData2 = () => {
        fetchInvestmentItemSuggestionData({
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
        setStep6FormData(prevState => ({
            ...prevState,
            investmentItem2: suggestion
        }));
    };

    const fetchSuggestionData3 = () => {
        fetchInvestmentItemSuggestionData({
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
        setStep6FormData(prevState => ({
            ...prevState,
            investmentItem3: suggestion
        }));
    };

    const fetchSuggestionData4 = () => {
        fetchInvestmentItemSuggestionData({
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
        setStep6FormData(prevState => ({
            ...prevState,
            investmentItem4: suggestion
        }));
    };

    const fetchSuggestionData5 = () => {
        fetchInvestmentItemSuggestionData({
            setLoading: setLoading5,
            setErrorMsg: setErrorMsg5,
            setSuggestions: setSuggestions5,
            setLoadedSuggestions: setLoadedSuggestions5
        });
    }
    const loadSuggestions5 = () => {
        if (!loadedSuggestions5) {
            setLoading5(true);
            fetchSuggestionData5();
        }
    }
    const handleRegenerateClick5 = () => {
        setLoading5(true);
        fetchSuggestionData5();
    }
    const handleFocus5 = () => {
        setShowSuggestions5(true);
        loadSuggestions5();
    }
    const handleSuggestionClick5 = (suggestion) => {
        setStep6FormData(prevState => ({
            ...prevState,
            investmentItem5: suggestion
        }));
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setStep6FormData(prevState => ({
            ...prevState, [name]: value
        }));
        setError(prev => ({...prev, [name]: false}));
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {...error};
        newErrors.currency = !step6FormData.currency;
        setError(newErrors);

        const totalInvestment = ['investmentAmount1', 'investmentAmount2', 'investmentAmount3', 'investmentAmount4', 'investmentAmount5']
            .reduce((sum, fieldName) => sum + (parseFloat(step6FormData[fieldName]) || 0), 0);

        // Compare the sum with the total initial investment
        const totalInitialInvestment = parseFloat(step6FormData.totalInitialInvestment) || 0;
        const difference = totalInvestment - totalInitialInvestment;

        if (difference !== 0) {
            isValid = false;
            setFormError(`Total Initial Investment must be equal to what you inputted in Investment Amount field, currently there is a difference of ${difference.toFixed(2)}`);
        } else {
            setFormError('');
        }

        setError(newErrors);
        return isValid && !newErrors.currency && difference === 0;
    };

    const onFinish = (e) => {
        e.preventDefault();
        if (validateForm()) {
            nextStep();
        }
    };

    const requiredLabel = (label, required) => (<>
        {label} {required && <span style={{color: 'red'}}>*</span>}
    </>);
    return (
        <form noValidate autoComplete="on" onSubmit={onFinish}>
            <Grid container direction="column" spacing={2} sx={{mt: 2}}>
                <Grid container alignItems="center" sx={{mb: 2}}>
                    <Grid item sx={{ml: 2}}>
                        <Typography variant="h6" component="legend">
                            {requiredLabel('Business Plan Currency', true)}
                        </Typography>
                    </Grid>
                    <Grid item sx={{ml: 2}}>
                        <FormControl fullWidth required error={error.currency}>
                            <InputLabel id="currency-select-label" sx={{
                                color: 'primary.main', fontWeight: 'bold'
                            }}>Currency</InputLabel>
                            <Select
                                labelId="currency-select-label"
                                id="currency-select"
                                name="currency"
                                value={step6FormData.currency}
                                onChange={handleChange}
                                label="Currency"
                                sx={{
                                    width: '150px', color: 'primary.main', fontWeight: 'bold'
                                }}
                            >
                                <MenuItem value="USD">USD ($)</MenuItem>
                                <MenuItem value="EUR">EUR (€)</MenuItem>
                                <MenuItem value="GBP">GBP (£)</MenuItem>
                                <MenuItem value="CNY">CNY (¥)</MenuItem>
                                <MenuItem value="JPY">JPY (¥)</MenuItem>
                                <MenuItem value="AUD">AUD (A$)</MenuItem>
                                <MenuItem value="CAD">CAD (C$)</MenuItem>
                                <MenuItem value="Other">Other</MenuItem>
                            </Select>
                            {error.currency && <FormHelperText>Please input a Currency.</FormHelperText>}
                        </FormControl>
                    </Grid>
                </Grid>
                <Divider/>

                <Grid item sx={{ml: 2, mr: 2}}>
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                        Note: If your business sells a physical product, don't include the cost of making or buying the
                        first batch of product in your initial investment. You should list this expense under "Cost of
                        Goods Sold (COGS)" on the next page.
                    </Typography>
                </Grid>

                <Grid item>
                    <FormControl fullWidth>
                        <Typography variant="h6" component="legend" sx={{mb: 1}}>
                            Total Initial Investment
                        </Typography>
                        <TextField
                            id="totalInitialInvestment"
                            label={currencySymbols[step6FormData.currency] || ""}
                            name="totalInitialInvestment"
                            type="number"
                            value={step6FormData.totalInitialInvestment}
                            onChange={handleChange}
                            variant="outlined"
                            autoComplete="on"
                            sx={{width: '250px'}}
                        />
                    </FormControl>
                </Grid>

                <Grid item sx={{mb: 2}}>
                    <Typography variant="h6" component="legend">
                        What will you spend your initial investment on?
                    </Typography>
                </Grid>
                <Divider/>


                <Grid container alignItems="center" spacing={2} sx={{mt: 0}}>
                    <Grid item xs={1} container justifyContent="center" alignItems="center">
                        <Typography variant="subtitle1" component="legend"
                                    sx={{ml: 2, fontWeight: 'bold', textAlign: 'center'}}>
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            Investment Item
                        </Typography>
                    </Grid>
                    <Grid item xs={5}>
                        <Typography variant="subtitle1" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            Investment Amount
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container alignItems="center" spacing={2} sx={{mt: 0}}>
                    <Grid item xs={1} container justifyContent="center" alignItems="center">
                        <Typography variant="subtitle1" component="legend"
                                    sx={{ml: 2, fontWeight: 'bold', textAlign: 'center'}}>
                            1.
                        </Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Input
                            id="investmentItem1"
                            name="investmentItem1"
                            value={step6FormData.investmentItem1}
                            onChange={handleChange}
                            onFocus={handleFocus1}
                            type="text"
                            variant="outlined"
                            autoComplete="on"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <TextField
                            id="investmentAmount1"
                            label={currencySymbols[step6FormData.currency] || ""}
                            name="investmentAmount1"
                            type="number"
                            value={step6FormData.investmentAmount1}
                            onChange={handleChange}
                            variant="outlined"
                            autoComplete="on"
                            fullWidth
                        />
                    </Grid>
                </Grid>

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

                <Grid container alignItems="center" spacing={2} sx={{mt: 0}}>
                    <Grid item xs={1} container justifyContent="center" alignItems="center">
                        <Typography variant="subtitle1" component="legend"
                                    sx={{ml: 2, fontWeight: 'bold', textAlign: 'center'}}>
                            2.
                        </Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Input
                            id="investmentItem2"
                            name="investmentItem2"
                            value={step6FormData.investmentItem2}
                            type="text"
                            onChange={handleChange}
                            onFocus={handleFocus2}
                            variant="outlined"
                            autoComplete="on"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <TextField
                            id="investmentAmount2"
                            label={currencySymbols[step6FormData.currency] || ""}
                            name="investmentAmount2"
                            type="number"
                            value={step6FormData.investmentAmount2}
                            onChange={handleChange}
                            variant="outlined"
                            autoComplete="on"
                            fullWidth
                        />
                    </Grid>
                </Grid>
                {loading2 && (
                    <Grid sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
                        <CircularProgress/>
                    </Grid>
                )}
                {!loading2 && showSuggestions2 && (
                    <Grid sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1, mt: 2}}>
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

                <Grid container alignItems="center" spacing={2} sx={{mt: 0}}>
                    <Grid item xs={1} container justifyContent="center" alignItems="center">
                        <Typography variant="subtitle1" component="legend"
                                    sx={{ml: 2, fontWeight: 'bold', textAlign: 'center'}}>
                            3.
                        </Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Input
                            id="investmentItem3"
                            name="investmentItem3"
                            value={step6FormData.investmentItem3}
                            type="text"
                            onChange={handleChange}
                            onFocus={handleFocus3}
                            variant="outlined"
                            autoComplete="on"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <TextField
                            id="investmentAmount3"
                            label={currencySymbols[step6FormData.currency] || ""}
                            name="investmentAmount3"
                            type="number"
                            value={step6FormData.investmentAmount3}
                            onChange={handleChange}
                            variant="outlined"
                            autoComplete="on"
                            fullWidth
                        />
                    </Grid>
                </Grid>

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

                <Grid container alignItems="center" spacing={2} sx={{mt: 0}}>
                    <Grid item xs={1} container justifyContent="center" alignItems="center">
                        <Typography variant="subtitle1" component="legend"
                                    sx={{ml: 2, fontWeight: 'bold', textAlign: 'center'}}>
                            4.
                        </Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Input
                            id="investmentItem4"
                            name="investmentItem4"
                            value={step6FormData.investmentItem4}
                            type="text"
                            onChange={handleChange}
                            onFocus={handleFocus4}
                            variant="outlined"
                            autoComplete="on"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <TextField
                            id="investmentAmount4"
                            label={currencySymbols[step6FormData.currency] || ""}
                            name="investmentAmount4"
                            type="number"
                            value={step6FormData.investmentAmount4}
                            onChange={handleChange}
                            variant="outlined"
                            autoComplete="on"
                            fullWidth
                        />
                    </Grid>
                </Grid>

                {loading4 && (
                    <Grid sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
                        <CircularProgress/>
                    </Grid>
                )}
                {!loading4 && showSuggestions4 && (
                    <Grid sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1, mt: 2}}>
                        {suggestions4.map((suggestion, index) => (
                            <Chip
                                key={index}
                                label={suggestion}
                                onClick={() => handleSuggestionClick4(suggestion)}
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

                <Grid container alignItems="center" spacing={2} sx={{mt: 0}}>
                    <Grid item xs={1} container justifyContent="center" alignItems="center">
                        <Typography variant="subtitle1" component="legend"
                                    sx={{ml: 2, fontWeight: 'bold', textAlign: 'center'}}>
                            5.
                        </Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Input
                            id="investmentItem5"
                            name="investmentItem5"
                            value={step6FormData.investmentItem5}
                            type="text"
                            onChange={handleChange}
                            onFocus={handleFocus5}
                            variant="outlined"
                            autoComplete="on"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <TextField
                            id="investmentAmount5"
                            label={currencySymbols[step6FormData.currency] || ""}
                            name="investmentAmount5"
                            type="number"
                            value={step6FormData.investmentAmount5}
                            onChange={handleChange}
                            variant="outlined"
                            autoComplete="on"
                            fullWidth
                        />
                    </Grid>
                </Grid>

                {loading5 && (
                    <Grid sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
                        <CircularProgress/>
                    </Grid>
                )}
                {!loading5 && showSuggestions5 && (
                    <Grid sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1, mt: 2}}>
                        {suggestions5.map((suggestion, index) => (
                            <Chip
                                key={index}
                                label={suggestion}
                                onClick={() => handleSuggestionClick5(suggestion)}
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
                {errorMsg5 && (
                    <Grid sx={{color: 'red', textAlign: 'center', mt: 2}}>
                        {errorMsg5}
                    </Grid>
                )}
                {showSuggestions5 && (
                    <Grid sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
                        <RegenerateButton
                            onClick={handleRegenerateClick5}
                            disabled={loading5}
                        >
                            Regenerate Suggestions
                        </RegenerateButton>
                    </Grid>
                )}

                {formError && (
                    <Grid item>
                        <FormHelperText error={true}>{formError}</FormHelperText>
                    </Grid>
                )}

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
        </form>);
};

export default Step6;
