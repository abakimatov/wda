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
const InputMaskComponent = ({value, onChange, beforeMaskedValueChange, item, index, helperText, keyParam = "0"}) => {
    return <><ThemeProvider theme={theme}><InputMask mask="+7-999-999-99-99" maskChar={null} value={value} onChange={onChange} beforeMaskedValueChange={beforeMaskedValueChange}>
        {(inputProps) => <TextField 
            key={keyParam}
            {...inputProps}
            type="tel"
            fullWidth
            autoFocus
            helperText={helperText}
            style={{
              font: 'inherit'
            }}
            id={`${index}`}
            key={item.name}
            name={`${item.key}`}
            placeholder={item.name}
            label={item.name}
            variant='outlined'
            margin='normal'
            />}
    </InputMask></ThemeProvider></>;
}
export default InputMaskComponent;