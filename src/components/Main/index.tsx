import React from 'react';

import Partnes from '../Partners/index';

import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <h1>Seu Parceiro Digital</h1>
      <p>Vamos construir juntos.</p>
      <small>Especialidade em sites para micro-empresas</small>

      <Partnes />
        
    </Container>
  );
}

export default Main;