import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//redux
import { connect } from 'react-redux';
import { getAccessRegistration } from '@AppStore/Actions/User';
import { setLoginType } from '@AppStore/Actions/Ui.types'; 
//material ui stuff
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
//components
import { DefaultButton } from '../../Utils/Buttons';
import InputMaskComponent from '@Templates/InputMaskComponentLogin';
//css
import classed from '../../css/Login.module.css';

const LoginContainer = ({getAccessRegistration, loading_user, setLoginType, isMask = '0', type}) => {
    useEffect(() => {
        document.title = 'Вход' ;
    }, [])
    const checkLoginType = async () => {
        await getAccessRegistration({
            username:"wdauser",
            password:"50w7d8a10#",
        }, 'DEFAULT_USER');
        setLoginType();
    }
    useEffect(() => {
        checkLoginType();
    }, [])
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const onChangeUsername = e => setUsername(e.currentTarget.value.replace(/[+]/g, "").replace(/-/g, ""));
    const onChangePassword = e => setPassword(e.currentTarget.value);
    const handleSubmit = () => getAccessRegistration({username, password}, 'CURRENT_USER');
    const handlePressEnter = e => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }
    const beforeMaskedValueChange = (newState, oldState, userInput) => {
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
    return (
        <div className={classed.login_wrapper} onKeyPress={handlePressEnter}>
            <Paper className={classed.paper}>
                <h1>Вход</h1>
                <form className={classed.form}>
                    {isMask === '0' && <InputMaskComponent 
                        onChange={onChangeUsername} 
                        value={username} 
                        helperText='Номер телефона в формате "+7-XXX-XXX-XX-XX'
                        beforeMaskedValueChange={beforeMaskedValueChange}
                    />}
                    {isMask === '1' && 
                        <TextField
                            autoComplete="true"
                            name='username'
                            margin='normal'
                            label='Логин'
                            variant='outlined'
                            autoFocus
                            value={username}
                            onChange={onChangeUsername}
                        />}
                    <TextField
                        type='password'
                        name='password'
                        margin='normal'
                        label='Пароль'
                        variant='outlined'
                        value={password}
                        onChange={onChangePassword}
                    />
                    {type === 'access' &&
                        <TextField
                            type='text'
                            name='password'
                            margin='normal'
                            label='Код подтверждения'
                            variant='outlined'
                            value={password}
                            onChange={onChangePassword}
                        />} 
                    <DefaultButton loading={loading_user} callback={handleSubmit} text='войти'/>
                </form>
            </Paper>
        </div>
    )
}
LoginContainer.propTypes = {
    getAccessRegistration: PropTypes.func.isRequired,
    loading_user: PropTypes.bool.isRequired,
    isMask: PropTypes.string.isRequired,
}
const mapStateToProps = state => ({
    loading_user: state.UI.loading_user,
    isMask: state.UI.isMask,
})

export default connect(mapStateToProps, { getAccessRegistration, setLoginType })(LoginContainer);
