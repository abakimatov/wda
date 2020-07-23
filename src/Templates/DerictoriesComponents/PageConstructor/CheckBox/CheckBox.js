import React from 'react'
import { FormControlLabel, Checkbox } from '@material-ui/core'

export const MarkUpCheckBoxComponent = React.memo(
  ({ checked, onChange, label }) => {
    const onChangeThis = (event) => {
      const checked = event.target.checked
      return onChange(checked)
    }
    return (
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={onChangeThis} />}
        label={label}
      />
    )
  }
)
