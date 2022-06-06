import styled from 'styled-components';

export const Container = styled.header`
  background-color: #fff;
  width: 100%;
  padding: 1rem;
  padding-left: 32px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;

  font-family: 'Roboto';
`;

export const LogoTitle = styled.h1`
  font-size: 1.5rem;
`;

export const Profile = styled.div`
  min-width: 52px;
  min-height: 52px;
  border-radius: 50%;
  background-color: aquamarine;
  cursor: pointer;
`;
