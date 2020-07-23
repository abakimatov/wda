import React from 'react';
import InputMask from 'react-input-mask';
//! => Material UI stuff
import {
    ThemeProvider,
    createMuiTheme,
  } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#283139',
      },
    },
  });
const InputMaskComponent = ({value, onChange, beforeMaskedValueChange, variant = 'standard', label = '', size, name}) => {
    return <><ThemeProvider theme={theme}><InputMask mask="79999999999" maskChar={null} value={value} onChange={onChange} beforeMaskedValueChange={beforeMaskedValueChange}>
        {(inputProps) => <TextField 
            {...inputProps}
            required={true}
            margin='normal'
            type="tel"
            variant={variant}
            fullWidth
            id="mui-theme-provider-standard-input"
            label={label}
            size={size}
            name={name}
            style={{
              font: 'inherit'
            }}
            />}
    </InputMask></ThemeProvider></>;
}
export default InputMaskComponent;