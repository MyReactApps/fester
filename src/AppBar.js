import React from 'react';
import { Component, Actions} from 'jumpsuit';
import AppBar  from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

export default Component( {
  render() {
    return (
      <div>
        <AppBar
          title="my Tester"
          iconElementLeft={
                <IconMenu 
                    iconButtonElement={ <IconButton><MoreVertIcon /></IconButton> }
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                    <MenuItem primaryText="Home" />
                    <a
                    onClick={() => Actions.googleLogout()}>
                    <MenuItem primaryText="Sign out"/>
                    </a>
                </IconMenu>
         }
        />
      </div>
    );
  }
})



