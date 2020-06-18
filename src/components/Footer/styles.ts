import styled from 'styled-components';

export const Container = styled.div`
  grid-template: FO;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  
  color: var(--secondary);
  text-align: center;
  margin-bottom: 24px;

  h1 {
    margin: 16px 0;
    font-size: 48px;
    text-align: center;
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-decoration: none;
    color: var(--secondary);
    margin-bottom: 24px;

    &:hover {
      color: var(--maya);
    }
  }

  footer {
    margin-top: 24px;
  }
`;
