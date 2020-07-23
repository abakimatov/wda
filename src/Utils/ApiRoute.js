import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ApiRoute = ({component: Component, authenticated}) => {
    return (
        <Route
            render={(props) => authenticated === false
                ? <Redirect to='/login'/>
                : <Component {...props}/>}
        />
        ) 
    }
const mapStateToProps = state => ({
    authenticated: state.user.authenticated
})

export default connect(mapStateToProps, {})(ApiRoute); 