import {
    Backdrop,
    Button, CircularProgress, Divider,
    FormControl,
    FormHelperText,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Typography
} from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import React, {useState} from "react";
import {useSessionStorage} from "react-use";
import axios from "axios";

const Step8 = ({previousStep, nextStep}) => {
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
    const [step7FormData, setStep7FormData] = useSessionStorage('BusinessPlanStepForm.step7FormData', {
        language: '',
        expectedRevenue: '',
        growthRate: '',
        revenuePercentage1: '40',
        revenuePercentage2: '6',
        revenuePercentage3: '5',
        revenuePercentage4: '0',
        revenuePercentage5: '1',
        revenuePercentage6: '2',
        revenuePercentage7: '0',
        revenuePercentage8: '1',
        revenuePercentage9: '0',
        taxPercentage: '20',
        incomeTax: '0',
        totalCost: '0',
        netProfit: '0',
        profitMargin: '0',
    });
    const [language, setLanguage] = useSessionStorage('BusinessPlan.language', "");
    const [error, setError] = React.useState(false);

    const [executiveSummary, setExecutiveSummary] = useSessionStorage('BusinessPlan.executiveSummary', {
        businessOverview: '',
        businessOrigins: '',
        competitiveAdvantage: '',
        financialSummary: '',
    });
    const [isVIP, setIsVIP] = useSessionStorage('BusinessPlan.isVIP', false);
    const [outputFile, setOutputFile] = useSessionStorage('BusinessPlan.outputFile', {
        pdfUrl: '',
        docxUrl: ''
    });
    const [loading, setLoading] = useState(false);
    const [generatePlanError, setGeneratePlanError] = useState(false);

    const removeAllBusinessPlanStepForm = () => {
        Object.keys(sessionStorage).forEach((key) => {
            if (key.startsWith('BusinessPlanStepForm')) {
                sessionStorage.removeItem(key);
            }
        });
    };

    const generatePlan = async () => {
        setLoading(true);
        let success = false;
        try {
            const response = await axios.post('/business-plan-writer/biz_plan/generate', {
                step1: step1FormData,
                step2: step2FormData,
                step3: step3FormData,
                step4: step4FormData,
                step5: step5FormData,
                step6: step6FormData,
                step7: step7FormData,
                language: language,
            }, {timeout: 10000});
            if (response.status !== 200) {
                throw new Error('Failed to generate Business Plan, please try again later.');
            }
            const newExecutiveSummary = JSON.stringify(response.data.executiveSummary);
            sessionStorage.setItem('BusinessPlan.executiveSummary', newExecutiveSummary);

            sessionStorage.setItem('BusinessPlan.isVIP', JSON.stringify(response.data.isVIP));

            if (response.data.isVIP) {
                const newOutputFile = JSON.stringify(response.data.outputFile);
                sessionStorage.setItem('BusinessPlan.outputFile', newOutputFile);
            }

            setGeneratePlanError(false);
            success = true;
        } catch (error) {
            setGeneratePlanError(true);
        }
        finally {
            setLoading(false);
        }
        if (success) {
            removeAllBusinessPlanStepForm();
            nextStep();
        }
    }
    const onFinish = () => {
        if (language === "") {
            setError(true);
            return;
        }
        generatePlan();
    }

    const requiredLabel = (label, required) => (
        <>
            {label} {required && <span style={{color: 'red'}}>*</span>}
        </>
    );

    return (
        <>
            <form noValidate autoComplete="on" onSubmit={onFinish}>
                <Grid container justifyContent="center" sx={{mt: 2}}>
                    <Grid container justifyContent="center" alignItems="center" sx={{mt: 4}}>
                        <Grid item sx={{ml: 2}}>
                            <Typography variant="h6" component="legend">
                                {requiredLabel('Business Plan Language', true)}
                            </Typography>
                        </Grid>
                        <Grid item sx={{ml: 2}}>
                            <FormControl fullWidth required error={error}>
                                <InputLabel id="language-select-label" sx={{
                                    color: 'primary.main', fontWeight: 'bold'
                                }}>Language</InputLabel>
                                <Select
                                    labelId="language-select-label"
                                    id="language-select"
                                    name="language"
                                    value={language}
                                    onChange={(event) => {
                                        setLanguage(event.target.value);
                                        setError(false);
                                    }}
                                    label="Language"
                                    sx={{
                                        width: '250px', color: 'primary.main', fontWeight: 'bold'
                                    }}
                                >
                                    <MenuItem value="en-US">English (US)</MenuItem>
                                    <MenuItem value="en-UK">English (UK)</MenuItem>
                                    <MenuItem value="de">German</MenuItem>
                                    <MenuItem value="fr">French</MenuItem>
                                    <MenuItem value="es">Spanish</MenuItem>
                                    <MenuItem value="it">Italian</MenuItem>
                                    <MenuItem value="nl">Dutch</MenuItem>
                                    <MenuItem value="ja">Japanese</MenuItem>
                                    <MenuItem value="ar">Arabic</MenuItem>
                                    <MenuItem value="sv">Swedish</MenuItem>
                                    <MenuItem value="fi">Finnish</MenuItem>
                                    <MenuItem value="no">Norwegian</MenuItem>
                                    <MenuItem value="da">Danish</MenuItem>
                                </Select>
                                {error && <FormHelperText>Please input a Language.</FormHelperText>}
                            </FormControl>
                        </Grid>
                    </Grid>

                    <Grid>
                        <Divider/>
                    </Grid>

                    <Grid container justifyContent="center" spacing={2} sx={{mt: 2}}>
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
                                Generate Plan<KeyboardArrowRight/>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item sx={{mt: 2, ml: 2, mr: 2}}>
                        <Typography variant="body1" color="text.secondary" sx={{textAlign: 'center'}}>
                            Note: Please check your inputs before generating plan, once you click generate plan you will
                            not
                            be
                            able to edit your inputs.
                        </Typography>
                    </Grid>
                    {generatePlanError && (
                        <Grid sx={{color: 'red', textAlign: 'center', mt: 2}}>
                            <Typography variant="body1">
                                Failed to generate Business Plan, please try again later.
                            </Typography>
                        </Grid>
                    )}
                </Grid>
            </form>

            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={loading}
            >
                <CircularProgress/>
            </Backdrop>
        </>
    );
};

export default Step8;
