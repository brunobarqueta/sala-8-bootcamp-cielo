import styled from "styled-components";

//-webkit-clip-path -> removes side shadow from box-shadow;

const HeaderStyles = styled.header `

  .header-container {
    width: 100%;
    height: 6rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 1rem;
    box-shadow: 0 1px 5px black;
    -webkit-clip-path: inset(-5px 0px -5px 0px);
    position: sticky;

  }

  .item-wrapper {
    min-width: 10rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  .item-wrapper input {
    width: 19rem;
    height: 2rem;
    border: 1px solid #C4C4C4;
    border-radius: 0.625rem;
    padding: 0.5rem 2rem 0.5rem 0.5rem;
    box-sizing: border-box;
    outline: none;
  }

  .search-wrapper {
    width: 100%;
    display: flex;
    position: relative;
  }

  .icon-wrapper {
    display: flex;
  }

  .icon-settings {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }

  .search-icon {
    width: 1.25rm;
    height: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    right: 0.35rem;
  }

  .cart-wrapper {
    display: flex;
    position: relative;
  }

  .cart-wrapper span {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 0.75rem;
    background-color: red;
    border-radius: 10px;
    position: absolute;
    right: -0.35rem;
    top: -0.65rem;
  }

  .mobile {
    display: none;
  }

  @media (max-width: 464px) {
    
    .header-container {
      height: 6.5rem;
      box-shadow: 0 2px 5px black;
      flex-direction: column-reverse;
      justify-content: space-around;
    }

    .item-wrapper {
      min-width: 0rem;
      justify-content: space-between;
    }

    .item-wrapper input {
      width: 100%;
      min-width: none;
    }

    .search-wrapper {
      width: 85%;
      margin: auto;
    }

    .mobile {
      display: flex;
    }

  }

`;

export default HeaderStyles;