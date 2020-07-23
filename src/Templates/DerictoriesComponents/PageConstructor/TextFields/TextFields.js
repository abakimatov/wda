import React from 'react'
import styles from './styles.module.scss'
import { InputMaskPhoneComponent } from '../../../InputMaskPhoneComponent'
import { InputText, InputTextArea, Title } from '../../styledComponents'

export const Titled = React.memo(({ children, label }) => {
  return (
    <div className={styles.root_title}>
      {<Title>{label}</Title>}
      {children}
    </div>
  )
})
export const MarkUpPhoneFieldComponent = React.memo(
  ({ label, value, onChange }) => {
    const onChangeThis = (event) => {
      const value = event.target.value
      return onChange(value)
    }
    return (
      <Titled label={label}>
        <InputMaskPhoneComponent
          value={value}
          onChange={onChangeThis}
          variant="outlined"
          size="small"
        />
      </Titled>
    )
  }
)
export const MarkUpNumberFieldComponent = React.memo(
  ({ label, value, onChange, nonNegative }) => {
    const onChangeThis = (event) => {
      let value = event.target.value
      if (nonNegative) {
        console.error(`nonNegative`, nonNegative)
        const abs = Math.abs(Number(value))
        const str = String(abs)
        return onChange(str)
      }
      return onChange(value)
    }
    return (
      <Titled label={label}>
        <InputText
          value={value}
          type="number"
          onChange={onChangeThis}
          min="0"
        />
      </Titled>
    )
  }
)
export const MarkUpTextFieldComponent = React.memo(
  ({ label, value, name, type, onChange, maxLength }) => {
    const onChangeThis = (event) => {
      const value = event.target.value
      return onChange(value)
    }
    return (
      <Titled label={label}>
        <InputText
          value={value}
          name={name}
          type="text"
          onChange={onChangeThis}
          maxLength={maxLength}
        />
      </Titled>
    )
  }
)
export const MarkUpAreaFieldComponent = React.memo(
  ({ label, value, onChange, maxLength }) => {
    const onChangeThis = (event) => {
      const value = event.target.value
      return onChange(value)
    }
    return (
      <Titled label={label}>
        <InputTextArea
          value={value}
          onChange={onChangeThis}
          maxLength={maxLength}
        />
      </Titled>
    )
  }
)
