import React from 'react';
import './Component_Styles/Header.css'
const Header = () => {
    return (
        <div className='headercontainer'>
            <h1 className='headertitle h1--face font--size--xlg'>React News</h1>
            <h3 className='h3--face font--size--md headerdesc'>We are here for say latest news about <span className='font--size--xlg React-js'>React.js</span>😉</h3>
        </div>
    );
};

export default Header;