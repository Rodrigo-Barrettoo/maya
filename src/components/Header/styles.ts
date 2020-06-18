import styled from 'styled-components';

export const Container = styled.div`
  grid-area: HE;
  display: flex;
`;

export const Headers = styled.header`
  position: relative;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-top: 24px;
`;

export const Image = styled.img`
  height: 64px;
`;

export const Toggle = styled.div`
  float: right;
  display: none;
  color: var(--secondary);

  @media screen and (max-width: 768px){
    display: block;
  }
`;

export const Nav = styled.nav`
  @media screen and (max-width: 768px){
    display: none;

    &.active {
      display: block;
      position: absolute;

      width: 100%;
      top: 64px;
      padding: 16px 0 8px 0;
      text-align: center;

      background: var(--primary);
      border-bottom: 1px solid var(--secondary);
    }

    &.active a {
      padding: 8px;
      display: block;
      margin-left: 0px;
    }
  }
`;

export const Link = styled.a`
  margin-left: 24px;
  transition: 0.4s;

  text-decoration: none;
  padding: 8px 0;
  font-size: 16px;
  color: var(--secondary);  

  &:hover {
    color: var(--maya);
    border-bottom: 1px solid var(--maya);
  }
`;