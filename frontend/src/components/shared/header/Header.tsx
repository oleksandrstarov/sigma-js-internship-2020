import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SearchIcon from '@material-ui/icons/Search';
import { clearStorage } from '../../../services/localStorageService';
import './Header.scss';
import logo from './logo.png';

const Header: React.FC = () => {
  const [menuClass, setMenuClass] = useState('');

  const pathImage = '/images/profiles/';
  const iconName = 'icon_0.png';

  const toggleMenu = () => {
    setMenuClass(Boolean(menuClass) ? '' : 'dropdown-menu-active');
  };

  return (
    <header>
      <div className="wrapper">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <nav>
          <Link to="/search">
            <SearchIcon style={{ color: '#fff' }} />
            <div>Search</div>
          </Link>
          <Link to="/chat">
            <MailOutlineIcon style={{ color: '#fff' }} />
          </Link>
          <img onClick={toggleMenu} src={`${pathImage}${iconName}`} alt="profile" className="logo" />
          <Box boxShadow={2} className={`dropdown-menu ${menuClass}`}>
            <Link to="/settings">Settings</Link>
            <Link to="/login" onClick={clearStorage}>
              Log Out
            </Link>
          </Box>
        </nav>
      </div>
    </header>
  );
};

export default Header;
