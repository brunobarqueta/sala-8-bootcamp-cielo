import React, { useEffect, useRef, useState } from 'react';
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
  const [searchTrigger, toggleSearchTrigger] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const searchRef = useRef(null);
  
  const [cartValues, setCartValues] = useState(totalItems());
  
  function totalItems() {
    const items = JSON.parse(localStorage.getItem("myCart"));

    console.log(items?.length);

    return items !== null ? items.length : 0;
    
  }

  useEffect(() => {
    //Função
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
                { searchTrigger && 
                  <div className='list-bg-shadow' 
                    onClick={() => {toggleSearchTrigger(false)}}
                  />}
                <div className='search-wrapper'>
                  <input
                    ref={searchRef}
                    onChange={(e) => {
                      e.preventDefault();
                      setSearchValue(e.target.value);
                    }}
                    value={searchValue}
                    onClick={() => {toggleSearchTrigger(true)}}
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
                  {searchTrigger && 
                    <SearchList
                      searchValue={searchValue}
                      setSearchValue={setSearchValue}
                    />
                  }
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
                      {cartValues > 0 && <span>{cartValues < 10 ? '0' + cartValues : cartValues}</span>}
                  </div>
              </li>
            </ul>
          </HeaderStyles>
        </>
     );
}
 
export default Header;