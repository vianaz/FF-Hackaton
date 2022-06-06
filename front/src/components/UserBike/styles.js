import styled from 'styled-components';

export const Container = styled.div`
  width: auto;
  margin-inline: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 1rem;
`;

export const BikeName = styled.div`
  width: auto;
  background-color: #000;
  color: #fff;
  border-radius: 999px;

  font-size: 0.875rem;

  padding: 0.5rem;
`;

export const Distance = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  background-color: #329752;
  border-radius: 999px;

  font-size: 1rem;

  padding: 0.5rem;
`;

export const LastMaintenance = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  border-radius: 5px;
  border: 1px solid black;
  padding: 0.5rem;

  gap: 0.5rem;
`;
