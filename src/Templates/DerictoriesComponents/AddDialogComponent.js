import React, { memo, useReducer, useEffect } from 'react'
import { connect } from 'react-redux'
import { selectOpenAdd } from '@AppStore/Selectors/index'
import { getExFlagsItems } from '@AppStore/Actions/Derictories/Plans'
//components
import { DialogStateLess } from './DialogStateLess'
import { MarkUpDatePickerComponent } from './PageConstructor/DatePicker/DatePicker'
import {
  MarkUpSelectComponent,
  MarkUpSelectExFlagsComponent,
} from './PageConstructor/Select/Select'
import {
  MarkUpTextFieldComponent,
  MarkUpPhoneFieldComponent,
  MarkUpNumberFieldComponent,
  MarkUpAreaFieldComponent,
} from './PageConstructor/TextFields/TextFields'
import { MarkUpCheckBoxComponent } from './PageConstructor/CheckBox/CheckBox'
import { MarkUpTimePickerComponent } from './PageConstructor/TimePicker/TimePicker'

const AddDialog = memo(
  ({
    subData,
    anyData,
    open,
    save,
    getExFlagsItems,
    handleClose,
    loading_data,
    forms: {
      selectItems,
      stringItems,
      timeItems,
      dateItems,
      checkBoxItems,
      selectExFlags,
      selectExFlagsItems,
    },
  }) => {
    //state
    const initialState = {
      startDate: new Date(Date.now()),
      endDate: new Date(Date.now()),
      startTime: new Date(Date.now()),
      endTime: new Date(Date.now()),
    }
    const reducer = (state, action) => {
      switch (action.type) {
        case 'SET_STATE':
          return {
            ...state,
            [action.name]: action.payload,
          }
        case 'SET_ANY':
          return {
            ...state,
            ...action.payload,
          }
        default:
          return state
      }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    const setState = (name, payload) =>
      dispatch({ type: 'SET_STATE', name, payload })
    //
    React.useEffect(() => {
      if (Array.isArray(stringItems)) {
        stringItems.map((d) => {
          const { name } = d
          dispatch({ type: 'SET_STATE', name, payload: '' })
        })
      }
      if (Array.isArray(selectItems)) {
        selectItems.map((d) => {
          const { name } = d
          dispatch({ type: 'SET_STATE', name, payload: '' })
        })
      }
      if (Array.isArray(dateItems)) {
        dateItems.map((d) => {
          const { name } = d
          dispatch({ type: 'SET_STATE', name, payload: new Date() })
        })
      }
      if (Array.isArray(timeItems)) {
        timeItems.map((d) => {
          const { name } = d
          dispatch({ type: 'SET_STATE', name, payload: new Date() })
        })
      }
      if (Array.isArray(selectExFlags)) {
        selectExFlags.map((d) => {
          const { name } = d
          dispatch({ type: 'SET_STATE', name, payload: '' })
        })
      }
      if (Array.isArray(selectExFlagsItems)) {
        selectExFlagsItems.map((d) => {
          const { name } = d
          dispatch({ type: 'SET_STATE', name, payload: '' })
        })
      }
      if (Array.isArray(checkBoxItems)) {
        checkBoxItems.map((d) => {
          const { name } = d
          dispatch({ type: 'SET_STATE', name, payload: false })
        })
      }
    }, [])
    //
    useEffect(() => {
      if (anyData) dispatch({ type: 'SET_ANY', payload: anyData })
    }, [anyData])
    //mark ups
    const markUpTextField = (data) => {
      const { name, type, label, maxLength, required, nonNegative } = data
      const value = state[name]
      const onChangeThis = (value) => setState(name, value)
      return (
        <>
          {type === 'phone' && (
            <MarkUpPhoneFieldComponent
              label={label}
              value={value}
              onChange={onChangeThis}
            />
          )}
          {type === 'text' && (
            <MarkUpTextFieldComponent
              value={value}
              name={name}
              onChange={onChangeThis}
              maxLength={maxLength}
              label={label}
            />
          )}
          {type === 'number' && (
            <MarkUpNumberFieldComponent
              value={value}
              onChange={onChangeThis}
              label={label}
              nonNegative={nonNegative}
            />
          )}
          {type === 'text/multiline' && (
            <MarkUpAreaFieldComponent
              label={label}
              value={value}
              onChange={onChangeThis}
              maxLength={maxLength}
            />
          )}
        </>
      )
    }
    //
    const markUpSelectField = (name, label, dataName) => {
      const value = state[name]
      const onChangeThis = (value) => setState(name, value)
      return (
        <MarkUpSelectComponent
          name={name}
          label={label}
          data={subData[dataName]}
          value={value}
          onChange={onChangeThis}
        />
      )
    }
    //
    const markUpDatePicker = (name, label) => {
      const value = state[name]
      const onChangeThis = (value) => setState(name, value)
      return (
        <MarkUpDatePickerComponent
          label={label}
          value={value}
          onChange={onChangeThis}
        />
      )
    }
    //
    const markUpTimePicker = (name, label, settings) => {
      const value = state[name]
      const onChangeThis = (value) => setState(name, value)
      return (
        <MarkUpTimePickerComponent
          label={label}
          value={value}
          onChange={onChangeThis}
          settings={settings}
        />
      )
    }
    //
    const markUpCheckBox = (name, label) => {
      const checked = state[name]
      const onChangeThis = (checked) => setState(name, checked)
      return (
        <MarkUpCheckBoxComponent
          checked={checked}
          onChange={onChangeThis}
          label={label}
        />
      )
    }
    //
    const markUpSelectExFlags = (name, label, dataName) => {
      const value = state[name]
      const onChangeThis = (value) => {
        setState(name, value)
        getExFlagsItems(value)
      }
      return (
        <MarkUpSelectExFlagsComponent
          label={label}
          data={subData[dataName]}
          value={value}
          onChange={onChangeThis}
        />
      )
    }
    //
    const markUpSelectExFlagsItems = (name, label, dataName) => {
      const value = state[name]
      const onChangeThis = (value) => setState(name, value)
      return (
        <MarkUpSelectComponent
          label={label}
          data={subData[dataName].items}
          value={value}
          onChange={onChangeThis}
        />
      )
    }
    console.log(`RENDER ADD DIALOG COMPONENT`)
    console.log(state)
    return (
      <DialogStateLess
        open={open} // default - open
        handleClose={handleClose}
        stringItems={stringItems}
        selectItems={selectItems}
        dateItems={dateItems}
        timeItems={timeItems}
        selectExFlags={selectExFlags}
        selectExFlagsItems={selectExFlagsItems}
        loading_data={loading_data}
        checkBoxItems={checkBoxItems}
        editFunction={() => save(state)}
        markUpTextField={markUpTextField}
        markUpSelectField={markUpSelectField}
        markUpDatePicker={markUpDatePicker}
        markUpCheckBox={markUpCheckBox}
        markUpTimePicker={markUpTimePicker}
        markUpSelectExFlags={markUpSelectExFlags}
        markUpSelectExFlagsItems={markUpSelectExFlagsItems}
        dialogTitle="Добавить элемент"
      />
    )
  }
)
const mapStateToProps = (state) => ({
  open: selectOpenAdd(state),
})
const Container = connect(mapStateToProps, { getExFlagsItems })(AddDialog)
export const AddDialogComponent = Container
