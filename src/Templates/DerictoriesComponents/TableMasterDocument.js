import React, { memo, useEffect, useReducer } from 'react'
import addItem from '@Files/additem.png'
import editItem from '@Files/edititem.png'
import delItem from '@Files/delitem.png'
import refreshItem from '@Files/refresh.png'
import fileIcon from '@Files/file.png'
import copyIcon from '@Files/copy.png'
import { toggleOpenFiles } from '@AppStore/Actions/Derictories/Helpers'
//components
import { TableStateLess } from './TableStateLess'
import { DevExpressTableWrapper } from './styledComponents'
import { connect } from 'react-redux'
import { FilesReader } from '../filesReader'
import { hints } from './hints'

export const Container = memo(
  ({
    data,
    iudData,
    columns,
    frame,
    forwardHistory,
    toggleOpenFiles,
    objTypeId,
    copyDoc,
    ...props
  }) => {
    const initialState = { items: [], item: {}, currentRow: 0 }
    //
    const reducer = (state, action) => {
      switch (action.type) {
        case 'SET_STATE':
          return {
            ...state,
            [action.name]: action.payload,
          }
        default:
          return state
      }
    }
    //
    useEffect(() => {
      setState('items', data)
      if (data[0]) {
        setState('item', data[0])
      }
    }, [data])
    useEffect(() => {
      if (data[state.currentRow]) {
        setState('item', data[state.currentRow])
      }
    }, [data])
    const [state, dispatch] = useReducer(reducer, initialState)
    //
    const setState = (name, payload) =>
      dispatch({ type: 'SET_STATE', name, payload })
    //
    const onSelectionChanged = (item) => {
      if (item && item.id) {
        setState('item', item)
        setState('currentRow', state.items.indexOf(item))
      }
    }
    //servers actions
    const del = (id) => {
      console.log(`click del, doc id: `, id)
      return iudData('D', { id })
    }
    //helpers
    const verifyToolbar = (typeButton, isConnected) => {
      switch (typeButton) {
        case 'ADD':
          if (isConnected && frame.canEdit) return false
          else return true
        case 'EDIT':
          if (isConnected && frame.canEdit && state.item.id) return false
          else return true
        case 'DELETE':
          if (isConnected && frame.canEdit && state.item.id) return false
          else return true
        default:
          return true
      }
    }
    //custom toolbar
    const onToolbarPreparing = (event, isConnected, verifyToolbar) => {
      event.toolbarOptions.items.unshift(
        {
          location: 'before',
          widget: 'dxButton',
          options: {
            visible: props.visibleRefresh,
            width: 'auto',
            icon: refreshItem,
            hint: hints.refresh,
            disabled: verifyToolbar('ADD', isConnected),
            onClick: (event) => {
              if (props.refreshData) {
                return props.refreshData()
              } else return null
            },
          },
        },
        {
          location: 'before',
          widget: 'dxButton',
          options: {
            visible: props.visibleAdd,
            width: 'auto',
            icon: addItem,
            hint: hints.add,
            disabled: verifyToolbar('ADD', isConnected),
            //text: 'Добавить',
            onClick: (event) => forwardHistory(0),
          },
        },
        {
          location: 'before',
          widget: 'dxButton',
          options: {
            visible: props.visibleEdit,
            width: 'auto',
            icon: editItem,
            hint: hints.edit,
            disabled: verifyToolbar('EDIT', isConnected),
            //text: 'Редактировать',
            onClick: (event) => forwardHistory(state.item.id),
          },
        },
        {
          location: 'before',
          widget: 'dxButton',
          options: {
            visible: props.visibleFiles,
            width: 'auto',
            icon: fileIcon,
            hint: hints.files,
            disabled: verifyToolbar('ADD', isConnected),
            onClick: (event) => toggleOpenFiles(true, state.item.id, objTypeId),
          },
        },
        //copy doc
        {
          location: 'before',
          widget: 'dxButton',
          options: {
            visible: props.visibleCopyDoc,
            width: 'auto',
            icon: copyIcon,
            hint: hints.copy,
            disabled: verifyToolbar('EDIT', isConnected),
            onClick: (event) => copyDoc(state.item.id),
          },
        },
        //
        {
          location: 'before',
          widget: 'dxButton',
          options: {
            visible: props.visibleDel,
            width: 'auto',
            icon: delItem,
            hint: hints.del,
            disabled: verifyToolbar('EDIT', isConnected),
            //text: 'Удалить',
            onClick: (event) => {
              if (window.confirm('Вы действительно хотите удалить документ?')) {
                del(state.item.id)
              }
            },
          },
        },
        {
          location: 'before',
          widget: 'dxButton',
          options: {
            visible: props.visibleStatusesActions,
            width: 'auto',
            icon: 'arrowup',
            disabled: false,
            text: 'Статус',
            onClick: (event) => {
              return
            },
          },
        },
        {
          location: 'before',
          widget: 'dxButton',
          options: {
            visible: props.visibleStatusesActions,
            width: 'auto',
            icon: 'arrowdown',
            disabled: false,
            text: 'Статус',
            onClick: (event) => {
              return
            },
          },
        }
      )
    }
    return (
      <DevExpressTableWrapper>
        {props.visibleFiles && (
          <FilesReader objectId={state.item.id} objTypeId={objTypeId} />
        )}
        <TableStateLess
          onSelectionChanged={(data) => onSelectionChanged(data)}
          onToolbarPreparing={(event, isConnected) =>
            onToolbarPreparing(event, isConnected, verifyToolbar)
          }
          data={state.items}
          columns={columns}
          loadPanelBoolean={true}
        />
      </DevExpressTableWrapper>
    )
  }
)
const connector = connect(null, { toggleOpenFiles })
export const TableMasterDocument = connector(Container)
TableMasterDocument.defaultProps = {
  visibleAdd: true,
  visibleEdit: true,
  visibleDel: true,
  visibleStatusesActions: false,
  visibleFiles: false,
  visibleRefresh: true,
  visibleCopyDoc: false,
}
