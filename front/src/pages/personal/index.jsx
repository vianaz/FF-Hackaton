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
  padding: 35px 0px;
  min-width: 100vw;
  min-height: 100vh;
  background-color: #329752;
`;
