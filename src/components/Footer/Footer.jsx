import React from 'react';
import FooterStyles from './Styles';

const Footer = () => {

  const collaborators = [
    {
      name: "Bruno Barqueta",
      link: "",
    },
    {
      name: "Cledson Leite",
      link: "https://www.linkedin.com/in/cledson-leite/",
    },
    {
      name: "Rafael Magalhães",
      link: "https://www.linkedin.com/in/rafaelvilaveras/",
    },
    {
      name: 'Suzane Ferreira',
      link: 'https://www.linkedin.com/in/suzaneferreirapinto/'
    }
  ];
    return ( 
        <>
          <FooterStyles>
            <footer className='footer-container'>
              {collaborators.map((value, index) => {
                
                return(
                  <React.Fragment key={'frag' + index}>
                    <a href={value.link} key={'name' + index}>{value.name}</a>
                    {(collaborators.length !== (index + 1)) &&
                      <span key={'dash' + index}> - </span>
                    }
                  </React.Fragment>
                );
              })}
            </footer>
          </FooterStyles>
        </>
    );
}
 
export default Footer;