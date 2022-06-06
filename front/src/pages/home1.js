import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #F2F2F2;
  padding-bottom: calc(75px + 25px);
  font-family: 'Roboto';
  line-height: 1em;
  letter-spacing: 0.1em;
`;

export const Content = styled.section`
  width: auto;
  margin-inline: 1rem;
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;

  margin-top: 0.75rem;
`;

export const Form = styled.form`
  width: 100%;

  margin-top: 1.5rem;
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
  background-color: white;
  border: 1px solid #CCCCCC;
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
  color: #CCCCCC;
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
  justify-content: space-around;

  margin-top: 0.75rem;
  margin-bottom: 2rem;

  gap: 1rem;
`;

export const Status = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 60px;
`

export const UpperText = styled.div`
  background-color: #232435;
  border-radius: 10px;
  width: 70px;
  height: 25px;

  margin-right: 0.9rem;

  color: white;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const BottomText = styled.div`
`

export const UpperContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;


  position: absolute;
  top: -10px;
  
`

export const BottomContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 50px;

  background-color: #329752;
  border-radius: 20px;

  position: relative;
`