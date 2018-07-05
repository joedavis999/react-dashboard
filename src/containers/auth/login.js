import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux'
// import { PropTypes } from 'prop-types'


export class LoginContainer extends Component {

    render() {
        return (
            <div>
                <input type="text" placeholder='User Name' />
                <input type="password" placeholder='Password' />
                {/* <button onClick= login>Login</button> */}
            </div>
        );
    }

}