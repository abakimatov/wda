import * as React from 'react'
import { connect } from 'react-redux'
import {
  getNomenclature,
  iudNomenclature,
} from '@AppStore/Actions/Derictories/Nomenclature'
import { getUnits } from '@AppStore/Actions/Derictories/Units'
import { getNomenclatureTypes } from '@AppStore/Actions/Derictories/NomenclatureTypes'
import {
  selectNomenclature,
  selectNomenclatureForm,
  selectNomenclatureColumns,
} from '@AppStore/Selectors/nomenclature'
//components
//@ts-ignore
import { TableMasterController } from '@Templates/DerictoriesComponents/TableMaster'
import { selectUnits } from '@AppStore/Selectors/units'
import { selectNomenclatureTypes } from '@AppStore/Selectors/nomenclatureTypes'
import { AppStateType } from '@AppStore/store'
import { IMapStateToPropsNomen, IMapDispatchToPropsNomen } from './types'
import { selectNomenclatureFrame } from '@AppStore/Selectors/frames'
import { selectLoadingData } from '@AppStore/Selectors'
import {
  getUserFields,
  getUserFrames,
} from '@AppStore/Actions/UserData/UserData'
import { setTitleToNavbar } from '@AppStore/Actions/Ui.types'

const NomenclatureContainer: React.FC<
  IMapStateToPropsNomen & IMapDispatchToPropsNomen
> = React.memo(
  ({
    nomenclature_data,
    frame,
    columns,
    forms,
    nomenclature_types,
    units_data,
    iudNomenclature,
    getUserFields,
    getUserFrames,
    getNomenclature,
    getNomenclatureTypes,
    getUnits,
    setTitleToNavbar,
  }) => {
    React.useEffect(() => {
      refreshData()
      setTitleToNavbar('Номенклатура')
      document.title = 'Номенклатура'
    }, [])
    const refreshData = () => {
      getUserFields()
      getUserFrames()
      getNomenclature()
      getNomenclatureTypes()
      getUnits()
    }
    return (
      <TableMasterController
        data={nomenclature_data}
        frame={frame}
        columns={columns}
        forms={forms}
        subData={{
          nomenclature_types,
          units_data,
        }}
        iudDerictories={iudNomenclature}
        refreshData={refreshData}
      />
    )
  }
)
const mapStateToProps = (state: AppStateType): IMapStateToPropsNomen => ({
  loading_data: selectLoadingData(state),
  nomenclature_data: selectNomenclature(state),
  frame: selectNomenclatureFrame(state),
  columns: selectNomenclatureColumns(state),
  forms: selectNomenclatureForm(state),
  nomenclature_types: selectNomenclatureTypes(state),
  units_data: selectUnits(state),
})
const DispatchToProps: IMapDispatchToPropsNomen = {
  getNomenclature,
  iudNomenclature,
  getUnits,
  getNomenclatureTypes,
  setTitleToNavbar,
  getUserFields,
  getUserFrames,
}
export default connect(mapStateToProps, { ...DispatchToProps })(
  NomenclatureContainer
)
