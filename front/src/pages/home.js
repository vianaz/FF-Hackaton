import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  padding-bottom: calc(75px + 25px);
`;

export const Content = styled.section`
  width: auto;
  margin-inline: 1rem;
  margin-top: 1rem;
`;

export const Heading = styled.h2`
  font-size: 1.25rem;
`;

export const Form = styled.form`
  width: 100%;

  margin-top: 0.75rem;
  margin-bottom: 0.75rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  gap: 0.75rem;
`;

export const InputLabel = styled.label`
  display: flex;
  align-items: center;

  width: 100%;

  padding: 1rem 2rem;
  background-color: #1f2029;
  border-radius: 9999px;
`;

export const Input = styled.input`
  width: 100%;
  height: auto;
  outline: 2px solid transparent;
  border: 0;
  padding: 0 1rem;
  border-radius: 0.375rem;
  background-color: transparent;
  color: #eeeef2;
`;

export const SubmitButton = styled.button`
  width: 100%;

  border: none;
  padding: 1rem 2rem;
  border-radius: 9999px;

  color: white;

  background-color: #7fcc72;

  cursor: pointer;
`;

export const Services = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  margin-top: 0.75rem;

  gap: 1rem;
`;
