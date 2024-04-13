import React, {useState} from 'react';
import {Typography, Stepper, Step, StepLabel, Grid, IconButton, Box, MobileStepper} from '@mui/material';
import {ArrowBack} from "@mui/icons-material";
import dynamic from "next/dynamic";
import {useRouter} from "next/router";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import {useSessionStorage} from 'react-use';

const NoSSRStep1 = dynamic(() => import('./Step1'), {ssr: false})
const NoSSRStep2 = dynamic(() => import('./Step2'), {ssr: false})
const NoSSRStep3 = dynamic(() => import('./Step3'), {ssr: false})
const NoSSRStep4 = dynamic(() => import('./Step4'), {ssr: false})
const NoSSRStep5 = dynamic(() => import('./Step5'), {ssr: false})
const NoSSRStep6 = dynamic(() => import('./Step6'), {ssr: false})
const NoSSRStep7 = dynamic(() => import('./Step7'), {ssr: false})
const NoSSRStep8 = dynamic(() => import('./Step8'), {ssr: false})
const NoSSRBizPlan = dynamic(() => import('./BizPlan'), {ssr: false})

const BusinessPlanStepForm = () => {
    const [currentStepStr, setCurrentStepStr] = useSessionStorage('currentStep', '1');
    const currentStep = parseInt(currentStepStr, 10);

    const nextStep = () => setCurrentStepStr(String(currentStep + 1));
    const previousStep = () => setCurrentStepStr(String(currentStep - 1));
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const handleBackClick = () => {
        if (currentStep > 8) {
            setOpen(true);
        } else {
            router.push("/business-plan-writer");
        }
    };

    const handleCloseDialog = (goHome = false) => {
        setOpen(false);
        if (goHome) {
            router.push("/business-plan-writer");
        }
    };

    const removeAllBusinessPlan = () => {
        Object.keys(sessionStorage).forEach((key) => {
            if (key.startsWith('BusinessPlanStepForm' || key.startsWith('BusinessPlan'))) {
                sessionStorage.removeItem(key);
            }
        });
    };
    React.useEffect(() => {
        if (currentStep > 8) {
            removeAllBusinessPlan();
            setCurrentStepStr('1');
        }
    }, []);

    const stepsItems = ['Business Plan Objective', 'Basic Business Information', 'Customer Group Details', 'Product or Service Details', 'Success Drivers', 'Initial Investment Details', 'Financial Details',];

    return (
        <Grid container justifyContent="center" alignItems="center" direction="column"
              sx={{width: '100%', margin: '0 auto'}}>
            <Grid item xs={12} md={12} lg={6}
                  sx={{
                      display: 'flex',
                      alignItems: 'center',
                      width: {xs: '100%', md: '70%', lg: '60%'},
                      margin: '0 auto'
                  }}>
                <Box sx={{width: 30, mb: 1}}>
                    <IconButton
                        onClick={handleBackClick}
                        sx={{
                            transform: 'scale(1.25)',
                            color: 'primary.main',
                        }}
                    >
                        <ArrowBack/>
                    </IconButton>
                </Box>
                <Typography variant="h6" sx={{flexGrow: 2, textAlign: 'center', mb: 1}}>
                    Business Plan Writer
                </Typography>
                <Box sx={{width: 30}}/>
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
                <Dialog
                    open={open}
                    onClose={() => handleCloseDialog()}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Go Back Home?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            If you go back now, the Business Plan you're creating will not be saved. Are you sure you
                            want to leave?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => handleCloseDialog()}>Cancel</Button>
                        <Button onClick={() => handleCloseDialog(true)} autoFocus>
                            Back
                        </Button>
                    </DialogActions>
                </Dialog>
            </Grid>
            {currentStep <= 7 && (
                <Grid item lg={12} justifyContent="center"
                      sx={{width: {lg: '65%'}, mt: 1, display: {xs: 'none', md: "none", lg: 'flex'}}}>
                    <Stepper activeStep={currentStep - 1} alternativeLabel>
                        {stepsItems.map((label) => (<Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>))}
                    </Stepper>
                </Grid>
            )}
            {currentStep <= 7 && (
                <Grid item xs={12}
                      sx={{
                          display: {xs: 'flex', md: "flex", lg: 'none'},
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '100%', // This ensures the Grid item is full width
                      }}
                >
                    <MobileStepper
                        variant="progress"
                        steps={stepsItems.length}
                        position="static"
                        activeStep={currentStep - 1}
                        sx={{
                            width: '100%',
                            justifyContent: 'center',
                            flexGrow: 1,
                        }}
                    />
                </Grid>
            )}
            {currentStep <= 7 && (
                <Grid item xs={12}
                      sx={{
                          display: {xs: 'flex', md: "flex", lg: 'none'},
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '100%',
                      }}>
                    <Typography sx={{color: 'primary.main', textAlign: 'center'}}>
                        {stepsItems[currentStep - 1]} ({currentStep}/{stepsItems.length})
                    </Typography>
                </Grid>
            )}
            <Grid item xs={12} md={12} lg={6}
                  sx={{mt: 2, minWidth: {xs: '90%', md: '60%', lg: '50%'}, width: {xs: '90%', md: '60%', lg: '50%'}}}>
                {currentStep === 1 && <NoSSRStep1 nextStep={nextStep}/>}
                {currentStep === 2 && <NoSSRStep2 nextStep={nextStep} previousStep={previousStep}/>}
                {currentStep === 3 && <NoSSRStep3 nextStep={nextStep} previousStep={previousStep}/>}
                {currentStep === 4 && <NoSSRStep4 nextStep={nextStep} previousStep={previousStep}/>}
                {currentStep === 5 && <NoSSRStep5 nextStep={nextStep} previousStep={previousStep}/>}
                {currentStep === 6 && <NoSSRStep6 nextStep={nextStep} previousStep={previousStep}/>}
                {currentStep === 7 && <NoSSRStep7 nextStep={nextStep} previousStep={previousStep}/>}
                {currentStep === 8 && <NoSSRStep8 nextStep={nextStep} previousStep={previousStep}/>}
                {currentStep === 9 && <NoSSRBizPlan/>}
            </Grid>
        </Grid>
    );
};

export default BusinessPlanStepForm;
