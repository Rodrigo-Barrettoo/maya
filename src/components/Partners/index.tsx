import React from 'react';

import LogoMcmp from '../../assets/LogoMcmp.png';
import LogoRto from '../../assets/LogoRto.png';
import LogoDifatto from '../../assets/LogoDifatto.png';

import { Container, Content, Div, Image } from './styles';

const Partners: React.FC = () => {
  return (
    <Container id="patners" >
      <h1>Parceiros</h1>

      <Content>
        <Div>
          <Image src={LogoMcmp} alt="Logo MCMP Engenharia" />
        </Div>

        <Div>
          <Image src={LogoRto} alt="Logo MCMP Engenharia" />
        </Div>

        <Div>
          <Image src={LogoDifatto} alt="Logo MCMP Engenharia" />
        </Div>
      </Content>
    </Container>
  );
}

export default Partners;