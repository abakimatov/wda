import * as React from 'react'
//@ts-ignore
import FadeMenu from './FadeMenu'
//icosn
//@ts-ignore
import fact from '@Files/fact.png'
//@ts-ignore
import derictories from '@Files/derictories.png'
//@ts-ignore
import plan from '@Files/plan.png'
//@ts-ignore
import report from '@Files/report.png'
//@ts-ignore
import settings from '@Files/settings.png'
//
import {
  StatusConnected,
  ActiveConnected,
  OffConnected,
  AppMenu,
  Drawer,
} from './menuStyles'
import { connect } from 'react-redux'
import { AppStateType } from '@AppStore/store'
import { FrameType } from '@AppStore/commonTypes'
type TMenuLink = { id: number; link: string; rusName: string }
type Tstate = {
  planItems: TMenuLink[]
  derictoriesItems: TMenuLink[]
  reportItems: TMenuLink[]
  factItems: TMenuLink[]
  settingsItems: TMenuLink[]
}
type Tprops = {
  isConnected: boolean
  links: FrameType[]
  authenticated: boolean
}
export class Menu extends React.PureComponent<Tprops, Tstate> {
  //@ts-ignore
  constructor(props) {
    super(props)
    this.state = {
      planItems: [
        { id: 0, link: 'console', rusName: 'Консоль' },
        {
          rusName: 'Планы строительства',
          link: 'plans',
          id: 1,
        },
      ],
      derictoriesItems: [
        {
          rusName: 'Проекты',
          link: 'projects',
          id: 0,
        },
        {
          rusName: 'Месторождения',
          link: 'deposits',
          id: 1,
        },
        {
          rusName: 'Объекты работ',
          link: 'work_objects',
          id: 2,
        },
        {
          rusName: 'Виды работ',
          link: 'work_kinds',
          id: 3,
        },
        {
          rusName: 'Буровые установки',
          link: 'drilling_rigs',
          id: 4,
        },
        {
          rusName: 'Классификатор работ БКВ',
          link: 'work_classifier',
          id: 5,
        },
        /* SYSTEMS */
        {
          rusName: 'Сценарии',
          link: 'scenarios',
          id: 7,
        },
        { id: 8, link: 'nomenclature', rusName: 'Номенклатура' },
        { id: 9, link: 'units', rusName: 'Единицы измерения' },
        { id: 10, link: 'nomenclature_types', rusName: 'Типы номенклатуры' },
        { id: 11, link: 'mortar_types', rusName: 'Типы бурового раствора' },
      ],
      reportItems: [
        { id: 0, link: 'rep/depth/day/graph', rusName: 'Глубина-день' },
        {
          id: 1,
          link: 'rep/calendar/time/balance',
          rusName: 'Баланс календарного времени',
        },
        {
          id: 2,
          link: 'rep/calendar/time/balance/diag',
          rusName: 'Баланс календарного времени (диаг.)',
        },
        {
          id: 3,
          link: 'rep/construction/time/schedule',
          rusName: 'График строительства (виды работ)',
        },
        {
          id: 4,
          link: 'rep/construction/time/schedule/short',
          rusName: 'График строительства (краткий)',
        },
        {
          id: 5,
          link: 'rep/day/summary',
          rusName: 'Суточная сводка (форма 155-ГАЗ)',
        },
      ],
      factItems: [
        { id: 0, link: 'daily_reports', rusName: 'Суточный рапорт' },
        { id: 1, link: 'npvacts', rusName: 'Акты НПВ' },
      ],
      settingsItems: [
        {
          rusName: 'Пользователи',
          link: 'users',
          id: 0,
        },
        {
          rusName: 'Профиль',
          link: '',
          id: 1,
        },
        {
          rusName: 'Договоры',
          link: 'contracts',
          id: 2,
        },
        {
          rusName: 'Организации',
          link: 'organizations',
          id: 3,
        },
        {
          id: 4,
          rusName: 'Исполнители',
          link: 'performens',
        },
      ],
    }
  }
  render() {
    const { isConnected, links, authenticated } = this.props
    const {
      planItems,
      derictoriesItems,
      reportItems,
      factItems,
      settingsItems,
    } = this.state
    return (
      <AppMenu>
        <section className="data-app-menu-col-1">
          <div className="data-app-menu-col-1-content-1">
            <Status isConnected={isConnected} />
          </div>
          <div className="data-app-menu-col-1-content-2">WDA</div>
        </section>
        <section className="data-app-menu-col-2">
          <FadeMenu
            disabled={!authenticated}
            name="Факт"
            icon={fact}
            items={factItems}
          />
          <FadeMenu
            disabled={!authenticated}
            name="План"
            icon={plan}
            items={planItems}
          />
          <FadeMenu
            disabled={!authenticated}
            name="Отчёты"
            icon={report}
            items={reportItems}
          />
          <FadeMenu
            disabled={!authenticated}
            name="Справочники"
            icon={derictories}
            //items={links}
            items={derictoriesItems}
          />
          <FadeMenu
            disabled={!authenticated}
            name="Настройки"
            icon={settings}
            style={{ alignSelf: 'flex-end' }}
            items={settingsItems}
          />
        </section>
      </AppMenu>
    )
  }
}

const Status: React.FC<{ isConnected: boolean }> = React.memo(
  ({ isConnected }) => {
    return (
      <StatusConnected>
        {isConnected ? (
          <div className="indicator">
            <ActiveConnected />
          </div>
        ) : (
          <div className="indicator">
            <OffConnected />
          </div>
        )}
      </StatusConnected>
    )
  }
)
const mapState = (state: AppStateType) => ({
  isConnected: state.UI.isConnected,
  links: state.user.userInterface,
  authenticated: state.user.authenticated,
})
const mapDispatch = {}
const connector = connect(mapState, mapDispatch)

export default connector(Menu)
