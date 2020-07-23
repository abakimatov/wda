import React, { memo } from 'react'
import { ReactComponent as SuccessIcon } from '@Files/success.svg'
import { ReactComponent as CancelIcon } from '@Files/cancel.svg'
import styles from './scss/toolbar.module.scss'
import buttonTemplate from '../../scss/templates.module.scss'
//components
import { Button } from '@material-ui/core'
/* 
visibles={{
  saveText: 'Провести и закрыть',
  save: true,
  cancel: true,
  close: false
}}
 */
export const Toolbar = memo(({ saveData, holdingData, visibles }) => {
  const saveText =
    visibles && visibles.saveText ? visibles.saveText : 'Сохранить'
  const save = visibles ? visibles.save : false
  const cancel = visibles ? visibles.cancel : false
  const close = visibles ? visibles.close : false
  return (
    <section className={styles.root}>
      <div>
        <Button onClick={holdingData} className={buttonTemplate.submit}>
          {saveText}
        </Button>
      </div>
      <div>
        {close && (
          <Button
            onClick={() => {
              window.close()
            }}
            className={buttonTemplate.cancel}
          >
            Выйти
          </Button>
        )}
      </div>
      <div>
        {save && (
          <Button className={buttonTemplate.submitIcon} onClick={saveData}>
            <SuccessIcon />
          </Button>
        )}
      </div>
      <div>
        {cancel && (
          <Button
            className={buttonTemplate.cancelIcon}
            onClick={() => {
              window.close()
            }}
          >
            <CancelIcon />
          </Button>
        )}
      </div>
    </section>
  )
})
