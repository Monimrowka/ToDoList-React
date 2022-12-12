import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Component/Navbar';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container-nav'>
      <h1 className="todos-heading">To-dos in Christmas week</h1>
      <Navbar navItem1="25. Dec" navItem2="26. Dec" navItem3="27. Dec" navItem4="28. Dec" navItem5="29. Dec" navItem6="30. Dec" />
    </div>
   </React.StrictMode>
);

