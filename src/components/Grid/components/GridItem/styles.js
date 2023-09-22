import styled from "styled-components";

export const Container = styled.div`
   position: relative;
`
export const Img = styled.img`
  object-fit: cover;
  width: 14rem;
  height: 13.5rem;
  border-radius: 1.5rem;
`;
export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0.3rem;
  z-index: 10;
  width: 100%;
  height: 2rem;
  background-color: #fff;
  border-bottom: #c4c4c4 solid 1px;
  border-left: #c4c4c4 solid 1px;
  border-right: #c4c4c4 solid 1px;
  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
`;

export const Text = styled.span`
    font-size: 14px;
    font-weight: 400;
`