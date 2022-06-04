import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: red;
  min-height: 100vh;
`;

export const Content = styled.section`
  width: auto;
  margin-inline: 2rem;
  background-color: green;
`;

export const Heading = styled.h2`
  font-size: 3rem;
`;

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  gap: 1rem;
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

export const Services = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  gap: 1rem;
`;
