import React from 'react';
import { Render } from 'jumpsuit';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Auth from './Auth';
import { initializeFirebase } from './firebase';
import { globalState } from './state';
import 'bootstrap/dist/css/bootstrap.css';

injectTapEventPlugin();
initializeFirebase();

Render(
  globalState,
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Auth />
  </MuiThemeProvider>
);