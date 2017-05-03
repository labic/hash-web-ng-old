import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

const App = () => (
  <MuiThemeProvider>
    <AppBar
      title="Hash Web"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
     />
  </MuiThemeProvider>
);

export default App;