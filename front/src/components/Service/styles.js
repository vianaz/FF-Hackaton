import styled from 'styled-components';

export const Container = styled.li`
  max-width: 400px;
  background-color: pink;
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

    font-size: 0.75rem;

    border-radius: 5px;
    padding: 0.25rem;
  }
`;
