import React, { Component } from 'react'
//utils
import PropTypes from 'prop-types';
//redux
import { connect } from 'react-redux';
import { registrationUser } from '@AppStore/Actions/User';
import { getOrganizations } from '@AppStore/Actions/Derictories/Organizations';
//material ui stuff
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
//components
import { DefaultButton } from '../../Utils/Buttons';
import InputMaskComponentLogin from '@Templates/InputMaskComponentLogin';
//css
import classed from '../../css/Registration.module.css';

export class RegistrationContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            login: '',
            password: '',
            respName: '',
            respEmail: '',
        }
    }
    componentDidMount(){
        this.props.getOrganizations();
        document.title = 'Регистрация';
    }
    //Submits
    handleSubmitRegObject = () => {
        const jsonObject = {
            key: this.props.isKey,
            ...this.state
        }
        this.props.registrationUser(jsonObject);
    }
    //onChanges
    onChange = e => this.setState({...this.state, [e.currentTarget.name]:e.currentTarget.value})
    onChangeLogin = e => this.setState({...this.state, login: e.currentTarget.value.replace(/[+]/g, "").replace(/-/g, "")});
    //onChangeSelect = e => this.setState({...this.state, orgId: e.currentTarget.value});
    beforeMaskedValueChange = (newState, oldState, userInput) => {
        let { value } = newState;
        let selection = newState.selection;
        let cursorPosition = selection ? selection.start : null;
        if (value.endsWith('-') && userInput !== '-' && !value.endsWith('-')) {
          if (cursorPosition === value.length) {
            cursorPosition--;
            selection = { start: cursorPosition, end: cursorPosition };
          }
          value = value.slice(0, -1);
        }
        return {
          value,
          selection
        };
      }
    //JSX creaters
    /* markUpSelect = () => (
        <select value={this.state.orgId} onChange={this.onChangeSelect}>
            <option disabled value={'-10'}>Организации</option>
            {this.props.organizations && this.props.organizations.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
        </select>
    ) */
    render() {
        const { loading_user } = this.props;
        return (
            <div className={classed.registration_wrapper}>
                <Paper className={classed.paper}>
                    <h1>Регистрация</h1>
                     <div className={classed.form}>
                         <div className={classed.login_input}>
                                    <InputMaskComponentLogin onChange={this.onChangeLogin} value={this.state.login} beforeMaskedValueChange={this.beforeMaskedValueChange}/>
                                    {/* <TextField
                                        variant='outlined'
                                        name='login'
                                        margin='normal'
                                        autoFocus
                                        value={this.state.login}
                                        onChange={this.onChange}                                  
                                    /> */}
                         </div>
                         <div className={classed.password_input} style={{display:'flex', flexDirection:'column'}}>
                                    <TextField
                                        fullWidth
                                        type='password'
                                        variant='outlined'
                                        name='password'
                                        margin='normal'
                                        placeholder='Пароль'
                                        label='Пароль'
                                        value={this.state.password}
                                        onChange={this.onChange}
                                    />
                                    <TextField
                                        fullWidth
                                        type='text'
                                        variant='outlined'
                                        name='respName'
                                        margin='normal'
                                        placeholder='ФИО'
                                        label='ФИО'
                                        value={this.state.respName}
                                        onChange={this.onChange}
                                    />
                                    <TextField
                                        fullWidth
                                        type='еуче'
                                        variant='outlined'
                                        name='respEmail'
                                        margin='normal'
                                        placeholder='Почта'
                                        label='Почта'
                                        value={this.state.respEmail}
                                        onChange={this.onChange}
                                    />
                         </div>
                        {/*  <div className={classed.select_organizations}>
                             <div>Выберите организацию:</div>
                             <div>{this.markUpSelect()}</div>
                         </div> */}
                     </div>
                     <DefaultButton loading={loading_user} text='зарегистрироваться' callback={this.handleSubmitRegObject}/>
                </Paper>
            </div>
        )
    }
}
RegistrationContainer.propTypes = {
    loading_user: PropTypes.bool,
    isKey: PropTypes.string.isRequired,
    organizations: PropTypes.array.isRequired,
}
const mapStateToProps = state => ({
    loading_user: state.UI.loading_user,
    isKey: state.user.isKey,
    organizations: state.data.organizations,
})

export default connect(mapStateToProps, { 
    getOrganizations,
    registrationUser })(RegistrationContainer);
