import React from 'react';
import { useStateValue } from '../store/StateProvider';

function Header() {
    const [{ title }, dispatch] = useStateValue();

    return (
        <h1>{title}</h1>
    );
}

export default Header;