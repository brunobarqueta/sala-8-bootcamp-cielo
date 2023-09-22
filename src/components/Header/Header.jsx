import React, { useEffect, useState } from 'react';
import HeaderStyles from './Styles';

import SearchIcon from '@mui/icons-material/Search';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import RefreshIcon from '@mui/icons-material/Refresh';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useProductProvider } from '../../App';

const Header = () => {

  const [darkMode, toggleDarkMode] = useState(false);
  const [refreshTrigger, toggleRefreshTrigger] = useState(false);
  const { textFieldValue } = useProductProvider();

  return ( 
        <>
          <HeaderStyles>
            <ul className='header-container'>
              <li className='item-wrapper'>
                <div className='search-wrapper'>
                  <input
                    onChange={(e) => {
                      e.preventDefault();
                    }}
                    type='text'
                    placeholder='Procurar...'
                  />
                  <div 
                    className='icon-wrapper search-icon'
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
                  onClick={() => {toggleRefreshTrigger(!refreshTrigger)}}
                >
                  <DensityMediumIcon
                    className='icon-settings'
                  />
                </div>
                <div 
                  className='icon-wrapper'
                  onClick={() => {toggleRefreshTrigger(!refreshTrigger)}}
                >
                  <RefreshIcon
                    className='icon-settings'
                  />
                </div>
                  {darkMode ? 
                  <div 
                    className='icon-wrapper' 
                    onClick={() => {toggleDarkMode(!darkMode)}}
                  >
                    <DarkModeIcon
                      className='icon-settings'
                    /> 
                  </div>

                  : 
                  
                  <div 
                    className='icon-wrapper'
                    onClick={() => {toggleDarkMode(!darkMode)}}
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