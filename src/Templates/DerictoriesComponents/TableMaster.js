import React, { useEffect, memo, useReducer } from 'react'
import addItem from '@Files/additem.png'
import editItem from '@Files/edititem.png'
import delItem from '@Files/delitem.png'
import refreshItem from '@Files/refresh.png'
import fileIcon from '@Files/file.png'
//components
import { EditDialogComponent } from './EditDialogComponent'
import { TableStateLess } from './TableStateLess'
import { DevExpressTableWrapper } from './styledComponents'
import {
  toggleOpenAddModal,
  toggleOpenEditModal,
  toggleOpenDeleteModal,
  toggleOpenFiles,
} from '@AppStore/Actions/Derictories/Helpers'
import { connect } from 'react-redux'
import { AddDialogComponent } from './AddDialogComponent'
import { FilesReader } from '../filesReader'
import { DeleteDialogComponent } from './DeleteDialogComponent'
import { useHistory } from 'react-router-dom'
import { hints } from './hints'
import { selectUrlParamsId } from '@AppStore/Selectors/index'

const Container = memo(
  ({
    data,
    subData,
    anyData,
    iudDerictories,
    loading_data,
    columns,
    forms,
    frame,
    toggleOpenAddModal,
    toggleOpenEditModal,
    toggleOpenDeleteModal,
    toggleOpenFiles,
    iudFunctionWithRedirectToItemsPage,
    objTypeId,
    idParent,
    ...props
  }) => {
    const hasParent = idParent === 0 ? false : true
    const history = useHistory()
    const initialState = {
      currentRow: 0,
      items: [],
      item: {},
    }
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
    const [state, dispatch] = useReducer(reducer, initialState)
    const setState = (name, payload) =>
      dispatch({ type: 'SET_STATE', name, payload })
    //
    useEffect(() => {
      setState('items', data)
    }, [data])
    useEffect(() => {
      const item = data[state.currentRow]
      if (item) setState('item', { ...item })
    }, [data])
    //togglers froms
    const toggleOpenAddDialog = (openAdd) => {
      if (
        iudFunctionWithRedirectToItemsPage &&
        typeof iudFunctionWithRedirectToItemsPage === 'function'
      ) {
        iudFunctionWithRedirectToItemsPage(openAdd)
      }
      toggleOpenAddModal(openAdd)
    }
    const toggleOpenEditDialog = (openEdit) => toggleOpenEditModal(openEdit)
    //onchange single row by click
    const onSelectionChanged = (data) => {
      if (data && data.id) {
        const currentRow = items.indexOf(data)
        setState('item', data)
        setState('currentRow', currentRow)
      }
    }
    //servers actions
    const create = (jsonObject) =>
      iudDerictories('I', jsonObject, () => {
        return
      })
    const update = (jsonObject) =>
      iudDerictories('U', jsonObject, () => {
        return
      })
    const del = (id) =>
      iudDerictories('D', { id }, () => toggleOpenDeleteModal(false))
    //custom toolbar table
    const validate = (...rest) => {
      if (Array.isArray(rest) && rest.every((r) => r === true)) return false
      else return true
    }
    const onToolbarPreparing = (event, isConnected, canEdit) => {
      const disabled = validate(isConnected, canEdit)
      event.toolbarOptions.items.unshift(
        {
          location: 'before',
          widget: 'dxButton',
          options: {
            visible: props.visibleRefresh,
            width: 'auto',
            icon: refreshItem,
            hint: hints.refresh,
            disabled: disabled,
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
            disabled: disabled,
            //text: "Добавить",
            onClick: (event) => toggleOpenAddDialog(true),
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
            disabled: disabled && item && item.id,
            //text: "Редактировать",
            onClick: (event) => toggleOpenEditDialog(true),
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
            disabled: disabled && item && item.id,
            onClick: (event) => toggleOpenFiles(true, item.id, objTypeId),
          },
        },
        {
          location: 'before',
          widget: 'dxButton',
          options: {
            visible: props.visibleDel,
            width: 'auto',
            icon: delItem,
            hint: hints.del,
            disabled: disabled && item && item.id,
            //text: "Удалить",
            onClick: (event) => toggleOpenDeleteModal(true),
          },
        },
        {
          location: 'before',
          widget: 'dxButton',
          options: {
            visible: props.visibleRegisterNewUser,
            width: 'auto',
            hint: hints.registerNewUser,
            disabled: disabled && item && item.id,
            text: 'Регистрация новых пользователей',
            onClick: (event) => history.push('/genregkey'),
          },
        }
      )
    }
    const { items, item, currentRow } = state
    console.log(`state`, props)
    return (
      <DevExpressTableWrapper>
        {props.visibleAdd && (
          <AddDialogComponent
            handleClose={() => toggleOpenAddDialog(false)}
            save={create}
            subData={subData}
            loading_data={loading_data}
            forms={forms}
            anyData={anyData}
          />
        )}
        {props.visibleEdit && (
          <EditDialogComponent
            handleClose={() => toggleOpenEditDialog(false)}
            save={update}
            subData={subData}
            item={item}
            loading_data={loading_data}
            forms={forms}
          />
        )}
        {props.visibleDel && (
          <DeleteDialogComponent
            handleClose={() => toggleOpenDeleteModal(false)}
            del={() => del(item.id)}
            name={item.name}
            id={item.id}
            loading_data={loading_data}
          />
        )}
        {props.visibleFiles && (
          <FilesReader objectId={item.id} objTypeId={objTypeId} />
        )}
        <TableStateLess
          onSelectionChanged={(data) => onSelectionChanged(data)}
          onToolbarPreparing={(event, isConnected) => {
            return onToolbarPreparing(event, isConnected, frame.canEdit)
          }}
          data={items}
          columns={columns}
          loadPanelBoolean={true}
          currentRow={currentRow}
        />
      </DevExpressTableWrapper>
    )
  }
)
Container.defaultProps = {
  visibleAdd: true,
  visibleEdit: true,
  visibleDel: true,
  visibleFiles: false,
  visibleRefresh: true,
  visibleRegisterNewUser: false,
}
const mapState = (state) => ({
  idParent: selectUrlParamsId(state),
})
export const TableMasterController = connect(mapState, {
  toggleOpenAddModal,
  toggleOpenEditModal,
  toggleOpenDeleteModal,
  toggleOpenFiles,
})(Container)
