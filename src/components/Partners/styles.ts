import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 128px 0 0 0;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  

  @media screen and (max-width: 480px){
    flex-direction: column;
    margin: 24px;
  }
`;

export const Div = styled.div`
  display:flex;
  align-items: center;
  justify-content : center;

  width: 100%;
  height: 128px;
  margin: 8px;

  box-shadow: 0px 0px 8px var(--white);
  border-radius: 8px;
  background: var(--tertiary);
`;


export const Image = styled.img`
  max-height: 96px;
  max-width: 128px;
`;
