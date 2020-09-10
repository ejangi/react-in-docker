import React from 'react';
import { useStateValue } from '../store/StateProvider';

function Options() {
    const [{ title }, dispatch] = useStateValue();

    function sayJames() {
        dispatch({
            type: 'CHANGE_TITLE',
            title: 'Hello James',
        });
    }

    function sayWorld() {
        dispatch({
            type: 'CHANGE_TITLE',
            title: 'Hello World',
        });
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