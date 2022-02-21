import React, { useState } from 'react';
import { GetArticleById } from '../_api/GetArticleById'
import './Component_Styles/Main.css'

const Main = () => {
    const [article, setArticle] = useState([]);
    React.useEffect(() => {
        GetArticleById((isOk, data) => {
            if (!isOk)
                alert(data)
            else
                setArticle(data)
                console.log(data)
        })
    }, [])
    return (
        <div className='maincontainer'>
            {console.log(article)}
            {article.map((item, index) => {
                return <p className='articletext font--size--md' key={index}>{item.article}</p>
            })}
        </div>
    );
};

export default Main;