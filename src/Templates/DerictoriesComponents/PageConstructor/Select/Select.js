import React from 'react'
import styles from './styles.module.scss'
import { Titled } from '../TextFields/TextFields'

export const MarkUpSelectComponent = React.memo(
  ({ data, name, label, value, onChange, disabled }) => {
    const onChangeThis = (event) => {
      const value = event.target.value
      return onChange(value)
    }
    return (
      <Titled label={label}>
        <select
          className={styles.root}
          name={name}
          value={value}
          onChange={onChangeThis}
          disabled={disabled}
        >
          <option value="" selected disabled hidden>
            {label}
          </option>
          {data &&
            data.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
        </select>
      </Titled>
    )
  }
)
export const MarkUpSelectExFlagsComponent = React.memo(
  ({ data, name, label, value, onChange }) => {
    const onChangeThis = (event) => {
      const value = event.target.value
      return onChange(value)
    }
    return (
      <Titled label={label}>
        <select
          className={styles.root}
          name={name}
          value={value}
          onChange={onChangeThis}
        >
          <option value="" selected disabled hidden>
            {label}
          </option>
          {data &&
            data.map((item) => (
              <option key={item.flag} value={item.flag}>
                {item.name}
              </option>
            ))}
        </select>
      </Titled>
    )
  }
)
