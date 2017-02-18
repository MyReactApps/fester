import { Component, Actions} from 'jumpsuit';
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Google from './GoogleButton'

export default Component ({
    render(){
        return(
            <div className="container">
                <a
                    onClick={() => Actions.googleLogin()}>
                    <RaisedButton
                        label="Sign in"
                        labelPosition="before"
                        primary={true}
                        icon={<Google />}
                    />
                </a>
            </div>
        )
    }
})