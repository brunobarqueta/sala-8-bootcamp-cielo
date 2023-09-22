import React, { useEffect, useState } from 'react';
import HeaderStyles from './Styles';

import SearchIcon from '@mui/icons-material/Search';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import RefreshIcon from '@mui/icons-material/Refresh';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchList from './searchList';

const Header = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') === null ? 'light' : localStorage.getItem('theme'));
  const [refreshTrigger, toggleRefreshTrigger] = useState(false);
  const testNum = 0;

  console.log(theme);

  useEffect(() => {
    //Função
    // console.log('teste');
  }, [refreshTrigger]);

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
                  <SearchList/>
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
                      {testNum > 0 && <span>{testNum < 10 ? '0' + testNum : testNum}</span>}
                  </div>
              </li>
            </ul>
          </HeaderStyles>
        </>
     );
}
 
export default Header;