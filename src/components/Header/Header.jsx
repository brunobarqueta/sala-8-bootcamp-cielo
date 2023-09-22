import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import HeaderStyles from './Styles';

import SearchIcon from '@mui/icons-material/Search';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import RefreshIcon from '@mui/icons-material/Refresh';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useProductProvider } from '../../App';
import { searchRequired } from '../../store/actions/search';

const Header = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') === null ? 'light' : localStorage.getItem('theme'));
  const searchRef = useRef(null);
	const dispatch = useDispatch();

  const [darkMode, toggleDarkMode] = useState(false);
  const [refreshTrigger, toggleRefreshTrigger] = useState(false);
  const { textFieldValue } = useProductProvider();
  
  const [cartValues, setCartValues] = useState(totalItems());
  
  function totalItems() {
    const items = JSON.parse(localStorage.getItem("myCart"));

    return items !== null ? items.length : 0;
    
  }
  
  function toggleTheme() {
    if(theme === 'light'){
      localStorage.setItem('theme', 'dark');
      setTheme("dark");
    } else {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  }

    return ( 
        <>
          <HeaderStyles>
            <ul className='header-container'>
              <li className='item-wrapper'>
                <div className='search-wrapper'>
                  <input
                    ref={searchRef}
                  />
                  <div 
                    className='icon-wrapper search-icon'
                    onClick={() => {
                      dispatch(searchRequired(searchRef.current.value, ''));
                    }}
                  >
                    <SearchIcon
                      className='icon-settings'
                    />
                  </div>
                </div>
              </li>
              <li className='item-wrapper'>
                <div 
                  className='icon-wrapper mobile'
                >
                  <DensityMediumIcon
                    className='icon-settings'
                  />
                </div>
                <div 
                  className='icon-wrapper'
                  onClick={() => {dispatch(searchRequired(''))}}
                >
                  <RefreshIcon
                    className='icon-settings'
                  />
                </div>
                  {theme === 'light' ? 
                  <div 
                    className='icon-wrapper' 
                    onClick={() => {toggleTheme()}}
                  >
                    <DarkModeIcon
                      className='icon-settings'
                    /> 
                  </div>

                  : 
                  
                  <div 
                    className='icon-wrapper'
                    onClick={() => {toggleTheme()}
                    }
                  >
                    <Brightness7Icon
                      className='icon-settings'
                    />
                  </div>
                  }
                  <div 
                    className='cart-wrapper'
                  >
                    <ShoppingCartIcon
                      className='icon-settings'
                    />
                      {textFieldValue > 0 && <span>{textFieldValue < 10 ? '0' + textFieldValue : textFieldValue}</span>}
                  </div>
              </li>
            </ul>
          </HeaderStyles>
        </>
     );
}
 
export default Header;