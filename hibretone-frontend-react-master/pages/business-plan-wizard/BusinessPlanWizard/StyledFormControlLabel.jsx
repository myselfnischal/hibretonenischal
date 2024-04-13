import { FormControlLabel, Radio, useTheme } from "@mui/material";

const StyledFormControlLabel = ({ label, value, groupValue}) => {
    const theme = useTheme(); // Hook to access the theme
    const isSelected = value === groupValue;

    return (
        <FormControlLabel
            value={value}
            control={<Radio size="small" />}
            label={label}
            sx={{
                marginX: theme.spacing(0),
                marginY: theme.spacing(0.5),
                border: `1px solid ${isSelected ? theme.palette.primary.main : '#ccc'}`,
                borderRadius: '10px',
                width: '100%',
                backgroundColor: isSelected ? theme.palette.primary.main : '#fff',
                color: isSelected ? '#fff' : 'rgba(0, 0, 0, 0.87)',
                // '&:hover': {
                //     borderColor: theme.palette.primary.main, // Border color on hover
                //     backgroundColor: theme.palette.action.hover,
                //     color: 'rgba(0, 0, 0, 0.87)',
                // },
                '.Mui-checked ,&:hover': {
                    borderColor: theme.palette.primary.main, // Maintain border color for selected item
                },
                '& .MuiRadio-root': {
                    display: 'none', // Keep the radio button hidden
                },
                '& .MuiFormControlLabel-label': {
                    marginX: theme.spacing(1.5),
                    marginY: theme.spacing(0.5),
                }

            }}
        />
    );
};
export default StyledFormControlLabel;
