import * as React from 'react'
import { connect } from 'react-redux'
import {
  getNomenclatureTypes,
  iudNomenclatureType,
} from '@AppStore/Actions/Derictories/NomenclatureTypes'
import {
  selectNomenclatureTypes,
  selectNomenclatureTypesColumns,
  selectNomenclatureTypesForm,
} from '@AppStore/Selectors/nomenclatureTypes'
import { selectNomenclatureFrame } from '@AppStore/Selectors/frames/index'
//components
//@ts-ignore
import { TableMasterController } from '@Templates/DerictoriesComponents/TableMaster'
import {
  IMapStateToPropsNomenType,
  IMapDispatchToPropsNomenType,
} from './types'
import { AppStateType } from '@AppStore/store'
import { setTitleToNavbar } from '@AppStore/Actions/Ui.types'
import { selectLoadingData } from '@AppStore/Selectors'
import {
  getUserFields,
  getUserFrames,
} from '@AppStore/Actions/UserData/UserData'

const NomenclatureTypesContainer: React.FC<
  IMapStateToPropsNomenType & IMapDispatchToPropsNomenType
> = React.memo(
  ({
    loading_data,
    nomenclature_types,
    columns,
    forms,
    iudNomenclatureType,
    getNomenclatureTypes,
    setTitleToNavbar,
    frame,
    getUserFields,
    getUserFrames,
  }) => {
    React.useEffect(() => {
      refreshData()
      document.title = 'Типы номенклатуры'
      setTitleToNavbar('Типы номенклатуры')
    }, [])
    const refreshData = () => {
      getUserFields()
      getUserFrames()
      getNomenclatureTypes()
    }
    return (
      <TableMasterController
        loading_data={loading_data}
        data={nomenclature_types}
        frame={frame}
        columns={columns}
        forms={forms}
        iudDerictories={iudNomenclatureType}
      />
    )
  }
)
const mapStateToProps = (state: AppStateType): IMapStateToPropsNomenType => ({
  loading_data: selectLoadingData(state),
  nomenclature_types: selectNomenclatureTypes(state),
  frame: selectNomenclatureFrame(state),
  columns: selectNomenclatureTypesColumns(state),
  forms: selectNomenclatureTypesForm(state),
})
const DispatchToProps: IMapDispatchToPropsNomenType = {
  getNomenclatureTypes,
  iudNomenclatureType,
  setTitleToNavbar,
  getUserFields,
  getUserFrames,
}
export default connect(mapStateToProps, { ...DispatchToProps })(
  NomenclatureTypesContainer
)
