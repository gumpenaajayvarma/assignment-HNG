import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import AppBanner from './components/AppBanner';
import Routes from './web/routes'
import './App.css';

function App() {
  return (
    <div className="App">
      <AppBanner
        appName={'health & glow'}
        isAlwaysTop={true}
      />
      <div className='app-container'>
        <Routes />
      </div>
    </div>
  );
}

export default App;
