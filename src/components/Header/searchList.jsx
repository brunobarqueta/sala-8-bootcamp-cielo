import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchRequired } from '../../store/actions/search';

const SearchList = ({...props}) => {

    const {load, error, list} = useSelector(state => state.products);
	const dispatch = useDispatch();
    const [time, turnTime] = useState(false);

    var timer;
    
    async function handleItemSearch() {
        
        clearTimeout(timer);

        turnTime(true);

        timer = setTimeout(() => {
            dispatch(searchRequired(props.searchValue));
            turnTime(false);
        }, 800);

    }

    useEffect(() => {
        props.searchValue.length >= 3 && handleItemSearch();

    }, [props.searchValue]);

    return ( 
      <>
        <div className='list-container'>
          {props.searchValue === '' && <span>...</span>}
          {props.searchValue.length >=3 && list.length === 0 && !time && <span> Nenhum item correspondente...</span>}
          {props.searchValue.length >=3 && list && list.map((values, index) => {

            return(
                <div className='items-wrapper' key={'items-wrapper' + index}>
                    <span onClick={() => {setSearchValue(values.name)}}>{values.name}</span>
                </div>
            );
          })}
        </div>
      </>
    );
}
 
export default SearchList;