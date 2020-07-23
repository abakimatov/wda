import React, { Component } from 'react';
import PropTypes from 'prop-types';
//redux
import { connect } from 'react-redux';
import { checkRegKey, getAccessRegistration } from '@AppStore/Actions/User';
//components
import RegistrationContainer from './RegistrationContainer';
import IncorrectKey from './IncorrectKey';

class RegistrationCheckKey extends Component {
    async componentDidMount(){
        await this.props.getAccessRegistration({
            username:"wdauser",
            password:"50w7d8a10#",
        }, 'DEFAULT_USER');
        const key = window.location.pathname.split('/')[3];
        this.props.checkRegKey({key})
    }
    render(){
        const { isValidKey, loading_user } = this.props;
        return (
            <>
                {isValidKey
                    ? <RegistrationContainer/>
                    : <IncorrectKey loading_user={loading_user}/>}
            </>
        )
    }
}
RegistrationCheckKey.propTypes = {
    checkRegKey: PropTypes.func.isRequired,
    isValidKey: PropTypes.bool.isRequired,
    loading_user: PropTypes.bool,

}
const mapStateToProps = state => ({
    isValidKey: state.user.isValidKey,
    loading_user: state.UI.loading_user,
})

export default connect(mapStateToProps, { checkRegKey , getAccessRegistration})(RegistrationCheckKey);
