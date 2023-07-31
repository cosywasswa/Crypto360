/* eslint-disable */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignal, faBars, faMicrophone, faCog, faGear,
} from '@fortawesome/free-solid-svg-icons';



const NavBar = () => (
  <header>
    <div className="head-container">
      <FontAwesomeIcon icon={faBars} className="bars" />
      <NavLink to="/" className="word-link">
      <h3 className='head-h3'>Crypto currency</h3>
      </NavLink>
      <div className="icons-last">
        <FontAwesomeIcon icon={faMicrophone} className='mic' />
        <FontAwesomeIcon icon={faCog} className='gear'/>
      </div>
    </div>
  </header>
);

export default NavBar;
