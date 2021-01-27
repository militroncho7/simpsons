import React from 'react';
import Logo from './Logo';

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper yellow">
                {/* <a href="#!" className="brand-logo">{titulo}</a> */}
                <Logo />
            </div>
        </nav>
    );
}
 
export default Header;