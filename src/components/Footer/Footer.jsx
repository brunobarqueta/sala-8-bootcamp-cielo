import React from 'react';
import FooterStyles from './Styles';

const Footer = () => {

  const collaborators = ['Bruno Barqueta', 'Cledson Leite', 'Rafael Magalhães', 'Suzane Ferreira'];
    return ( 
        <>
          <FooterStyles>
            <footer className='footer-container'>
              {collaborators.map((value, index) => {
                
                return(
                  <React.Fragment key={'frag' + index}>
                    <span key={'name' + index}>{value}</span>
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