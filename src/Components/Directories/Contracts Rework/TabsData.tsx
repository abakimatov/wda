import * as React from 'react'
//@ts-ignore
import VerticalTabs from '@Templates/DerictoriesComponents/PageConstructor/VerticalTabs'
import { connect } from 'react-redux'
//@ts-ignore
import DetailsContainer from './Contract/Details/DetailsContainer'
import { getContractDetails } from '@AppStore/Actions/Derictories/Contracts'
//
type Tprops = {
  id: number
  iudFunctionWithRedirectToItemsPage: () => void
  getContractDetails: (flag: null | string, id: number) => void
}
type Tstate = {}
const Container: React.FC<Tprops & Tstate> = React.memo(
  ({ id, getContractDetails, iudFunctionWithRedirectToItemsPage }) => {
    React.useEffect(() => {
      getContractDetails(null, id)
    }, [id])
    const data = [
      {
        method: () => {
          getContractDetails(null, id)
        },
        component: (
          <DetailsContainer
            iudFunctionWithRedirectToItemsPage={
              iudFunctionWithRedirectToItemsPage
            }
          />
        ),
        label: 'Детали',
      },
    ]
    return <VerticalTabs data={data} />
  }
)
const mapDispatch = { getContractDetails }
const connector = connect(null, mapDispatch)
export const TabsData = connector(Container)
