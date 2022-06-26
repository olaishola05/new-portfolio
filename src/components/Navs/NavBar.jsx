/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Menu from '../../Icons/Icons';

const NavBar = ({ links }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <h1>
        {' '}
        <a href="/" className="brandName">
          <span>Oladipupo</span>
          {' '}
          Ishola
        </a>
      </h1>
      <button
        type="button"
        className="hamburger"
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        <Menu />

      </button>
      <div className={isNavExpanded ? 'navigationMenu expanded' : ' navigationMenu'}>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                style={({ isActive }) => ({
                  color: isActive ? '#65D493' : '',
                  borderBottom: isActive ? '1px solid #65D493' : '',
                  transform: isActive ? 'translateX(0)' : 'translateX(-10%)',
                })}
                onClick={() => setIsNavExpanded(!isNavExpanded)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })).isRequired,
};

export default NavBar;