import React from 'react';
import {Box, Button} from '@mui/material';

const RegenerateButton = ({onClick, disabled, children}) => {
    return (
        <Button
            onClick={onClick}
            disabled={disabled}
            sx={{
                borderRadius: 16,
                width: '30%',
                textTransform: 'none',
                backgroundColor: 'rgba(58, 171, 103, 0.7)',
                '&:hover': {
                    backgroundColor: 'rgba(58, 171, 103)',
                },
                py: 0.5,
                px: 2
            }}
            variant="contained"
        >
            {children}
        </Button>
    );
};

export default RegenerateButton;
