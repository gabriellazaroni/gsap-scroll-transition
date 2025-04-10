import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: #161617;
  color: #fafafa;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  justify-content: start;
  padding: 40px 0px 0px 40px;
`

export const ImgLogo = styled.img`
  display: block;

`

export const BoardWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  gap: 0.75rem;
  overflow-x: scroll;
  padding: 3rem;
  justify-content: center;
`;