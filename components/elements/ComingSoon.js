import React from 'react';
import { Dialog, DialogContent, DialogTitle, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function ComingSoon({ open, handleClose }) {
    return (
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
            <DialogTitle sx={{ fontSize: '40px',textAlign:'center'}}>
                Coming Soon
                <Button onClick={handleClose} style={{ position: 'absolute', top: '8px', right: '8px' }}>
                    <CloseIcon />
                </Button>
            </DialogTitle>
        </Dialog>
    );
}

export default ComingSoon;
