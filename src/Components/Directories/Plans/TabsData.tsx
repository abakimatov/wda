import * as React from 'react'
//@ts-ignore
import VerticalTabs from '@Templates/DerictoriesComponents/PageConstructor/VerticalTabs'
import { connect } from 'react-redux'
//@ts-ignore
import DetailsContainer from './Plan/Details/DetailsContainer'
import { getPlanDetails } from '@AppStore/Actions/Derictories/Plans'
//
type Tprops = {
  id: number
  iudFunctionWithRedirectToItemsPage: () => void
  getPlanDetails: (flag: null | string, id: number) => void
}
type Tstate = {}
const Container: React.FC<Tprops & Tstate> = React.memo(
  ({ id, getPlanDetails, iudFunctionWithRedirectToItemsPage }) => {
    React.useEffect(() => {
      getPlanDetails(null, id)
    }, [id])
    /* const data = [
      {
        method: () => {
          getPlanDetails(null, id)
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
    return <VerticalTabs data={data} /> */
    return (
      <DetailsContainer
        iudFunctionWithRedirectToItemsPage={iudFunctionWithRedirectToItemsPage}
      />
    )
  }
)
const mapDispatch = { getPlanDetails }
const connector = connect(null, mapDispatch)
export const TabsData = connector(Container)
