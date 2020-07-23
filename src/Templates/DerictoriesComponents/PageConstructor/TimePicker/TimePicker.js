import React from 'react'
/* styles */
import styles from './styles.module.scss'
/* === */
import { Titled } from '../TextFields/TextFields'
import dayjs from 'dayjs'
import { DatePickerTimeFC } from '../../../datePicker'

export class MarkUpTimePickerComponent extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      value: '00:00',
      settings: {},
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    const { value, settings } = nextProps
    if (value && value !== prevState.value) {
      const newValue = dayjs(value).format('HH:mm')
      return {
        value: newValue,
        settings,
      }
    } else return null
  }
  onChangeThis = (event) => {
    const value = event.target.value
    this.setState((prevState) => {
      return {
        value,
      }
    }, this.props.onChange(value))
  }
  render() {
    const { name, label, settings, value } = this.props
    console.log(`settings`, settings)
    return (
      <Titled label={label}>
        {settings && settings.type === 'time' && (
          <input
            name={name}
            className={styles.root}
            type="time"
            value={this.state.value}
            onChange={this.onChangeThis}
          />
        )}
        {settings && settings.type === 'datetime' && (
          <DatePickerTimeFC
            value={value}
            onChange={(date) => this.props.onChange(date)}
          />
        )}
        {/* default */}
        {!settings && (
          <input
            name={name}
            className={styles.root}
            type="time"
            value={this.state.value}
            onChange={this.onChangeThis}
          />
        )}
      </Titled>
    )
  }
}
