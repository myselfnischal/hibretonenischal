import React, {useState, useEffect} from 'react';
import {
    Grid,
    FormControl,
    Typography, Divider, Button, FormHelperText, TextField
} from '@mui/material';
import {useSessionStorage} from "react-use";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const currencySymbols = {
    USD: '$', // US Dollar
    EUR: '€', // Euro
    GBP: '£', // British Pound
    CNY: '¥', // Chinese Yuan
    JPY: '¥', // Japanese Yen
    AUD: 'A$', // Australian Dollar
    CAD: 'C$', // Canadian Dollar
};
const Step7 = ({previousStep, nextStep}) => {
    const [step6FormData, setStep6FormData] = useSessionStorage('BusinessPlanStepForm.step6FormData', {
        currency: '',
    });
    const [step7FormData, setStep7FormData] = useSessionStorage('BusinessPlanStepForm.step7FormData', {
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
    const [error, setError] = useState({
        expectedRevenue: false,
        growthRate: false,
    });

    useEffect(() => {
        const {expectedRevenue, taxPercentage, ...rest} = step7FormData;
        const revenue = Number(expectedRevenue);

        const costPercentages = Object.keys(rest).reduce((acc, key) => {
            if (!['language', 'growthRate', 'incomeTax', 'totalCost', 'netProfit', 'profitMargin'].includes(key)) {
                acc[key] = rest[key];
            }
            return acc;
        }, {});

        const costsExcludingTax = Object.values(costPercentages).reduce((total, percentage) => {
            return total + (revenue * (Number(percentage) / 100));
        }, 0);

        const incomeTaxExpense = calculateIncomeTax(revenue, costsExcludingTax, Number(taxPercentage));
        const totalCostWithTax = costsExcludingTax + incomeTaxExpense;

        const netProfitCalc = revenue - totalCostWithTax;
        const profitMarginCalc = (netProfitCalc / revenue) * 100;

        setStep7FormData(prevFormData => ({
            ...prevFormData,
            incomeTax: incomeTaxExpense.toString(),
            totalCost: totalCostWithTax.toString(),
            netProfit: netProfitCalc.toString(),
            profitMargin: profitMarginCalc.toString(),
        }));
    }, [step7FormData, setStep7FormData]);


    const calculateTotalCost = (percentage) => {
        return (parseFloat(percentage) / 100 * (parseFloat(step7FormData.expectedRevenue) || 0)).toFixed(2);
    };

    const calculateIncomeTax = (revenue, totalCostsExcludingTax, taxPercentage) => {
        const earningsBeforeTaxes = revenue - totalCostsExcludingTax;
        return earningsBeforeTaxes * (taxPercentage / 100);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setStep7FormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        setError(prev => ({...prev, [name]: false}));
    };

    const validateForm = () => {
        const newErrors = {...error};
        newErrors.expectedRevenue = !step7FormData.expectedRevenue;
        newErrors.growthRate = !step7FormData.growthRate;
        setError(newErrors);
        return !newErrors.language && !newErrors.expectedRevenue && !newErrors.growthRate;
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
            <Grid container direction="column" spacing={2} sx={{mt: 2}}>
                <Grid item>
                    <FormControl fullWidth required error={error.expectedRevenue}>
                        <Typography variant="h6" component="legend" sx={{mb: 1,}}>
                            {requiredLabel('Expected First Year Revenue', true)}
                        </Typography>
                        <TextField
                            id="expectedRevenue"
                            label={currencySymbols[step6FormData.currency] || ""}
                            name="expectedRevenue"
                            type="number"
                            value={step7FormData.expectedRevenue}
                            onChange={handleChange}
                            variant="outlined"
                            autoComplete="on"
                            sx={{width: '350px'}}
                        />
                        {error.expectedRevenue &&
                            <FormHelperText>Please input a Expected First Year Revenue.</FormHelperText>}
                    </FormControl>
                </Grid>

                <Grid item>
                    <FormControl fullWidth required error={error.growthRate}>
                        <Typography variant="h6" component="legend" sx={{mb: 1,}}>
                            {requiredLabel('How much do you expect your revenue to grow each year?', true)}
                        </Typography>
                        <TextField
                            id="growthRate"
                            label="%"
                            name="growthRate"
                            type="number"
                            value={step7FormData.growthRate}
                            onChange={handleChange}
                            variant="outlined"
                            autoComplete="on"
                            sx={{width: '250px'}}
                        />
                        {error.growthRate && <FormHelperText>Please input a Growth Rate.</FormHelperText>}
                    </FormControl>
                </Grid>

                <Grid item sx={{mb: 2}}>
                    <Typography variant="h6" component="legend">
                        Enter Yearly Business Operations Cost
                    </Typography>
                </Grid>
                <Divider/>

                <Grid container alignItems="center" spacing={2} sx={{mt: 0}}>
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="subtitle1" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            % of Revenue
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="subtitle1" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            Total Cost
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container alignItems="center" spacing={2} sx={{mt: 0}}>
                    <Grid item xs={4} container justifyContent="center" alignItems="center">
                        <Typography variant="subtitle1" component="legend"
                                    sx={{fontWeight: 'bold', ml: 2}}>
                            1. Cost of Goods Sold
                        </Typography>
                    </Grid>

                    <Grid item xs={4}>
                        <TextField
                            id="revenuePercentage1"
                            label="%"
                            name="revenuePercentage1"
                            type="number"
                            value={step7FormData.revenuePercentage1}
                            onChange={handleChange}
                            variant="outlined"
                            autoComplete="on"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="subtitle1" component="legend"
                                    sx={{fontWeight: 'bold'}}>
                            {currencySymbols[step6FormData.currency] || ""} {calculateTotalCost(step7FormData.revenuePercentage1)}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container alignItems="center" spacing={2} sx={{mt: 0}}>
                    <Grid item xs={4} container justifyContent="center" alignItems="center">
                        <Typography variant="subtitle1" component="legend"
                                    sx={{fontWeight: 'bold', ml: 2}}>
                            2. Wages and Benefits
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="revenuePercentage2"
                            label="%"
                            name="revenuePercentage2"
                            type="number"
                            value={step7FormData.revenuePercentage2}
                            onChange={handleChange}
                            variant="outlined"
                            autoComplete="on"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="subtitle1" component="legend" sx={{fontWeight: 'bold'}}>
                            {currencySymbols[step6FormData.currency] || ""} {calculateTotalCost(step7FormData.revenuePercentage2)}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container alignItems="center" spacing={2} sx={{mt: 0}}>
                    <Grid item xs={4} container justifyContent="center" alignItems="center">
                        <Typography variant="subtitle1" component="legend"
                                    sx={{fontWeight: 'bold', ml: 2}}>
                            3. Marketing
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="revenuePercentage3"
                            label="%"
                            name="revenuePercentage3"
                            type="number"
                            value={step7FormData.revenuePercentage3}
                            onChange={handleChange}
                            variant="outlined"
                            autoComplete="on"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="subtitle1" component="legend" sx={{fontWeight: 'bold'}}>
                            {currencySymbols[step6FormData.currency] || ""} {calculateTotalCost(step7FormData.revenuePercentage3)}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container alignItems="center" spacing={2} sx={{mt: 0}}>
                    <Grid item xs={4} container justifyContent="center" alignItems="center">
                        <Typography variant="subtitle1" component="legend"
                                    sx={{fontWeight: 'bold', ml: 2}}>
                            4. Rent
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="revenuePercentage4"
                            label="%"
                            name="revenuePercentage4"
                            type="number"
                            value={step7FormData.revenuePercentage4}
                            onChange={handleChange}
                            variant="outlined"
                            autoComplete="on"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="subtitle1" component="legend" sx={{fontWeight: 'bold'}}>
                            {currencySymbols[step6FormData.currency] || ""} {calculateTotalCost(step7FormData.revenuePercentage4)}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container alignItems="center" spacing={2} sx={{mt: 0}}>
                    <Grid item xs={12} md={12} lg={4} container justifyContent="center" alignItems="center">
                        <Typography variant="subtitle1" component="legend"
                                    sx={{fontWeight: 'bold', ml: 2}}>
                            5. General & Administrative
                        </Typography>
                    </Grid>
                    <Grid item s={12} md={12} lg={4}>
                        <TextField
                            id="revenuePercentage5"
                            label="%"
                            name="revenuePercentage5"
                            type="number"
                            value={step7FormData.revenuePercentage5}
                            onChange={handleChange}
                            variant="outlined"
                            autoComplete="on"
                            fullWidth
                        />
                    </Grid>
                    <Grid item s={12} md={12} lg={4}>
                        <Typography variant="subtitle1" component="legend" sx={{fontWeight: 'bold'}}>
                            {currencySymbols[step6FormData.currency] || ""} {calculateTotalCost(step7FormData.revenuePercentage5)}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container alignItems="center" spacing={2} sx={{mt: 0}}>
                    <Grid item s={12} md={12} lg={4} container justifyContent="center" alignItems="center">
                        <Typography variant="subtitle1" component="legend"
                                    sx={{fontWeight: 'bold', ml: 2}}>
                            6. Depreciation
                        </Typography>
                    </Grid>
                    <Grid item s={12} md={12} lg={4}>
                        <TextField
                            id="revenuePercentage6"
                            label="%"
                            name="revenuePercentage6"
                            type="number"
                            value={step7FormData.revenuePercentage6}
                            onChange={handleChange}
                            variant="outlined"
                            autoComplete="on"
                            fullWidth
                        />
                    </Grid>
                    <Grid item s={12} md={12} lg={4}>
                        <Typography variant="subtitle1" component="legend" sx={{fontWeight: 'bold'}}>
                            {currencySymbols[step6FormData.currency] || ""} {calculateTotalCost(step7FormData.revenuePercentage6)}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container alignItems="center" spacing={2} sx={{mt: 0}}>
                    <Grid item s={12} md={12} lg={4} container justifyContent="center" alignItems="center">
                        <Typography variant="subtitle1" component="legend"
                                    sx={{fontWeight: 'bold', ml: 2}}>
                            7. Utilities
                        </Typography>
                    </Grid>
                    <Grid item s={12} md={12} lg={4}>
                        <TextField
                            id="revenuePercentage7"
                            label="%"
                            name="revenuePercentage7"
                            type="number"
                            value={step7FormData.revenuePercentage7}
                            onChange={handleChange}
                            variant="outlined"
                            autoComplete="on"
                            fullWidth
                        />
                    </Grid>
                    <Grid item s={12} md={12} lg={4}>
                        <Typography variant="subtitle1" component="legend" sx={{fontWeight: 'bold'}}>
                            {currencySymbols[step6FormData.currency] || ""} {calculateTotalCost(step7FormData.revenuePercentage7)}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container alignItems="center" spacing={2} sx={{mt: 0}}>
                    <Grid item s={12} md={12} lg={4} container justifyContent="center" alignItems="center">
                        <Typography variant="subtitle1" component="legend"
                                    sx={{fontWeight: 'bold', ml: 2}}>
                            8. Other Expenses
                        </Typography>
                    </Grid>
                    <Grid item s={12} md={12} lg={4}>
                        <TextField
                            id="revenuePercentage8"
                            label="%"
                            name="revenuePercentage8"
                            type="number"
                            value={step7FormData.revenuePercentage8}
                            onChange={handleChange}
                            variant="outlined"
                            autoComplete="on"
                            fullWidth
                        />
                    </Grid>
                    <Grid item s={12} md={12} lg={4}>
                        <Typography variant="subtitle1" component="legend" sx={{fontWeight: 'bold'}}>
                            {currencySymbols[step6FormData.currency] || ""} {calculateTotalCost(step7FormData.revenuePercentage8)}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container alignItems="center" spacing={2} sx={{mt: 0}}>
                    <Grid item s={12} md={12} lg={4} container justifyContent="center" alignItems="center">
                        <Typography variant="subtitle1" component="legend"
                                    sx={{fontWeight: 'bold', ml: 2}}>
                            9. Interest Expense
                        </Typography>
                    </Grid>
                    <Grid item s={12} md={12} lg={4}>
                        <TextField
                            id="revenuePercentage9"
                            label="%"
                            name="revenuePercentage9"
                            type="number"
                            value={step7FormData.revenuePercentage9}
                            onChange={handleChange}
                            variant="outlined"
                            autoComplete="on"
                            fullWidth
                        />
                    </Grid>
                    <Grid item s={12} md={12} lg={4}>
                        <Typography variant="subtitle1" component="legend" sx={{fontWeight: 'bold'}}>
                            {currencySymbols[step6FormData.currency] || ""} {calculateTotalCost(step7FormData.revenuePercentage9)}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container alignItems="center" spacing={2} sx={{mt: 0, mb: 2}}>
                    <Grid item s={12} md={12} lg={4} container justifyContent="center" alignItems="center">
                        <Typography variant="subtitle1" component="legend"
                                    sx={{fontWeight: 'bold', ml: 2}}>
                            10. Income Taxes (from EBT)
                        </Typography>
                    </Grid>
                    <Grid item s={12} md={12} lg={4}>
                        <TextField
                            id="taxPercentage"
                            label="%"
                            name="taxPercentage"
                            type="number"
                            value={step7FormData.taxPercentage}
                            onChange={handleChange}
                            variant="outlined"
                            autoComplete="on"
                            fullWidth
                        />
                    </Grid>
                    <Grid item s={12} md={12} lg={4}>
                        <Typography variant="subtitle1" component="legend" sx={{fontWeight: 'bold'}}>
                            {currencySymbols[step6FormData.currency] || ""} {parseFloat(step7FormData.incomeTax).toFixed(2)}
                        </Typography>
                    </Grid>
                </Grid>

                <Divider/>
                <Grid item>
                    <Typography variant="h6" component="legend">
                        {'Your First Year Total Cost is:'}
                    </Typography>
                    <Typography variant="subtitle1" component="legend" sx={{fontWeight: 'bold'}}>
                        {currencySymbols[step6FormData.currency] || ""}{" "}{parseFloat(step7FormData.totalCost).toFixed(2)}
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography variant="h6" component="legend">
                        {'Your First Year Net Profit is:'}
                    </Typography>
                    <Typography variant="subtitle1" component="legend" sx={{fontWeight: 'bold'}}>
                        {currencySymbols[step6FormData.currency] || ""}{" "}{parseFloat(step7FormData.netProfit).toFixed(2)}
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography variant="h6" component="legend">
                        {'Your Net Profit Margin is:'}
                    </Typography>
                    <Typography variant="subtitle1" component="legend" sx={{fontWeight: 'bold'}}>
                        {parseFloat(step7FormData.profitMargin).toFixed(2)}{" "}{"%"}
                    </Typography>
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
                            Next<KeyboardArrowRight/>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    );
};

export default Step7;