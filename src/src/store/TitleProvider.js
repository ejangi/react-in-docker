import React, { useState, createContext } from 'react';

export const TitleContext = createContext();

export function TitleProvider(props) {
    const [title, setTitle] = useState('World');

    return (
        <TitleContext.Provider value={{ title, setTitle }}>
            {props.children}
        </TitleContext.Provider>
    );
}