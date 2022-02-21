import { render } from '@testing-library/react';
import React from 'react';
import { Routes , Route , BrowserRouter} from 'react-router-dom';
import Header from './Component/Header';
import LeftSideBar from './Component/LeftSideBar';
import Main from './Component/Main';
import './style.css'
const App = () => {
    return (
        <div>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<div><Header/><div style={{display:'flex'}}><Main/></div></div>}/>
          </Routes>
          </BrowserRouter>
        </div>
    );
};

export default App;