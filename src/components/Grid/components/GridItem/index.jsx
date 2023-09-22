import React from 'react';

import * as Styled from './styles'

const GridItem = ({product, handle}) => {
    const handleTitle = (name) => {
        if(name.length >= 25) return `${name.substring(0, 24)}...`
        return name
    }
    return (
      <Styled.Container onClick={handle}>
        <Styled.Img src={product.avatar} alt={product.name} />
        <Styled.Title>
          <Styled.Text>{handleTitle(product.name)}</Styled.Text>
        </Styled.Title>
      </Styled.Container>
    );
}

export default GridItem;
