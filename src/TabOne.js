import { Component, Actions } from 'jumpsuit';
import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default Component({
    onSubmit(event){
        event.preventDefault();
        Actions.addToList(this.props.input)
    },
    render(){
        return(
        <div className="container">
            <TextField
            hintText="Be Original"
            errorText="This field is required"
            floatingLabelText="Title"
            /><br />
            <TextField
            hintText="Insert Image Url"
            errorText="This field is required"
            floatingLabelText="Image"
            /><br />
            <TextField
            hintText="Full Name Please"
            errorText="This field is required"
            floatingLabelText="Author"
            /><br />
            <SelectField
            floatingLabelText="Featured"
            >
                <MenuItem value={0} primaryText="True" />
                <MenuItem value={1} primaryText="False" />
            </SelectField>
        </div>
        )
    }
})