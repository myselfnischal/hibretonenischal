import React, {useEffect, useState} from 'react';
import {useSessionStorage} from 'react-use';
import {
    Grid,
    Input,
    RadioGroup,
    FormControl,
    Button,
    Typography,
    TextField,
    FormHelperText
} from '@mui/material';
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import StyledFormControlLabel from "./StyledFormControlLabel";

const Step2 = ({previousStep, nextStep}) => {
    const [step2FormData, setStep2FormData] = useSessionStorage('BusinessPlanStepForm.step2FormData', {
        businessName: '',
        businessDescription: '',
        numberOfEmployees: '',
        productOrService: '',
        productServiceAccess: '',
        serviceArea: ''
    });

    const [error, setError] = useState({
        businessName: false,
        businessDescription: false,
        numberOfEmployees: false,
        productOrService: false,
        productServiceAccess: false,
        serviceArea: false
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setStep2FormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        setError(prev => ({...prev, [name]: false}));
    };

    const validateForm = () => {
        const newErrors = {};
        Object.keys(step2FormData).forEach(key => {
            newErrors[key] = step2FormData[key] === '';
        });

        setError(newErrors);
        return !Object.values(newErrors).some(val => val === true);
    };

    const onFinish = (e) => {
        e.preventDefault();
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
                    <FormControl fullWidth required error={error.businessName}>
                        <Typography variant="subtitle1" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            {requiredLabel('Your business name')}
                        </Typography>
                        <Input
                            id="businessName"
                            name="businessName"
                            type="text"
                            placeholder="Enter your business name"
                            value={step2FormData.businessName}
                            onChange={handleChange}
                            autoComplete="on"
                        />
                        {error.businessName && <FormHelperText>Please input your business name.</FormHelperText>}
                    </FormControl>
                </Grid>

                <Grid item>
                    <FormControl fullWidth required error={error.businessDescription}>
                        <Typography variant="subtitle1" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            {requiredLabel('Your business description')}
                        </Typography>
                        <Input
                            id="businessDescription"
                            name="businessDescription"
                            type="text"
                            placeholder="e.g. hotel / restaurant / online clothing store / Auto Repair / Real Estate Agent"
                            value={step2FormData.businessDescription}
                            onChange={handleChange}
                            sx={{fontSize: '0.875rem'}}
                            autoComplete="on"
                        />
                        {error.businessDescription &&
                            <FormHelperText>Please input your business description.</FormHelperText>}
                    </FormControl>
                </Grid>

                <Grid item>
                    <FormControl required error={error.numberOfEmployees}>
                        <Typography variant="subtitle1" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            {requiredLabel('Number of employees')}
                        </Typography>
                        <TextField
                            id="numberOfEmployees"
                            name="numberOfEmployees"
                            type="number"
                            inputProps={{min: 0}}
                            placeholder="0"
                            value={step2FormData.numberOfEmployees}
                            onChange={handleChange}
                            sx={{fontSize: '0.875rem', width: '200px'}}
                            autoComplete="on"
                        />
                        {error.numberOfEmployees &&
                            <FormHelperText>Please input the number of employees.</FormHelperText>}
                    </FormControl>
                </Grid>

                <Grid item>
                    <FormControl component="fieldset" required error={error.productOrService} fullWidth>
                        <Typography variant="subtitle1" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            {requiredLabel('Do you offer a product or service?')}
                        </Typography>
                        <RadioGroup
                            id="productOrService"
                            name="productOrService"
                            value={step2FormData.productOrService}
                            onChange={handleChange}
                        >
                            <StyledFormControlLabel value="product" groupValue={step2FormData.productOrService}
                                                     label="Product"/>
                            <StyledFormControlLabel value="service" groupValue={step2FormData.productOrService}
                                                     label="Service (retail businesses are considered service)"/>
                        </RadioGroup>
                        {error.productOrService && <FormHelperText>Please select an option.</FormHelperText>}
                    </FormControl>
                </Grid>

                <Grid item>
                    <FormControl component="fieldset" required error={error.productServiceAccess} fullWidth>
                        <Typography variant="subtitle1" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            {requiredLabel('How can customer get your product or service?')}
                        </Typography>
                        <RadioGroup
                            id="productServiceAccess"
                            name="productServiceAccess"
                            value={step2FormData.productServiceAccess}
                            onChange={handleChange}
                        >
                            <StyledFormControlLabel value="online" groupValue={step2FormData.productServiceAccess}
                                                     label="Online"/>
                            <StyledFormControlLabel value="physical" groupValue={step2FormData.productServiceAccess}
                                                     label="Physical Location"/>
                            <StyledFormControlLabel value="both" groupValue={step2FormData.productServiceAccess}
                                                     label="Both online and physical location"/>
                        </RadioGroup>
                        {error.productServiceAccess && <FormHelperText>Please select an option.</FormHelperText>}
                    </FormControl>
                </Grid>

                <Grid item>
                    <FormControl fullWidth required error={error.serviceArea}>
                        <Typography variant="subtitle1" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            {requiredLabel('Where do you serve your customers?')}
                        </Typography>
                        <Input
                            id="serviceArea"
                            name="serviceArea"
                            placeholder="e.g. New York City, New York/ London, UK / Europe and US"
                            value={step2FormData.serviceArea}
                            onChange={handleChange}
                            sx={{fontSize: '0.875rem'}}
                            autoComplete="on"
                        />
                        {error.serviceArea && <FormHelperText>Please input your service area.</FormHelperText>}
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

export default Step2;
