import * as React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
//datepicker
export class DatePickerTimeFC extends React.PureComponent {
  render() {
    const { value, disabled, settings } = this.props
    const popperPlacement = settings.popperPlacement
    return (
      <DatePicker
        timeInputLabel="Время"
        selected={value ? new Date(value) : new Date()} // date
        onChange={(date) => this.props.onChange(date)}
        //locale="en-GB"
        showTimeSelect
        timeFormat="pp"
        timeIntervals={5}
        dateFormat="dd.MM.yyyy, pp"
        disabled={disabled}
        popperPlacement={popperPlacement}
      />
    )
  }
}
DatePickerTimeFC.defaultProps = {
  settings: { popperPlacement: 'right' },
}
