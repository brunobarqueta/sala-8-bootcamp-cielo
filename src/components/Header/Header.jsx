import React, { useEffect, useState } from 'react';
import HeaderStyles from './Styles';

import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {

  const [darkMode, toggleDarkMode] = useState(false);
  const [refreshTrigger, toggleRefreshTrigger] = useState(false);
  const testNum = 0;

  useEffect(() => {
    //Função
    console.log('teste');
  }, [refreshTrigger]);

    return ( 
        <>
          <HeaderStyles>
            <ul className='header-container'>
              <li className='item-wrapper'>
                  <input
                    onChange={(e) => {
                      e.preventDefault();
                    }}
                    type='text'
                    placeholder='Procurar...'
                  />
                  <div 
                    className='icon-wrapper'
                  >
                    <SearchIcon
                      className='icon-settings search-icon'
                    />
                  </div>
              </li>
              <li className='item-wrapper'>
                <div 
                  className='icon-wrapper'
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
                      {testNum > 0 && <span>{testNum < 10 ? '0' + testNum : testNum}</span>}
                  </div>
              </li>
            </ul>
          </HeaderStyles>
        </>
     );
}
 
export default Header;