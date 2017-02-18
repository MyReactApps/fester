import React from 'react'
import { Component} from 'jumpsuit';
import App from './App';
import Login from './Login';

export default Component({
    render(){
        var {user} = this.props
        return user ?  <App /> : <Login />
    }
},(state) => {
    return {
        user: state.appState.user
    }
})