import * as React from 'react'
//@ts-ignore
import VerticalTabs from '@Templates/DerictoriesComponents/PageConstructor/VerticalTabs'
//@ts-ignore
import { Header } from '@Templates/DerictoriesComponents/PageConstructor/Header'
//@ts-ignore
import HorizontalTabs from '@Templates/DerictoriesComponents/PageConstructor/HorizontalTabs'
//@ts-ignore
import { connect } from 'react-redux'
import TechOper from './Details/TechOper'
import Knbk from './Details/Knbk'
import Chisel from './Details/Chisel'
import DrillMortar from './Details/DrillMortar'
import DrillMortarVolume from './Details/DrillMortarVolume'
import DrillPumpWork from './Details/DrillPumpWork'
import CleanSystemWork from './Details/CleanSystemWork'
import BreakdownInstrument from './Details/BreakdownInstrument'
import MaterialConsumption from './Details/MaterialConsumption'
import DrillMortarPrep from './Details/DrillMortarPrep'
import DieselConsumption from './Details/DieselConsumption'
import ChiselDrillHead from './Details/ChiselDrillHead'
import CasingNKT from './Details/CasingNKT'
import TechGear from './Details/TechGear'
import DrillInstrumentKnbkElements from './Details/DrillInstrumentKnbkElements'
import TechEquipment from './Details/TechEquipment'
import WorkLine from './Details/WorkLine'
import DieselWork from './Details/DieselWork'
import Staff from './Details/Staff'
import SpecialMachineryWork from './Details/SpecialMachineryWork'
import DrillMortarLoss from './Details/DrillMortarLoss'
//
import { getDRTechOpers } from '@AppStore/Actions/Derictories/DayliReport/TechOpers'
import { getDRKnbk } from '@AppStore/Actions/Derictories/DayliReport/Knbk'
import { getDRChisel } from '@AppStore/Actions/Derictories/DayliReport/Chisel'
import { getDRDrillMortar } from '@AppStore/Actions/Derictories/DayliReport/DrillMortar'
import { getDRDrillMortarVolume } from '@AppStore/Actions/Derictories/DayliReport/DrillMortarVolume'
import { getDRDrillPumpWork } from '@AppStore/Actions/Derictories/DayliReport/DrillPumpWork'
import { getDRCleanSystemWork } from '@AppStore/Actions/Derictories/DayliReport/CleanSystemWork'
import { getDRBreakdownInstrument } from '@AppStore/Actions/Derictories/DayliReport/BreakDownInstrument'
import { getDRMaterialConsumption } from '@AppStore/Actions/Derictories/DayliReport/MaterialConsumption'
import { getDRDrillMortarPrep } from '@AppStore/Actions/Derictories/DayliReport/DrillMortarPrep'
import { getDRDieselConsumption } from '@AppStore/Actions/Derictories/DayliReport/DieselConsumption'
import { getDRChiselDrillHead } from '@AppStore/Actions/Derictories/DayliReport/ChiselDrillHead'
import { getDRTechGear } from '@AppStore/Actions/Derictories/DayliReport/TechGear'
import { getDRCasingNKT } from '@AppStore/Actions/Derictories/DayliReport/CasingNKT'
import { getDRDrillInstrumentKnbkElements } from '@AppStore/Actions/Derictories/DayliReport/DrillInstrumentKnbkElements'
import { getDRTechEquipment } from '@AppStore/Actions/Derictories/DayliReport/TechEquipment'
import { getDRWorkLine } from '@AppStore/Actions/Derictories/DayliReport/WorkLine'
import { getDRDieselWork } from '@AppStore/Actions/Derictories/DayliReport/DieselWork'
import { getDRStaff } from '@AppStore/Actions/Derictories/DayliReport/Staff'
import { getDRSpecialMachineryWork } from '@AppStore/Actions/Derictories/DayliReport/SpecialMachineryWork'
import { getDRDrillMortarLoss } from '@AppStore/Actions/Derictories/DayliReport/DrillMortatLoss'
import { TObjectFormState } from '@AppStore/Reducers/FormsReducers/types'
import {
  selectDayliReportsAdditionallyForm,
  selectDRTechOpersAdditionallyForm,
  selectDRChiselAdditionallyForm,
  selectDRDrillMortarAdditionallyForm,
} from '@AppStore/Selectors/DayliReport'
import { AppStateType } from '@AppStore/store'
const Container: React.FC<Tprops> = React.memo(
  ({
    id,
    additionallyForms,
    techOperAdditionallyForms,
    chiselAdditionallyForm,
    drillMortarParamsAdditionallyForm,
    state,
    dispatchOnChange,
    iudFunctionWithRedirectToItemsPage,
    getDRTechOpers,
    getDRKnbk,
    getDRChisel,
    getDRDrillMortar,
    getDRDrillMortarVolume,
    getDRDrillPumpWork,
    getDRCleanSystemWork,
    getDRBreakdownInstrument,
    getDRMaterialConsumption,
    getDRDrillMortarPrep,
    getDRDieselConsumption,
    getDRChiselDrillHead,
    getDRTechGear,
    getDRCasingNKT,
    getDRDrillInstrumentKnbkElements,
    getDRTechEquipment,
    getDRWorkLine,
    getDRDieselWork,
    getDRStaff,
    getDRSpecialMachineryWork,
    getDRDrillMortarLoss,
  }) => {
    React.useEffect(() => {
      getDRTechOpers(null, id)
    }, [id])
    const techOperTabs = [
      {
        //! === method
        method: () => {
          //  getDRTechOpers(null, id)
        },
        label: 'Технологические операции',
        component: (
          //@ts-ignore
          <TechOper
            iudFunctionWithRedirectToItemsPage={
              iudFunctionWithRedirectToItemsPage
            }
            getData={() => getDRTechOpers(null, id)}
          />
        ),
        header: (
          <Header
            dispatchOnChange={dispatchOnChange}
            forms={techOperAdditionallyForms}
            state={state}
          />
        ),
      },
      {
        //! === method
        method: () => {
          //  getDRKnbk(null, id)
        },
        label: 'КНБК',
        component: (
          //@ts-ignore
          <Knbk
            iudFunctionWithRedirectToItemsPage={
              iudFunctionWithRedirectToItemsPage
            }
            getData={() => getDRKnbk(null, id)}
          />
        ),
      },
      {
        //! === method
        method: () => {
          //  getDRChisel(null, id)
        },
        label: 'Параметры долот',
        component: (
          //@ts-ignore
          <Chisel
            iudFunctionWithRedirectToItemsPage={
              iudFunctionWithRedirectToItemsPage
            }
            getData={() => getDRChisel(null, id)}
          />
        ),
        header: (
          <Header
            dispatchOnChange={dispatchOnChange}
            forms={chiselAdditionallyForm}
            state={state}
          />
        ),
      },
    ]
    const drillMortarParamsTabs = [
      {
        //! === method
        method: () => {
          //  getDRDrillMortarVolume(null, id)
        },
        label: 'Объем бурового раствора',
        component: (
          //@ts-ignore
          <DrillMortarVolume
            iudFunctionWithRedirectToItemsPage={
              iudFunctionWithRedirectToItemsPage
            }
            getData={() => getDRDrillMortarVolume(null, id)}
          />
        ),
        header: (
          <Header
            dispatchOnChange={dispatchOnChange}
            forms={drillMortarParamsAdditionallyForm}
            state={state}
          />
        ),
      },
      {
        //! === method
        method: () => {
          //  getDRDrillMortarPrep(null, id)
        },
        label: 'Приготовление бурового раствора',
        component: (
          //@ts-ignore
          <DrillMortarPrep
            iudFunctionWithRedirectToItemsPage={
              iudFunctionWithRedirectToItemsPage
            }
            getData={() => getDRDrillMortarPrep(null, id)}
          />
        ),
      },
      {
        //! === method
        method: () => {
          //  getDRDrillMortarLoss(null, id)
        },
        label: 'Потери бурового раствора',
        component: (
          //@ts-ignore
          <DrillMortarLoss
            iudFunctionWithRedirectToItemsPage={
              iudFunctionWithRedirectToItemsPage
            }
            getData={() => getDRDrillMortarLoss(null, id)}
          />
        ),
      },
      {
        //! === method
        method: () => {
          //  getDRCleanSystemWork(null, id)
        },
        label: 'Работа систем очистки',
        component: (
          //@ts-ignore
          <CleanSystemWork
            iudFunctionWithRedirectToItemsPage={
              iudFunctionWithRedirectToItemsPage
            }
            getData={() => getDRCleanSystemWork(null, id)}
          />
        ),
      },
    ]
    const equipmentsTabs = [
      {
        //! === method
        method: () => {
          //  getDRBreakdownInstrument(null, id)
        },
        label: 'Аварийный инструмент',
        component: (
          //@ts-ignore
          <BreakdownInstrument
            iudFunctionWithRedirectToItemsPage={
              iudFunctionWithRedirectToItemsPage
            }
            getData={() => getDRBreakdownInstrument(null, id)}
          />
        ),
      },
      {
        //! === method
        method: () => {
          //  getDRChiselDrillHead(null, id)
        },
        label: 'Долота и бурголовки',
        component: (
          //@ts-ignore
          <ChiselDrillHead
            iudFunctionWithRedirectToItemsPage={
              iudFunctionWithRedirectToItemsPage
            }
            getData={() => getDRChiselDrillHead(null, id)}
          />
        ),
      },
      {
        //! === method
        method: () => {
          //  getDRTechGear(null, id)
        },
        label: 'Технологическая оснастка',
        component: (
          //@ts-ignore
          <TechGear
            iudFunctionWithRedirectToItemsPage={
              iudFunctionWithRedirectToItemsPage
            }
            getData={() => getDRTechGear(null, id)}
          />
        ),
      },
      {
        //! === method
        method: () => {
          //  getDRDrillInstrumentKnbkElements(null, id)
        },
        label: 'Бурильный инструмент и элементы КНБК',
        component: (
          //@ts-ignore
          <DrillInstrumentKnbkElements
            iudFunctionWithRedirectToItemsPage={
              iudFunctionWithRedirectToItemsPage
            }
            getData={() => getDRDrillInstrumentKnbkElements(null, id)}
          />
        ),
      },
      {
        //! === method
        method: () => {
          //  getDRTechEquipment(null, id)
        },
        label: 'ВЗД, КОС и технологическое оборудование',
        component: (
          //@ts-ignore
          <TechEquipment
            iudFunctionWithRedirectToItemsPage={
              iudFunctionWithRedirectToItemsPage
            }
            getData={() => getDRTechEquipment(null, id)}
          />
        ),
      },
      {
        //! === method
        method: () => {
          //  getDRWorkLine(null, id)
        },
        label: 'Параметры талевого каната',
        component: (
          //@ts-ignore
          <WorkLine
            iudFunctionWithRedirectToItemsPage={
              iudFunctionWithRedirectToItemsPage
            }
            getData={() => getDRWorkLine(null, id)}
          />
        ),
      },
      {
        //! === method
        method: () => {
          //  getDRDieselWork(null, id)
        },
        label: 'Работа дизелей',
        component: (
          //@ts-ignore
          <DieselWork
            iudFunctionWithRedirectToItemsPage={
              iudFunctionWithRedirectToItemsPage
            }
            getData={() => getDRDieselWork(null, id)}
          />
        ),
      },
    ]
    const materialsTabs = [
      {
        //! === method
        method: () => {
          //  getDRMaterialConsumption(null, id)
        },
        label: 'Расход материалов',
        component: (
          //@ts-ignore
          <MaterialConsumption
            iudFunctionWithRedirectToItemsPage={
              iudFunctionWithRedirectToItemsPage
            }
            getData={() => getDRMaterialConsumption(null, id)}
          />
        ),
      },
      {
        //! === method
        method: () => {
          //  getDRDieselConsumption(null, id)
        },
        label: 'Потребление дизельного топлива',
        component: (
          //@ts-ignore
          <DieselConsumption
            iudFunctionWithRedirectToItemsPage={
              iudFunctionWithRedirectToItemsPage
            }
            getData={() => getDRDieselConsumption(null, id)}
          />
        ),
      },
      {
        //! === method
        method: () => {
          //  getDRCasingNKT(null, id)
        },
        label: 'Обсадная труда и НКТ',
        component: (
          //@ts-ignore
          <CasingNKT
            iudFunctionWithRedirectToItemsPage={
              iudFunctionWithRedirectToItemsPage
            }
            getData={() => getDRCasingNKT(null, id)}
          />
        ),
      },
    ]
    //main data
    const data = [
      {
        //! === method
        method: () => {
          //  getDRTechOpers(null, id)
        },
        label: 'Технологические операции',
        component: <HorizontalTabs data={techOperTabs} />,
      },
      {
        //! === method
        method: () => {
          //  getDRDrillMortarVolume(null, id)
        },
        label: 'Параметры бурового растрова',
        component: <HorizontalTabs data={drillMortarParamsTabs} />,
      },
      {
        //! === method
        method: () => {
          //  getDRBreakdownInstrument(null, id)
        },
        label: 'Оборудование',
        component: <HorizontalTabs data={equipmentsTabs} />,
      },
      {
        //! === method
        method: () => {
          //  getDRMaterialConsumption(null, id)
        },
        label: 'Материалы',
        component: <HorizontalTabs data={materialsTabs} />,
      },
      {
        //! === method
        method: () => {
          //  getDRDrillPumpWork(null, id)
        },
        label: 'Работа буровых насосов',
        component: (
          //@ts-ignore
          <DrillPumpWork
            iudFunctionWithRedirectToItemsPage={
              iudFunctionWithRedirectToItemsPage
            }
            getData={() => getDRDrillPumpWork(null, id)}
          />
        ),
      },
      {
        //! === method
        method: () => {
          //  getDRDrillMortar(null, id)
        },
        label: 'Буровой раствор',
        component: (
          //@ts-ignore
          <DrillMortar
            iudFunctionWithRedirectToItemsPage={
              iudFunctionWithRedirectToItemsPage
            }
            getData={() => getDRDrillMortar(null, id)}
          />
        ),
      },

      {
        //! === method
        method: () => {
          //  getDRStaff(null, id)
        },
        label: 'Персонал',
        component: (
          //@ts-ignore
          <Staff
            iudFunctionWithRedirectToItemsPage={
              iudFunctionWithRedirectToItemsPage
            }
            getData={() => getDRStaff(null, id)}
          />
        ),
      },
      {
        //! === method
        method: () => {
          //  getDRSpecialMachineryWork(null, id)
        },
        label: 'Работа спецтехники и автотракторной техники',
        component: (
          //@ts-ignore
          <SpecialMachineryWork
            iudFunctionWithRedirectToItemsPage={
              iudFunctionWithRedirectToItemsPage
            }
            getData={() => getDRSpecialMachineryWork(null, id)}
          />
        ),
      },
      {
        //! === method
        method: () => {},
        label: 'Дополнительно',
        component: (
          <Header
            dispatchOnChange={dispatchOnChange}
            forms={additionallyForms}
            state={state}
          />
        ),
      },
    ]
    return <VerticalTabs data={data} />
  }
)
const mapDispatch = {
  getDRTechOpers,
  getDRKnbk,
  getDRChisel,
  getDRDrillMortar,
  getDRDrillMortarVolume,
  getDRDrillPumpWork,
  getDRCleanSystemWork,
  getDRBreakdownInstrument,
  getDRMaterialConsumption,
  getDRDrillMortarPrep,
  getDRDieselConsumption,
  getDRChiselDrillHead,
  getDRTechGear,
  getDRCasingNKT,
  getDRDrillInstrumentKnbkElements,
  getDRTechEquipment,
  getDRWorkLine,
  getDRDieselWork,
  getDRStaff,
  getDRSpecialMachineryWork,
  getDRDrillMortarLoss,
}
const mapState = (state: AppStateType) => ({
  additionallyForms: selectDayliReportsAdditionallyForm(state),
  techOperAdditionallyForms: selectDRTechOpersAdditionallyForm(state),
  chiselAdditionallyForm: selectDRChiselAdditionallyForm(state),
  drillMortarParamsAdditionallyForm: selectDRDrillMortarAdditionallyForm(state),
})
const connector = connect(mapState, mapDispatch)
export const TabsData = connector(Container)
//types
type Tprops = {
  id: number
  additionallyForms: TObjectFormState
  techOperAdditionallyForms: TObjectFormState
  chiselAdditionallyForm: TObjectFormState
  drillMortarParamsAdditionallyForm: TObjectFormState
  state: any
  dispatchOnChange: (name: any, value: any) => void
  iudFunctionWithRedirectToItemsPage: (openAdd: boolean) => void
  getDRTechOpers: (flag: null | string, id: number) => void
  getDRKnbk: (flag: null | string, id: number) => void
  getDRChisel: (flag: null | string, id: number) => void
  getDRDrillMortar: (flag: null | string, id: number) => void
  getDRDrillMortarVolume: (flag: null | string, id: number) => void
  getDRDrillPumpWork: (flag: null | string, id: number) => void
  getDRCleanSystemWork: (flag: null | string, id: number) => void
  getDRBreakdownInstrument: (flag: null | string, id: number) => void
  getDRMaterialConsumption: (flag: null | string, id: number) => void
  getDRDrillMortarPrep: (flag: null | string, id: number) => void
  getDRDieselConsumption: (flag: null | string, id: number) => void
  getDRChiselDrillHead: (flag: null | string, id: number) => void
  getDRTechGear: (flag: null | string, id: number) => void
  getDRCasingNKT: (flag: null | string, id: number) => void
  getDRDrillInstrumentKnbkElements: (flag: null | string, id: number) => void
  getDRTechEquipment: (flag: null | string, id: number) => void
  getDRWorkLine: (flag: null | string, id: number) => void
  getDRDieselWork: (flag: null | string, id: number) => void
  getDRStaff: (flag: null | string, id: number) => void
  getDRSpecialMachineryWork: (flag: null | string, id: number) => void
  getDRDrillMortarLoss: (flag: null | string, id: number) => void
}
