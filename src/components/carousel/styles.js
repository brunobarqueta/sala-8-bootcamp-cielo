import styled from 'styled-components';

export const CarouselStyle = styled.div`
  .react-multiple-carousel__arrow{
    background: #B7E8D3;
    &:hover{
      background: #206446;
    }
  }

  .custom-dot-list-style {
    text-align: center; 
    padding: 10px 0; 
  }

  .react-multi-carousel-dot button{
    background-color: #B7E8D3; 
    border-radius: 50%; 
    display: inline-block;
    margin: 0 5px;
    cursor: pointer; 
    width: 10px;
    height: 10px;
    border-color: white;
  }

  .react-multi-carousel-dot--active button{
    background-color: #206446; 
  }
  
  @media (max-width: 464px) {
    .react-multi-carousel-dot button{
      width: 20px !important;
      height: 20px !important;
    }
  }
`

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  gap: 16px;
  margin-bottom: 12px;

  .value-rating{
    display: flex;
    align-items: center;
    gap: 24px;
  }
`;

export default CarouselStyle;