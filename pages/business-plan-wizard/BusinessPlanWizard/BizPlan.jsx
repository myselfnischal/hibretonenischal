import React, {useState, useEffect} from 'react';
import {
    Grid,
    Typography,
    Button,
    Menu,
    MenuItem
} from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import {useSessionStorage} from "react-use";

const BizPlan = ({}) => {
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

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const downloadFile = (url) => {
        if (url) {
            const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
            if (newWindow) newWindow.opener = null;
            window.focus();
        }
        handleClose();
    };


    return (
        <Grid container spacing={3} style={{padding: 20}}>
            <Grid item xs={12}>
                <Typography variant="h4" component="div">
                    Executive Summary
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                    Business Overview
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {executiveSummary.businessOverview}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                    Business Origins
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {executiveSummary.businessOrigins}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                    Competitive Advantage
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {executiveSummary.competitiveAdvantage}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                    Financial Summary
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {executiveSummary.financialSummary}
                </Typography>
            </Grid>

            {isVIP && (
                <Grid item style={{right: 20}}>
                    <Button
                        aria-controls="save-as-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                        variant="contained"
                        color="primary"
                        endIcon={<FileDownloadIcon />}
                    >
                        Save As...
                    </Button>
                    <Menu
                        id="save-as-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => downloadFile(outputFile.pdfUrl)}>PDF</MenuItem>
                        <MenuItem onClick={() => downloadFile(outputFile.docxUrl)}>Word</MenuItem>
                    </Menu>
                </Grid>
            )}
        </Grid>
    );
}

export default BizPlan;