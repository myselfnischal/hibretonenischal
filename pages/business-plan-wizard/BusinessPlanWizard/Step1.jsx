import React, {useEffect, useState} from 'react';
import {useSessionStorage} from 'react-use';
import {
    FormControl,
    RadioGroup,
    Grid,
    Typography,
    FormHelperText,
    Button
} from '@mui/material';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import StyledFormControlLabel from "./StyledFormControlLabel";

const Step1 = ({nextStep}) => {
    const [step1FormData, setStep1FormData] = useSessionStorage('BusinessPlanStepForm.step1FormData', {
        businessType: '',
        planUsage: ''
    });
    const [error, setError] = useState({businessType: false, planUsage: false});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setStep1FormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        setError(prev => ({...prev, [name]: false}));
    };

    const validateForm = () => {
        const errors = {};
        errors.businessType = !step1FormData.businessType;
        errors.planUsage = !step1FormData.planUsage;
        setError(errors);

        return !errors.businessType && !errors.planUsage;
    };

    const onFinish = () => {
        if (validateForm()) {
            nextStep();
        }
    };

    const requiredLabel = (label) => (
        <>
            {label} <span style={{color: 'red'}}>*</span>
        </>
    );

    return (
        <form noValidate autoComplete="on" onSubmit={onFinish}>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <FormControl component="fieldset" error={error.businessType} fullWidth>
                        <Typography variant="subtitle1" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            {requiredLabel('Is this an existing or an upcoming business?')}
                        </Typography>
                        <RadioGroup
                            id="businessType"
                            name="businessType"
                            value={step1FormData.businessType || ''}
                            onChange={handleChange}
                        >
                            <StyledFormControlLabel value="existing" groupValue={step1FormData.businessType}
                                                    label="Existing business"/>
                            <StyledFormControlLabel value="upcoming" groupValue={step1FormData.businessType}
                                                    label="Upcoming unlaunched business"/>
                        </RadioGroup>
                        {error.businessType && <FormHelperText>Please select an option.</FormHelperText>}
                    </FormControl>
                </Grid>

                <Grid item>
                    <FormControl component="fieldset" error={error.planUsage} fullWidth>
                        <Typography variant="subtitle1" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            {requiredLabel('What will you use this business plan for?')}
                        </Typography>
                        <RadioGroup
                            id="planUsage"
                            name="planUsage"
                            value={step1FormData.planUsage || ''}
                            onChange={handleChange}
                        >
                            <StyledFormControlLabel value="investors" groupValue={step1FormData.planUsage}
                                                    label="To be used to request fund from investors"/>
                            <StyledFormControlLabel value="banks" groupValue={step1FormData.planUsage}
                                                    label="To be used to request fund from banks"/>
                            <StyledFormControlLabel value="selfLearning" groupValue={step1FormData.planUsage}
                                                    label="For self-learning"/>
                            <StyledFormControlLabel value="schoolProject" groupValue={step1FormData.planUsage}
                                                    label="To be used as reference for school/university project"/>
                            <StyledFormControlLabel value="workplaceProject" groupValue={step1FormData.planUsage}
                                                    label="To be used as reference for workplace projects"/>
                            <StyledFormControlLabel value="nonFinancial" groupValue={step1FormData.planUsage}
                                                    label="To be used to submit to a non-financial institution for approval"/>
                            <StyledFormControlLabel value="other" groupValue={step1FormData.planUsage}
                                                    label="Other reasons"/>
                        </RadioGroup>
                        {error.planUsage && <FormHelperText>Please select an option.</FormHelperText>}
                    </FormControl>
                </Grid>

                <Grid container justifyContent="flex-start" spacing={2} sx={{mt: 2}}>
                    <Grid item>
                        <Button disabled>
                            <KeyboardArrowLeft/> Back
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button onClick={onFinish}>
                            Next <KeyboardArrowRight/>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    );
};

export default Step1;
