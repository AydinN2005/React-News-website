import React, { useState } from 'react';
import './Component_Styles/LeftSideBar.css'
import { Link } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.production.min';
import { GetleftsidebarData } from '../_api/GetleftsidebarData';
import axios from 'axios';
const LeftSideBar = () => {
    const [links , setLinks] = useState([]);
    React.useEffect(()=>{
        GetleftsidebarData((isOk , data)=>{
            if(!isOk){
                alert("Process is not success")
            }
            else{
                setLinks(data)
            }
        })
    } , [])
    return (
        <div className='containerleftsidebar'>
         {links.map((item , index)=>{
             return <Link key={index} to='/' className='link--face font--size--md links'> 
             {item.description}
            </Link>
         })}
        </div>
    );
};

export default LeftSideBar;