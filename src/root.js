import React from 'react';
import { Render, State } from 'jumpsuit';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
const appState = State({
  initial: {
    test: 'test works'
  }
})
const globalState = {
  appState: appState
}

Render(
  globalState,
  <MuiThemeProvider muiTheme={getMuiTheme()}>
     <App />
  </MuiThemeProvider>
);