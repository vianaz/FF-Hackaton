import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  position: relative;
`;

export const Content = styled.section`
  width: auto;
  margin-inline: 1rem;
  margin-top: 1rem;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  width: 100%;

  padding: 1rem;
  background-color: #329752;
  border: none;
  border-radius: 999px;

  margin-top: 1.25rem;
  cursor: pointer;
`;

export const FormModal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0.25rem;

  gap: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  height: auto;
  outline: 2px solid transparent;
  border: 0;
  padding: 0.75rem;
  border-radius: 0.375rem;
  background-color: #329752;
  color: #fff;
`;
