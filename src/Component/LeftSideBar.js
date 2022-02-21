import React, { useState } from 'react';
import { GetleftsidebarData } from '../_api/GetleftsidebarData';
import { Link, Outlet } from 'react-router-dom';
import './Component_Styles/LeftSideBar.css'
var totalId = [];
const LeftSideBar = (props) => {
        const [links, setLinks] = useState([]);
        React.useEffect(() => {
                GetleftsidebarData((isOk, data) => {
                        if (!isOk) {
                                alert("Process is not success")
                        }
                        else {
                                setLinks(data)
                                totalId = data.map((item) => {
                                        return item.id;
                                })
                        }
                })
        }, [])

        return (
                <div className='containerleftsidebar'>
                        {links.map((item, index) => {
                                return <Link onClick={LinkHandler} key={index} to='/' className='link--face font--size--md links' >
                                        {item.description}
                                </Link>
                        })}
                </div >
        );
};
// console.log(totalId)
const LinkHandler = (e)=>{
        const text = e.target.innerText;
        console.log(text)
}
export default LeftSideBar;