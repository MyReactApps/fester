import AppBar  from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import React from 'react';
import { Component } from 'jumpsuit';

export default Component( {
  render() {
    return (
      <div>
        <AppBar
          title="Title"
          iconElementLeft={
                <IconMenu 
                    iconButtonElement={ <IconButton><MoreVertIcon /></IconButton> }
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                    <MenuItem primaryText="Home" />
                    <MenuItem primaryText="Sign In" />
                    <MenuItem primaryText="Sign out" />
                </IconMenu>
         }
        />
      </div>
    );
  }
})



