import React from 'react'
import ReactDOM from 'react-dom'
import * as Colors from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    textColor: Colors.white,
    primary1Color: '#545454',
    fontSize: "15px",
  },
  appBar: {
    height: 40,
  },
});
const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppBar title="Clipper" showMenuIconButton={false} style={{textAlign: "center"}}>
      </AppBar>
  </MuiThemeProvider>
);

export default App;

