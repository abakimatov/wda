import * as React from 'react'
import { AppHeader } from './headerStyles'
import { connect } from 'react-redux'
import { AppStateType } from '@AppStore/store'
import { logOut } from '@AppStore/Actions/User'
//@ts-ignore
import Notification from '../Components/Notifications/Notifications'
//@ts-ignore
import { HeaderMenu } from './headerMenu'
import { setTitleToNavbar } from '@AppStore/Actions/Ui.types'
import { Link } from 'react-router-dom'
//
type Tstate = {}
type Tprops = {
  success: boolean
  error: boolean
  success_mess: string
  error_mess: string
  authenticated: boolean
  title: string
  logOut: () => void
}
//
export class Header extends React.PureComponent<Tstate & Tprops> {
  render() {
    const {
      title,
      logOut,
      success,
      error,
      success_mess,
      error_mess,
      authenticated,
    } = this.props
    return (
      <AppHeader>
        <section className="data-app-header-col-1">
          <div>{title}</div>
        </section>
        <section className="data-app-header-col-2">
          {authenticated && <HeaderMenu logOut={logOut} />}
          {!authenticated && (
            <Link
              type="button"
              to="/login"
              style={{ textDecoration: 'none', color: '#DFE6F0' }}
            >
              Войти
            </Link>
          )}
        </section>
        {/* Norify controllers */}
        {success && Notification(success, success_mess, 'green', 'success')}
        {error && Notification(error, error_mess, 'red', 'error')}
      </AppHeader>
    )
  }
}
const mapState = (state: AppStateType) => ({
  title: state.UI.title,
  success: state.UI.success,
  error: state.UI.error,
  success_mess: state.UI.success_mess,
  error_mess: state.UI.error_mess,
  authenticated: state.user.authenticated,
})
const mapDispatch = { logOut }
const connector = connect(mapState, mapDispatch)
export default connector(Header)
