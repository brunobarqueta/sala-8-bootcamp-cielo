import React from 'react';

import * as Styled from './styles'

const Pagination = ({page, setPage}) => {
    return (
      <Styled.Container>
        <Styled.Left
          onClick={() => {
            setPage(Number(page) - 1);
          }}
        />
        {page}
        <Styled.Right
          onClick={() => {
            setPage(Number(page) + 1);
          }}
        />
      </Styled.Container>
    );
}

export default Pagination;
