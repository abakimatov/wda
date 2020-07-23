import * as React from 'react'
import { connect } from 'react-redux'
import { AppStateType } from '@AppStore/store'
import { toggleOpenMovedItemsInTables } from '@AppStore/Actions/Derictories/Helpers'
//!
import { Dialog, DialogContent } from '@material-ui/core'
//@ts-ignore
import { MarkUpSelectComponent } from '../../../Templates/DerictoriesComponents/PageConstructor/Select/Select'
//@ts-ignore
import { DialogActionsFC } from '@Templates/DerictoriesComponents/DialogStateLess'
import {
  getWorkKindFolders,
  movedWorkKind,
} from '@AppStore/Actions/Derictories/WorkKinds'

type TMapState = {
  open: boolean
  item: any
  items: any[]
}
type TMapDispatch = {
  toggleOpenMovedItemsInTables: (open: boolean) => void
  getWorkKindFolders: () => void
  movedWorkKind: (id: number, folderId: number | string) => void
}
type TState = {}
const Container: React.FC<TMapState & TState & TMapDispatch> = React.memo(
  ({
    open,
    items,
    item,
    toggleOpenMovedItemsInTables,
    getWorkKindFolders,
    movedWorkKind,
  }) => {
    const [folderId, setFolderId] = React.useState('null')
    const itemName = item.name
    //=== effects
    React.useEffect(() => {
      getWorkKindFolders()
    }, [])
    const handleSumbit = () => movedWorkKind(item.id, folderId)
    return (
      <Dialog
        open={open}
        onClose={() => toggleOpenMovedItemsInTables(false)}
        PaperProps={{ style: { width: 720 } }}
      >
        <DialogContent>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 20, fontWeight: 500 }}>
              Переместить элемент
            </div>
            <div style={{ fontSize: 20, fontWeight: 500 }}>({itemName})?</div>
          </div>
          <div
            style={{
              margin: '20px 0px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ fontSize: 14, width: '25%' }}>Переместить в</div>
            <div style={{ width: '70%' }}>
              <MarkUpSelectComponent
                value={folderId}
                data={items}
                name="folderId"
                ruName="Папка"
                //@ts-ignore
                onChange={(event) => {
                  //@ts-ignore
                  console.log(`event`, setFolderId(event.target.value))
                }}
              />
            </div>
          </div>
        </DialogContent>
        <DialogActionsFC
          loading_data={false}
          editFunction={handleSumbit}
          textCallToSaveData="Сохранить"
          handleClose={() => toggleOpenMovedItemsInTables(false)}
        />
      </Dialog>
    )
  }
)
const mapState = (state: AppStateType): TMapState => ({
  open: state.UI.openMovedWorkKinds,
  item: state.data.checkedItemFromTables,
  items: state.workKinds.folders,
})
const connector = connect(mapState, {
  toggleOpenMovedItemsInTables,
  getWorkKindFolders,
  movedWorkKind,
})
export const MovedWorkKindsDialog = connector(Container)
/* 
export const MarkUpSelectComponent = memo(
  ({ data, name, ruName, value, onChange }) => (
    <CustomSelect name={name} value={value ?? 'null'} onChange={onChange}>
      <option value="null" disabled>
        {ruName}
      </option>
      {data &&
        data.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
    </CustomSelect>
  )
)
 */
