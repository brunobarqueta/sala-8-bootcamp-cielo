import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Collapse, Skeleton } from "@mui/material";
import { searchRequired } from '../../store/actions/search';

import * as Styled from './styles'
import GridItem from './components/GridItem';
import Pagination from './components/Pagination';

const Grid = () => {
    const [page, setPage] = useState(1)
    const { load, error, list } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false)
    const [idx, setIdx] = useState(0)

    const handleModal = (index) => {
        setIdx(Number(index))
        setOpen(!open)
    }
    useEffect(() => {
        const pagination = page <= 0 ? 1 : page
      dispatch(searchRequired("", pagination));
    }, [page]);
    return (
      <Styled.Container>
        <Collapse timeout={300} in={!!error} orientation="horizontal">
          <Alert severity="error" color="error" variant="filled">
            {error}
          </Alert>
        </Collapse>
        {load && (
          <Styled.Grid>
            {Array.from([1,2,3,4,5,6,7,8,9]).map((product, index) => (
              <Skeleton key={index} variant="rounded" width={223} height={216} />
            ))}
          </Styled.Grid>
        )}
        {list && (
          <>
            <Styled.Grid>
              {list.map((product, index) => (
                <GridItem key={index} product={product} handle={() => handleModal(index)} />
              ))}
            </Styled.Grid>
            <Pagination page={page <= 0 ? 1 : page} setPage={setPage} />
            {open && <p>{idx}</p>}
          </>
        )}
      </Styled.Container>
    );
}

export default Grid;
