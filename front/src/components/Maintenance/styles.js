import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: start;

  padding: 0.5rem 0.75rem;
  font-size: 0.75rem;

  border-radius: 1rem;

  background-color: #e6e6e6;

  span {
    & + span {
      margin-top: 0.5rem;
    }
  }
`;
