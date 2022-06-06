import styled from 'styled-components';

import PersonalComponent from '../../components/personalInfoComponents/personalInfoComponent';

export default function PersonalInfo() {
  return (
    <Main>
      <PersonalComponent />
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  min-width: 100vw;
  min-height: 100vh;
  background-color: #4f4f4f3b;
  position:fixed;
  right:0;
  top:0;
  z-index:7;
`;
