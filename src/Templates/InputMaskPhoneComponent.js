import React from 'react'
import InputMask from 'react-input-mask'
//! => Material UI stuff
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { InputText } from './DerictoriesComponents/styledComponents'
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#283139',
    },
  },
})
export const InputMaskPhoneComponent = ({
  value,
  onChange,
  beforeMaskedValueChange,
}) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <InputMask
          mask="+7-999-999-99-99"
          maskChar={null}
          value={value}
          onChange={onChange}
          beforeMaskedValueChange={beforeMaskedValueChange}
        >
          {(inputProps) => <InputText {...inputProps} />}
        </InputMask>
      </ThemeProvider>
    </>
  )
}
