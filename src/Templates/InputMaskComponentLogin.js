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
const InputMaskComponent = ({value, onChange, beforeMaskedValueChange}) => {
    return <><ThemeProvider theme={theme}><InputMask mask="+7-999-999-99-99" maskChar={null} value={value} onChange={onChange} beforeMaskedValueChange={beforeMaskedValueChange}>
        {(inputProps) => <TextField 
            {...inputProps}
            label='Телефон'
            type="tel"
            variant="outlined"
            fullWidth
            autoFocus
            helperText='Телефон в формате +7-XXX-XXX-XX-XX'
            id="mui-theme-provider-standard-input"
            style={{
              font: 'inherit'
            }}
            />}
    </InputMask></ThemeProvider></>;
}
export default InputMaskComponent;