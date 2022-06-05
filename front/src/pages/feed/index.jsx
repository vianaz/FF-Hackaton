import styled from 'styled-components';

import PostContainer from '../../components/feedComponents/postContainer';

export default function Feed() {
  const arrayTeste = [1,2,3,4,5]
  return (
    <Main>
      {arrayTeste.map((element, i) => {
        return <PostContainer key={i} />;
      })}
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
  padding: 35px;
  background-color: #329752;
`;
