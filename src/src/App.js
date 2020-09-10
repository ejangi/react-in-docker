import React from 'react';
import './App.css';
import reducer, { initialState } from './store/reducer';
import { StateProvider } from './store/StateProvider';
import Header from './components/header';
import Options from './components/options';
import Debug from './components/debug';

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="App">
        <header className="App-header">
          <Header />
          <Options />
          <Debug />
        </header>
      </div>
    </StateProvider>
  );
}

export default App;
