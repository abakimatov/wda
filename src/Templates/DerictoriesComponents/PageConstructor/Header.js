import React, { memo } from 'react'
import clsx from 'clsx'
import styles from './scss/headerFlexible.module.scss'
//components
import { MarkUpDatePickerComponent } from './DatePicker/DatePicker'
import { MarkUpSelectComponent } from './Select/Select'
import {
  MarkUpTextFieldComponent,
  MarkUpPhoneFieldComponent,
  MarkUpNumberFieldComponent,
  MarkUpAreaFieldComponent,
} from './TextFields/TextFields'
import { MarkUpTimePickerComponent } from './TimePicker/TimePicker'
import { MarkUpCheckBoxComponent } from './CheckBox/CheckBox'

export const Header = memo(
  ({ state, dispatchOnChange, forms, subData, settings }) => {
    const markUpTextField = (data) => {
      const { name, type, label, maxLength, required, nonNegative } = data
      const value = state[name]
      const onChangeThis = (value) => dispatchOnChange(name, value)
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
              type="text"
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
    const markUpSelectField = (data) => {
      const { name, label, dataName, disabled } = data
      const onChangeThis = (value) => dispatchOnChange(name, value)
      return (
        <MarkUpSelectComponent
          label={label}
          data={subData[dataName]}
          value={state[name]}
          onChange={onChangeThis}
          disabled={disabled}
        />
      )
    }
    const markUpDatePicker = (name, label) => {
      const value = state[name]
      const onChangeThis = (value) => dispatchOnChange(name, value)
      return (
        <MarkUpDatePickerComponent
          label={label}
          value={value}
          onChange={onChangeThis}
        />
      )
    }
    //
    const markUpTimePicker = (name, label) => {
      const onChangeThis = (value) => dispatchOnChange(name, value)
      return (
        <MarkUpTimePickerComponent
          name={name}
          label={label}
          value={state[name]}
          onChange={onChangeThis}
        />
      )
    }
    //
    const markUpCheckBox = (name, label) => {
      const onChangeThis = (value) => dispatchOnChange(name, value)
      return (
        <MarkUpCheckBoxComponent
          checked={state[name]}
          onChange={onChangeThis}
          label={label}
        />
      )
    }
    const {
      stringItems,
      selectItems,
      dateItems,
      timeItems,
      checkBoxItems,
      fullWidthItems,
    } = forms
    const RootColsClasses = clsx(styles.Rtable, styles.Rtable__4cols)
    const FullWidthColClasses = clsx(styles.Rtable, styles.Rtable__1cols)
    return (
      <section className={styles.Root}>
        <section className={RootColsClasses}>
          {selectItems &&
            Array.isArray(selectItems) &&
            selectItems.map((item, index) => {
              return (
                <section key={index} className={styles.Rtable_cell}>
                  <div className={styles.Rtable_cell__select}>
                    {/* <div className={styles.Rtable_cell__select__label}>
                      {item.label}
                    </div> */}
                    <div className={styles.Rtable_cell__select__input}>
                      {markUpSelectField(item)}
                    </div>
                  </div>
                </section>
              )
            })}
        </section>
        {stringItems &&
          Array.isArray(Object.values(stringItems)) &&
          Object.values(stringItems).map((arr, index) => {
            return (
              <section key={index} className={RootColsClasses}>
                {arr &&
                  Array.isArray(arr) &&
                  arr.map((item, idx) => {
                    return (
                      <section key={idx} className={styles.Rtable_cell}>
                        {markUpTextField(item)}
                      </section>
                    )
                  })}
              </section>
            )
          })}
        <section className={RootColsClasses}>
          {stringItems &&
            Array.isArray(stringItems) &&
            stringItems.map((item, index) => {
              return (
                <section key={index} className={styles.Rtable_cell}>
                  {markUpTextField(item)}
                </section>
              )
            })}
        </section>
        <section className={RootColsClasses}>
          {dateItems &&
            dateItems.map((item, index) => (
              <section key={index} className={styles.Rtable_cell}>
                <div className={styles.Rtable_cell__date}>
                  {/* <div className={styles.Rtable_cell__date__label}>
                    {item.label}
                  </div> */}
                  <div className={styles.Rtable_cell__date__input}>
                    {markUpDatePicker(item.name, item.label)}
                  </div>
                </div>
              </section>
            ))}
        </section>
        <section className={RootColsClasses}>
          {timeItems &&
            timeItems.map((item, index) => (
              <section key={index} className={styles.Rtable_cell}>
                <div className={styles.Rtable_cell__time}>
                  {/* <div className={styles.Rtable_cell__time__label}>
                    {item.label}
                  </div> */}
                  <div className={styles.Rtable_cell__time__input}>
                    {markUpTimePicker(item.name, item.label)}
                  </div>
                </div>
              </section>
            ))}
        </section>
        <section className={RootColsClasses}>
          {checkBoxItems &&
            checkBoxItems.map((item, index) => (
              <section key={index} className={styles.Rtable_cell}>
                {markUpCheckBox(item.name, item.label)}
              </section>
            ))}
        </section>
        <section className={FullWidthColClasses}>
          {fullWidthItems &&
            fullWidthItems.stringItems &&
            fullWidthItems.stringItems.map((item, index) => {
              return (
                <section key={index} className={styles.Rtable_cell}>
                  {markUpTextField(item)}
                </section>
              )
            })}
        </section>
      </section>
    )
  }
)
