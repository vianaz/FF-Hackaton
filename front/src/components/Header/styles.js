import styled from 'styled-components';

export const Container = styled.header`
  background-color: #fff;
  width: 100%;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
`;

export const LogoTitle = styled.h1`
  font-size: 1.5rem;
`;

export const Profile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: aquamarine;

  cursor: pointer;
`;
