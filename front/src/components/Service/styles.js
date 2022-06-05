import styled from 'styled-components';

export const Container = styled.li`
  max-width: 150px;
  background-color: #232435;
  color: #fff;
  border-radius: 8px;
  overflow: hidden;

  position: relative;

  img {
    width: 150px;
    height: 150px;
  }

  span {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background-color: #fff;
    color: #232435;

    font-size: 0.75rem;

    border-radius: 5px;
    padding: 0.25rem;
  }
`;

export const Footer = styled.div`
  width: 100%;
  background-color: #232435;
  color: #fff;

  padding: 0.5rem;
`;
