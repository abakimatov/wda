import React, { Component } from 'react';
//material ui
import Paper from '@material-ui/core/Paper';
//css
import classed from '../../css/Registration.module.css';

export class RegistrationSelf extends Component {
    render() {
        return (
            <div className={classed.registration_wrapper}>
                <Paper className={classed.paper}>
                    <h1>Регистрация</h1>
                    <div className={classed.form}>

                    </div>
                </Paper>
            </div>
        )
    }
}

export default RegistrationSelf;
