import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom'

// The Todo Container Component

import { LoginContainer } from './containers/auth/login'
import { RegisterContainer } from './containers/auth/register'


// The Routing Component providing all the routing Configuration

const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>

                {/* It's setup at the default index route */}
                <Redirect exact path="/" to='/login' />
                <Route path="/login" component={LoginContainer} />
                <Route path="/register" component={RegisterContainer} />

            </Switch>
        </BrowserRouter>
    )
}

export { Routes }