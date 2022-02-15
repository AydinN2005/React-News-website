import React from 'react';
import './Component_Styles/LeftSideBar.css'
import { Link } from 'react-router-dom';
const LeftSideBar = () => {
    return (
        <div className='containerleftsidebar'>
            <Link to="/" className='link--face font--size--md links'>Why we should use React for website's client view ?</Link>
            <Link to="/" className='link--face font--size--md links'>Why we should use React for website's client view ?</Link>
            <Link to="/" className='link--face font--size--md links'>Why we should use React for website's client view ?</Link>
            <Link to="/" className='link--face font--size--md links'>Why we should use React for website's client view ?</Link>
            <Link to="/" className='link--face font--size--md links'>Why we should use React for website's client view ?</Link>
        </div>
    );
};

export default LeftSideBar;