import React, { useContext } from 'react';
import { TitleContext } from '../store/TitleProvider';

function Debug() {
    const { title } = useContext(TitleContext);

    return (
        <div className="App-debug">
            You are currently saying: {title}
        </div>
    );
}

export default Debug;