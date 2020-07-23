import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const LazyRoute = ({component: Component, authenticated, Fallback}) => {
    return (
        <Route
            render={(props) => authenticated === false
                ? <Redirect to='/login'/>
                :   <React.Suspense 
                        fallback={<Fallback/>}>
                        <Component {...props} />
                    </React.Suspense>}
        />
        ) 
    }
const mapStateToProps = state => ({
    authenticated: state.user.authenticated
})

export default connect(mapStateToProps, {})(LazyRoute);