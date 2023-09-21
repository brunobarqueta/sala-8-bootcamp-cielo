import styled from "styled-components";

//-webkit-clip-path -> removes side shadow from box-shadow;

const FooterStyles = styled.footer `

  .footer-container {
    width: 100%;
    height: 6rem;
    background-color: #C4C4C4;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    gap: 1rem;
  }

  @media (max-width: 834px) {
   
    .footer-container {
      height: 2.625rem;
    }

  }

  @media (max-width: 650px) {
   
    .footer-container {
      height: 2.625rem;
      font-size: 0.75rem;
      gap: 0.5rem;
    }

  }

`;

export default FooterStyles;