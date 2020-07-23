import React, { useEffect, memo, useReducer } from 'react'
import addItem from '@Files/additem.png'
import editItem from '@Files/edititem.png'
import delItem from '@Files/delitem.png'
import refreshItem from '@Files/refresh.png'
import fileIcon from '@Files/file.png'
//components
import { EditDialogComponent } from './EditDialogComponent'
import { TableStateLessTreeList } from './TableStateLessTreeList'
import { DevExpressTableWrapper } from './styledComponents'
import {
  toggleOpenAddModal,
  toggleOpenEditModal,
  toggleOpenDeleteModal,
  toggleOpenFiles,
  toggleOpenMovedItemsInTables,
} from '@AppStore/Actions/Derictories/Helpers'
import { setCheckedItemFromTables } from '@AppStore/Actions/Data'
import { connect } from 'react-redux'
import { AddDialogComponent } from './AddDialogComponent'
import { DeleteDialogComponent } from './DeleteDialogComponent'
import { MovedWorkKindsDialog } from '../../Components/Directories/WorkKinds/movedWorkKindsDialog'
import { hints } from './hints'

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
    iudFunctionWithRedirectToItemsPage,
    toggleOpenFiles,
    setCheckedItemFromTables,
    toggleOpenMovedItemsInTables,
    objTypeId,
    ...props
  }) => {
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
      if (item) {
        setState('item', { ...item })
        setCheckedItemFromTables(item)
      }
    }, [data, state.currentRow])
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
        setState('parentId', data.id)
      }
    }
    //servers actions
    const create = (jsonObject) =>
      iudDerictories('I', jsonObject, () => toggleOpenAddDialog(false))
    const update = (jsonObject) =>
      iudDerictories('U', jsonObject, () => toggleOpenEditDialog(false))
    const del = (id) => iudDerictories('D', { id })
    //custom toolbar table
    const onToolbarPreparing = (event, isConnected, canEdit) => {
      event.toolbarOptions.items.unshift(
        {
          location: 'before',
          widget: 'dxButton',
          options: {
            visible: props.visibleRefresh,
            width: 'auto',
            icon: refreshItem,
            hint: hints.refresh,
            disabled: isConnected && canEdit ? false : true,
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
            disabled: isConnected && canEdit ? false : true,
            //text: 'Добавить в папку',
            onClick: (event) => {
              setState('item', { ...state.item, parentId: state.item.id })
              toggleOpenAddDialog(true)
            },
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
            disabled: isConnected && item && item.id && canEdit ? false : true,
            //text: 'Редактировать',
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
            disabled: isConnected && item && item.id && canEdit ? false : true,
            onClick: (event) => toggleOpenFiles(true, item.id, objTypeId),
          },
        },
        {
          location: 'before',
          widget: 'dxButton',
          options: {
            visible: props.visibleMovedItems,
            width: 'auto',
            //icon: editItem,
            hint: hints.moved,
            disabled: isConnected && item && item.id && canEdit ? false : true,
            text: 'Переместить',
            onClick: (event) => toggleOpenMovedItemsInTables(true),
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
            disabled: isConnected && item && item.id && canEdit ? false : true,
            //text: 'Удалить',
            onClick: (event) => toggleOpenDeleteModal(true),
          },
        }
      )
    }
    const { items, item, currentRow } = state
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
        {props.visibleMovedItems && <MovedWorkKindsDialog />}
        <TableStateLessTreeList
          onSelectionChanged={(data) => onSelectionChanged(data)}
          onToolbarPreparing={(event, isConnected) =>
            onToolbarPreparing(event, isConnected, frame.canEdit)
          }
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
  visibleMovedItems: false,
}
export const TableMasterTreeList = connect(null, {
  toggleOpenAddModal,
  toggleOpenEditModal,
  toggleOpenDeleteModal,
  toggleOpenFiles,
  setCheckedItemFromTables,
  toggleOpenMovedItemsInTables,
})(Container)
