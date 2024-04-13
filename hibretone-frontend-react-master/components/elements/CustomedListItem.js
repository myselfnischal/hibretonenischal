import React from 'react';
import {ListItem, ListItemText} from '@mui/material';

const CustomListItem = ({suggestion, handleClick}) => {
    return (
        <ListItem
            button
            onClick={handleClick}
            sx={{
                padding: '6px 16px',
                margin: '5px',
                borderRadius: '10px',
                border: '1px solid #1976d2',
                backgroundColor: '#ffffff',
                color: '#1976d2',
                '&:hover': {
                    backgroundColor: '#eeeeee',
                },
                '.MuiListItemText-root': {
                    margin: 0,
                },
                '.MuiTypography-root': {
                    fontSize: '0.875rem',
                    fontWeight: '400',
                    whiteSpace: 'normal',
                    wordBreak: 'break-all',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }
            }}
        >
            <ListItemText
                primary={suggestion}
                primaryTypographyProps={{
                    style: {
                        whiteSpace: 'pre-line', overflow: 'hidden', textOverflow: 'ellipsis',
                        textAlign: 'center'
                    }
                }}
            />
        </ListItem>
    );
};

export default CustomListItem;
