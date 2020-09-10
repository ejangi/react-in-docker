import React from 'react';
import { useStateValue } from '../store/StateProvider';

function Debug() {
    const [{ title }, dispatch] = useStateValue();

    return (
        <div className="App-debug">
            You are currently saying: {title}
        </div>
    );
}

export default Debug;