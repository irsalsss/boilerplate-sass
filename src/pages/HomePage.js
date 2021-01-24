import React from 'react';
import './HomePage.scss';
import Sidebar from './Sidebar';

const HomePage = () => {
  return (
    <div className="page-home__container">
      <div className="page-home__box">
        <Sidebar />
      </div>
    </div>
  )
}

export default HomePage