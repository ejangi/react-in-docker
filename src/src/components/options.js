import React, { useContext } from 'react';
import { TitleContext } from '../store/TitleProvider';

function Options() {
    const { title, setTitle } = useContext(TitleContext);

    function sayJames() {
        setTitle('James');
    }

    function sayWorld() {
        setTitle('World');
    }

    return (
        <div>
          <button className="App-link" onClick={sayJames}>
            Say James
          </button>
          <button className="App-link" onClick={sayWorld}>
            Say World
          </button>
        </div>
    );
}

export default Options;