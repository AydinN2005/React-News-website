import React from 'react';
import './Component_Styles/Header.css'
import { AiOutlineMenu } from "react-icons/ai";
import  {slide as Menu} from 'react-burger-menu'
import LeftSideBar from './LeftSideBar'
const Header = () => {
    return (
        <div className='headercontainer'>
            <div className='humburgercontainer'>
                <AiOutlineMenu className='menu' onClick={menuhandler} />
                <Menu className='menuhumb' width={'max-content'}  disableOverlayClick>
                <LeftSideBar/>
                </Menu>
            </div>
            <h1 className='headertitle h1--face font--size--xlg'>React News</h1>
            <h3 className='h3--face font--size--md headerdesc'>We are here for say latest news about <span className='font--size--xlg React-js'>React.js</span>😉</h3>
        </div>
    );
};

const menuhandler = (e) => {
    const element = document.getElementById('h1');
    if (element.attributes.toggle.value === "close") {
        element.style.display = 'block'
        element.style.animationDuration = "1s";
        element.style.animationFillMode = "forwards";
        element.attributes.toggle.value = "open";
        console.log("close")
    }
    else {
        element.style.display = 'none'
        element.attributes.toggle.value = "close"
        console.log('open')
    }
}
export default Header;