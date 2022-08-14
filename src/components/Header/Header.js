import React from 'react';
import './Header.css'
import LoggedHeader from "../LoggedHeader/LoggedHeader";
import UnloggedHeader from "../UnloggedHeader/UnloggedHeader";

function Header() {

    const isLogged = false;

    return (
        isLogged ? <LoggedHeader/> : <UnloggedHeader/>
    );
}

export default Header;
