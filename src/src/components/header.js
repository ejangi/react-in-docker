import React, { useContext } from 'react';
import { TitleContext } from '../store/TitleProvider';

function Header() {
    const { title, setTitle } = useContext(TitleContext);

    return (
        <h1>Hello {title}</h1>
    );
}

export default Header;