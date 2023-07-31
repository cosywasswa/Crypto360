import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft, faMicrophone, faCog,
} from '@fortawesome/free-solid-svg-icons';

const DetailsNav = () => (
  <header data-testid="id-header">
    <div className="head-container">
      <div className="nav-left">
        <NavLink to="/" className="word-link">
          <FontAwesomeIcon icon={faChevronLeft} className="bars" />
        </NavLink>
        <NavLink to="/" className="word-link">
          <h3 className="head-h3">STATS</h3>
        </NavLink>
      </div>
      <div className="icons-last">
        <FontAwesomeIcon icon={faMicrophone} className="mic" />
        <FontAwesomeIcon icon={faCog} className="gear" />
      </div>
    </div>
  </header>
);

export default DetailsNav;
