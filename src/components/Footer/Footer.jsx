import React from 'react';
import FooterStyles from './Styles';

const Footer = () => {

  const collaborators = ['Bruno Barqueta', 'Cledson Leite', 'Rafael Magalhães', 'Suzane Ferreira'];
  console.log(collaborators);
    return ( 
        <>
          <FooterStyles>
            <footer className='footer-container'>
              {collaborators.map((value, index) => {
                
                return(
                  <>
                    <span>{value}</span>
                    {(collaborators.length !== (index + 1)) &&
                      <span> - </span>
                    }
                  </>
                );
              })}
            </footer>
          </FooterStyles>
        </>
    );
}
 
export default Footer;