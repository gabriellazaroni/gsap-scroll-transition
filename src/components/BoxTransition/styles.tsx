import styled from "styled-components";

export const Section = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: var(--white);
  position: relative;
  z-index: 3;
  background-color: #161617;

`;

export const LogoImg = styled.img`
  position: fixed;
  top: 40px;
  left: 40px;
  z-index: 10;
  width: 200px; 
  height: auto;
`;

export const Label = styled.span`
  position: absolute;
  display: block;
  text-align: center;
  font-size: 50px;
  z-index: 2;
  width: 50%;
  text-transform: uppercase;
  font-weight: 900;
  color: var(--white);
  color: #161617;
  top: calc(50vh - 56px);

  &.up {
    right: 0;
  }

  &.down {
    left: 0;
  }
`;

export const Box = styled.div`
  height: 1.2vh;
  width: 50vw;
  margin-bottom: -0.2vh;
  background: var(--black);
  display: block;
`;

export const Wrapper = styled.div`
  height: 250vh;
  position: relative;
  background: var(--white);
`;