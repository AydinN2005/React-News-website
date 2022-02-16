import React, { useState } from 'react';
import { GetleftsidebarData } from '../_api/GetleftsidebarData';
import './Component_Styles/Main.css'
const Main = () => {
    const [article , setArticle] = useState();
    React.useEffect(()=>{
        GetleftsidebarData((isOk , data)=>{
            if(!isOk)
            alert("We can't found this article ! may it deleted .")
            else
            setArticle(data) 
        })
    } , [])
    return (
        <div className='maincontainer'>
            
        </div>
    );
};

export default Main;