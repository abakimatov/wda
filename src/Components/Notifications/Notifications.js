import React from 'react';
//material ui stuff
import Snackbar from '@material-ui/core/Snackbar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';

const styles = {
    padding: '10px',
    color: '#fff',
    display: 'flex',
    alignItems:'center'
}

const Notification = (open, mess, color, type) => {
    return (
        <Snackbar
            anchorOrigin={{
                vertical:'bottom',
                horizontal: 'left',
            }}
            open={open}
            style={{
                background: color,
                borderRadius:'4px',
            }}
        >
            <div style={{...styles}}>
                {mess}
                {type === 'error' && <ErrorIcon style={{marginLeft:10}}/>}
                {type === 'success' && <CheckCircleIcon style={{marginLeft:10}}/>}
            </div>
        </Snackbar>
    )
}
export default Notification;