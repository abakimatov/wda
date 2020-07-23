import React from 'react';
//material ui stuff
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CancelIcon from '@material-ui/icons/Cancel';
//css
import classed from '../css/Buttons.module.css';

export const DefaultButton = ({loading, text, callback, style}) => (
    <div className={classed.default_btn_wrapper}>
        <Button size='small' disabled={loading} onClick={callback} style={style}>
            {!loading && text}
            {loading && <span className={classed.loader}><CircularProgress color='secondary' size={20}/></span>}
        </Button>
    </div>
)
export const DefaultButtonSuccess = ({loading, text, callback, style}) => (
    <div className={classed.default_btn_wrapper_success}>
        <Button size='small' disabled={loading} onClick={callback} style={style} startIcon={loading ? <CircularProgress color='secondary' size={20}/> : <CheckCircleOutlineIcon style={{color:'green'}} fontSize="large"/>}>
            {text}
        </Button>
    </div> 
)
export const DefaultButtonCancel = ({loading, text, callback, style}) => (
    <div className={classed.default_btn_wrapper_success}>
        <Button size='small' disabled={loading} onClick={callback} style={style} startIcon={<CancelIcon style={{color:'red'}} fontSize="large"/>}>
            {text}
        </Button>
    </div>
)
export const ApplyButton = ({text, callback}) => (
    <Button size='small' onClick={callback} className={classed.apply_btn}>
        {text}
    </Button>
)