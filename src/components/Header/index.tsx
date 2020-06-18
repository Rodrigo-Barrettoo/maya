import React from 'react';
import { MdReorder } from 'react-icons/md';

import Logo from '../../assets/LogoMaya.png';

import { Container, Headers, Image, Toggle, Nav, Link } from './styles';

const Header: React.FC = () => {
  function handleActive() {
    document.querySelector('nav')?.classList.toggle('active');
  }

  return (
    <Container>
      <Headers>
        <Image src={Logo} alt="Maya-Software"/>

        <Toggle onClick={handleActive} >
          <MdReorder  size={32} />
        </Toggle>

        <Nav>
          <Link href="#patners">Parceiros</Link>
          <Link href="#contact">Contato</Link>
        </Nav>

      </Headers>
    </Container>
  );
}

export default Header;