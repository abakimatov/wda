import React, { Component } from 'react'
import { selectOpenDel } from '@AppStore/Selectors/index'
//css
import buttonTemplate from '../scss/templates.module.scss'
import styles from '../scss/deleteDialog.module.scss'
//
import { connect } from 'react-redux'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@material-ui/core'

class Container extends Component {
  render() {
    const { open, name, id, handleClose, loading_data, del } = this.props
    const elementName = name ? name : `Элемент ID: ${id}`
    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className={styles.dialogTitle} disableTypography={true}>
          Вы действительно хотите удалить этот элемент?
        </DialogTitle>
        <DialogContent className={styles.dialogContent}>
          {<h5>{elementName}</h5>}
        </DialogContent>
        <DialogActions className={styles.dialogActions}>
          <section>
            <Button
              onClick={handleClose}
              disabled={loading_data}
              className={buttonTemplate.cancel}
            >
              Нет
            </Button>
            <Button
              onClick={del}
              disabled={loading_data}
              className={buttonTemplate.submit}
            >
              Да
            </Button>
          </section>
        </DialogActions>
      </Dialog>
    )
  }
}
const mapState = (state) => ({
  open: selectOpenDel(state),
})
const connector = connect(mapState, {})
export const DeleteDialogComponent = connector(Container)
