import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;

  padding: 1rem;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;

  height: 75px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #232435;
  color: #fff;
`;

export const StyledLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;
