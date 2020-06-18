import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaWhatsappSquare } from 'react-icons/fa';

import { Container, Content } from './styles';

const Footer: React.FC = () => {
  return (
    <Container id="contact" >
      <Content>
        <h1>Contato</h1>

        <div>
          <a href="http:maito:rodrigonarrettoo@gmail.com" target="_blank" rel="noopener noreferrer">
            <MdEmail size={24} />
            rodrigonarrettoo@gmail.com
          </a>
        </div>
        <div>
          <a href="https://api.whatsapp.com/send?phone=5519996704805&amp;text=Olá,%20estou%20interessado%20em%20saber%20mais%20sobre%20os%20sites." target="_blank" rel="noopener noreferrer">
            <FaWhatsappSquare size={24} />
            (19) 99670-4805
          </a>
        </div>

        <footer>
          <p>© 2020 Maya Software</p>
          <p>Feito com ❤ por Rodrigo M. Barreto</p>
        </footer>
      </Content>
    </Container>
  );
}

export default Footer;