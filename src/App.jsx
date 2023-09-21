import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { searchRequired } from './store/actions/search'

import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

const App = () => {
	const {load, error, list} = useSelector(state => state.search)
	const dispatch = useDispatch()
	console.log('load: ' + load)
	console.log('error: ' + error)
	console.log('list: ' + list)
	useEffect(() => {
		dispatch(searchRequired('sho', 2));
	}, [])
	return (
		<>
			<NavBar />
			<SideBar />
		</>
	);
};

export default App;
