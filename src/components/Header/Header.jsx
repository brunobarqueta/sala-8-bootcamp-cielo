import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import HeaderStyles from './Styles';

import SearchIcon from '@mui/icons-material/Search';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import RefreshIcon from '@mui/icons-material/Refresh';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { searchRequired } from '../../store/actions/search';


const Header = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') === null ? 'light' : localStorage.getItem('theme'));
  const searchRef = useRef(null);
	const dispatch = useDispatch();

  const { textFieldValue } = useProductProvider();
  
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
                      {cartValues > 0 && <span>{cartValues < 10 ? '0' + cartValues : cartValues}</span>}
                  </div>
              </li>
            </ul>
          </HeaderStyles>
        </>
     );
}
 
export default Header;