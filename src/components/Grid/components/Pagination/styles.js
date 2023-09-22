import styled from "styled-components";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 2.5rem;
    font-size: 1.5rem;
    color: #636363;
`
export const Left = styled(ChevronLeftIcon)`
  font-size: 1rem;
  margin: 0 1rem;
  &:hover {
    color: #206446;
  }
`;
export const Right = styled(ChevronRightIcon)`
  font-size: 1rem;
  margin: 0 1rem;
  &:hover {
    color: #206446;
  }
`;