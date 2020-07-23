import * as React from 'react'
//@ts-ignore
import VerticalTabs from '@Templates/DerictoriesComponents/PageConstructor/VerticalTabs'
import { connect } from 'react-redux'
//@ts-ignore
import DetailsContainer from './NpvAct/Details/DetailsContainer'
import { getNpvActDetails } from '@AppStore/Actions/Derictories/NvpActs/NpvActDetails'
//
type Tprops = {
  id: number
  iudFunctionWithRedirectToItemsPage: () => void
  getNpvActDetails: (flag: null | string, id: number) => void
}
type Tstate = {}
const Container: React.FC<Tprops & Tstate> = React.memo(
  ({ id, getNpvActDetails, iudFunctionWithRedirectToItemsPage }) => {
    React.useEffect(() => {
      getNpvActDetails(null, id)
    }, [id])
    /* const data = [
      {
        method: () => {
          getNpvActDetails(null, id)
        },
        component: (
          //@ts-ignore
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
      //@ts-ignore
      <DetailsContainer
        iudFunctionWithRedirectToItemsPage={iudFunctionWithRedirectToItemsPage}
      />
    )
  }
)
const mapDispatch = { getNpvActDetails }
const connector = connect(null, mapDispatch)
export const TabsData = connector(Container)
