import React, { Component } from 'react';
//redux
import { connect } from 'react-redux';
import { RegistrationOrg } from '@AppStore/Actions/RegistrationActions';
import { getAccessRegistration } from '@AppStore/Actions/User.ts';
//material ui
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
//css
import classed from './RegistrationOrganization.module.css';
import InputMaskComponent from '@Templates/InputMaskComponent';
import { DefaultButton } from '../../../Utils/Buttons';

export class RegistrationOrganization extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            mnemo: '',
            inn: '',
            kpp: '',
            actAddress: '',
            legAddress: '',
            phone: '',
            email: '',
        };
        this.arr = [
            { name: 'name', label: 'Наименование организации', type: 'text', multiline: true, maxLength: "150", required: true },
            { name: 'mnemo', label: 'Краткое наименование организации', type: 'text', multiline: true, maxLength: "150", required: true },
            { name: 'inn', label: 'ИНН', type: 'number', multiline: false, maxLength: "10", required: true },
            { name: 'kpp', label: 'КПП', type: 'number', multiline: false, maxLength: "9", required: true },
            { name: 'actAddress', label: 'Фактический адрес', type: 'text', multiline: true, maxLength: "150", required: true },
            { name: 'legAddress', label: 'Юридический адрес', type: 'text', multiline: true, maxLength: "150", required: true },
            { name: 'email', label: 'Почта', type: 'text', multiline: true, maxLength: "150", required: true },
        ]
    }
    componentDidMount(){
        this.props.getAccessRegistration({
            username:"wdauser",
            password:"50w7d8a10#",
        }, 'DEFAULT_USER');
    }
    //onchanges
    onChangeStrings = event => this.setState({ ...this.state, [event.currentTarget.name]: event.currentTarget.value });
    onChangeOrgPhone = event => this.setState({ ...this.state, phone: event.currentTarget.value });
    //onChangeRespPhone = event => this.setState({ ...this.state, respPhone: event.currentTarget.value });
    onChangeCheckBox = event => this.setState({ ...this.state, twoStepVerif: event.value });
    //mark ups
    validateTextFields = (name, value, label, maxLength) => {
        if(
            name === "kpp" && value.toString().length < 9 || 
            name === "inn" && value.toString().length < 10) {
                return {
                    error: true,
                    helperText: `длина ${label} ${maxLength} символов`
                }
            }
        else return {
            error: false,
            helperText: ""
        };
    }
    markUpTextFields = (name, type, label, multiline, maxLength = "10", required) => (
        <TextField
            error={this.validateTextFields(name, this.state[name], label, maxLength).error}
            helperText={this.validateTextFields(name, this.state[name], label, maxLength).helperText}
            required={required}
            name={name}
            type={type}
            label={label}
            margin='normal'
            variant='outlined'
            value={this.state[name]}
            onChange={this.onChangeStrings}
            size='small'
            fullWidth
            multiline={multiline}
            inputProps={{
                maxLength: maxLength
            }}
            onInput={(e) => {
                if(type === "number") e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0, maxLength)
            }}
        />
    )
    //submit
    handleSubmit = () => this.props.RegistrationOrg(this.state);
    //
    render() {
        const { loading_user, showRegistrationForm, message } = this.props;
        return (
            <Paper className={classed.registration_organization_wrapper}>
                {!showRegistrationForm && <h1>Регистрация организации</h1>}
                {!showRegistrationForm && (
                    this.arr && this.arr.map(item => this.markUpTextFields(item.name, item.type, item.label, item.multiline, item.maxLength, item.required))
                )}
                {!showRegistrationForm && <InputMaskComponent value={this.state.phone} onChange={this.onChangeOrgPhone} variant='outlined' label='Телефон организации'/>}
                {/* {this.markUpFields('respName', 'ФИО ответственного за регистрацию', 'text')}
                {this.markUpFields('respEmail', 'Почта ответственного', 'text')}
                <InputMaskComponent value={this.state.respPhone} onChange={this.onChangeRespPhone} variant='outlined' label='Телефон ответственного'/> */}
                {!showRegistrationForm && <div className={classed.submit_btn}>
                    <DefaultButton loading={loading_user} callback={this.handleSubmit} text='зарегистрировать'/>
                </div>}
                {showRegistrationForm && <div>{message}</div>}
            </Paper>
        )
    }
}
const mapStateToProps = state => ({
    loading_user: state.UI.loading_user,
    showRegistrationForm: state.UI.showRegistrationForm,
    message: state.UI.message
})

export default connect(mapStateToProps, { RegistrationOrg, getAccessRegistration })(RegistrationOrganization);
