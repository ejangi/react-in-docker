import React from 'react';
import './App.css';
import { ContextProvider } from './store/state';
import Header from './components/Header';
import Options from './components/Options';
import Debug from './components/Debug';

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <header className="App-header">
          <Header />
          <Options />
          <Debug />
        </header>
      </div>
    </ContextProvider>
  );
}

export default App;
