import React, { memo } from 'react'
//css
import styles from '../scss/dialogstateless.module.scss'
import buttonTemplate from '../scss/templates.module.scss'
//material ui
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
//components
import {
  CustomDivSelectWrapper,
  CustomDivSelectSubWrapper,
  CustomCheckBoxWrapper,
  DialogStateLessGridSection,
} from './styledComponents'
import { DialogTitle, Button } from '@material-ui/core'

export const DialogStateLess = memo(
  ({
    open,
    handleClose,
    loading_data,
    selectItems,
    stringItems,
    selectExFlags,
    selectExFlagsItems,
    editFunction,
    markUpCheckBox,
    markUpTextField,
    markUpSelectExFlagsItems,
    markUpSelectField,
    markUpSelectExFlags,
    checkBoxItems,
    dateItems,
    markUpDatePicker,
    timeItems,
    markUpTimePicker,
    textCallToSaveData = 'Сохранить',
    dialogTitle = 'Добавить элемент',
  }) => {
    return (
      <Dialog
        open={open}
        onClose={() => {
          if (
            window.confirm('Вы действительно хотите закрыть окно?') &&
            typeof handleClose === 'function'
          ) {
            handleClose()
          }
        }}
        PaperProps={{
          className: styles.dialogPaper,
        }}
      >
        <DialogTitle className={styles.dialogTitle} disableTypography={true}>
          {dialogTitle}
        </DialogTitle>
        <DialogContent className={styles.dialogContent}>
          {selectExFlags &&
            selectExFlags.map((exflag, index) => (
              <section className={styles.dialogInputsWrapper} key={index}>
                {/* <div>{exflag.label}</div> */}
                {markUpSelectExFlags(
                  exflag.name,
                  exflag.label,
                  exflag.dataName
                )}
              </section>
            ))}
          {selectExFlagsItems &&
            selectExFlagsItems.map((exflagItem, index) => (
              <section className={styles.dialogInputsWrapper} key={index}>
                {/* <div>{exflagItem.label}</div> */}
                {markUpSelectExFlagsItems(
                  exflagItem.name,
                  exflagItem.label,
                  exflagItem.dataName
                )}
              </section>
            ))}
          {selectItems &&
            selectItems.map((item, index) => (
              <section className={styles.dialogInputsWrapper} key={index}>
                {/* <div>{item.label}</div> */}
                {markUpSelectField(item.name, item.label, item.dataName)}
              </section>
            ))}
          {dateItems &&
            dateItems.map((item, index) => (
              <section className={styles.dialogInputsWrapper} key={index}>
                {/* <div>{item.label}</div> */}
                {markUpDatePicker(item.name, item.label)}
              </section>
            ))}
          {timeItems &&
            timeItems.map((item, index) => (
              <section className={styles.dialogInputsWrapper} key={index}>
                {/* <div>{item.label}</div> */}
                {markUpTimePicker(item.name, item.label, item.settings)}
              </section>
            ))}
          {stringItems &&
            stringItems.map((item, index) => (
              <section className={styles.dialogInputsWrapper} key={index}>
                {/* <div>{item.label}</div> */}
                {markUpTextField(item, false)}
              </section>
            ))}
          {checkBoxItems &&
            checkBoxItems.map((item, index) => (
              <CustomCheckBoxWrapper key={index}>
                {markUpCheckBox(item.name, item.label)}
              </CustomCheckBoxWrapper>
            ))}
        </DialogContent>
        <DialogActionsFC
          loading_data={loading_data}
          editFunction={editFunction}
          textCallToSaveData={textCallToSaveData}
          handleClose={handleClose}
        />
      </Dialog>
    )
  }
)

export const DialogActionsFC = React.memo(
  ({ loading_data, editFunction, textCallToSaveData, handleClose }) => (
    <DialogActions className={styles.dialogActions}>
      <section>
        <Button
          onClick={handleClose}
          disabled={loading_data}
          className={buttonTemplate.cancel}
        >
          Закрыть
        </Button>
        <Button
          onClick={editFunction}
          disabled={loading_data}
          className={buttonTemplate.submit}
        >
          {textCallToSaveData}
        </Button>
      </section>
    </DialogActions>
  )
)
