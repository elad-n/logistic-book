import React from 'react';
import AppContainer from './components/AppContainer';
import './typography.scss';

const headerStyle = {
    "height": '60px',
    "backgroundColor": "dodgerblue",
    "color": "white",
    "padding": "10px 30px",
    "fontSize": "18px",
    "fontWeight": "700",
    "textTransform": "touppercase"
}

function App() {
  return (
    <div className="App">
      <header style={headerStyle} className="App-header d-flex align-center"><div>
          Welcome
      </div></header>
      <AppContainer />
    </div>
  );
}

export default App;
