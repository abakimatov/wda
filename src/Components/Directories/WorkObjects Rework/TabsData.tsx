import * as React from 'react'
//@ts-ignore
import VerticalTabs from '@Templates/DerictoriesComponents/PageConstructor/VerticalTabs'
import { connect } from 'react-redux'
//@ts-ignore
import ExecutorsContainer from './WorkObject/Executors/ExecutorsContainer'
//@ts-ignore
import HolesContainer from './WorkObject/Holes/HolesContainer'
import {
  getWorkObjectHoles,
  getWorkObjectExecutors,
} from '@AppStore/Actions/Derictories/WorkObjects'
//
type Tprops = {
  id: number
  iudFunctionWithRedirectToItemsPage: () => void
  getWorkObjectHoles: (flag: null | string, id: number) => void
  getWorkObjectExecutors: (flag: null | string, id: number) => void
}
type Tstate = {}
const Container: React.FC<Tprops & Tstate> = React.memo(
  ({
    id,
    getWorkObjectHoles,
    getWorkObjectExecutors,
    iudFunctionWithRedirectToItemsPage,
  }) => {
    React.useEffect(() => {
      getWorkObjectExecutors(null, id)
    }, [id])
    const data = [
      {
        method: () => {
          getWorkObjectExecutors(null, id)
        },
        component: (
          <ExecutorsContainer
            iudFunctionWithRedirectToItemsPage={
              iudFunctionWithRedirectToItemsPage
            }
          />
        ),
        label: 'Подрядчик',
      },
      {
        method: () => {
          getWorkObjectHoles(null, id)
        },
        component: (
          <HolesContainer
            iudFunctionWithRedirectToItemsPage={
              iudFunctionWithRedirectToItemsPage
            }
          />
        ),
        label: 'Проектная конструкция скважины',
      },
    ]
    return <VerticalTabs data={data} />
  }
)
const mapDispatch = { getWorkObjectHoles, getWorkObjectExecutors }
const connector = connect(null, mapDispatch)
export const TabsData = connector(Container)
