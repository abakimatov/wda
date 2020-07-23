import React from 'react';
import Button from '@material-ui/core/Button';
import { confirmAlert } from 'react-confirm-alert'; // Import
import './index.css';
//title = 'title', message = 'message', showCancel, showAction, action
ConfirmDialog("Вы действительно хотите изменить статус документа?", null, true, true, (onClose) => {
  //(docId: number, toCheck: boolean, flag: string, onClose: () => void)
  this.props.setDocumentStatus(this.state.contract.id, false, "down", onClose);
}, true);
export const ConfirmDialog = (title = 'title', message = 'message', showCancel, showAction, action) => {
  const options = {
    customUI: ({ onClose }) => {
      return (
        <div className='react-confirm-alert-body'>
          {title && <h3>{title}</h3>}
          {message && <p>{message}</p>}
          <div className="wrap-react-confirm-alert-actions">
            {showCancel && <Button onClick={onClose}>Отмема</Button>}
            {showAction && <Button onClick={() => {
              if(action) {
                return action(onClose);
              } else return onClose();
            }}>Ok</Button>}
          </div>
        </div>
      )
    }
  }
  return confirmAlert(options);
}