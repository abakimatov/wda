import React from 'react'
import styles from './styles.module.scss'
import { Titled } from '../TextFields/TextFields'

export const MarkUpDatePickerComponent = React.memo(
  ({ label, value, onChange }) => {
    const onChangeThis = (event) => {
      const value = event.target.value
      return onChange(value)
    }
    return (
      <Titled label={label}>
        <input
          className={styles.root}
          type="date"
          value={value}
          onChange={onChangeThis}
          max="2099-12-31"
        ></input>
      </Titled>
    )
  }
)
