import React, { createContext, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { searchRequired } from './store/actions/search';
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global';
import { lightTheme, darkTheme } from './styles/themes';

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Grid from './components/Grid';
import SideBar from "./components/sidebar/SideBar";

const ProductContext = createContext();

export const useProductProvider = () => {
  return useContext(ProductContext);
};

const App = () => {
	return (
		<div className="app-container main-font">
			<Header/>
      <div className="flex">
          <SideBar />
          <Grid />
        </div>
			<Footer/>
		</div>
	);
};

export default App;
