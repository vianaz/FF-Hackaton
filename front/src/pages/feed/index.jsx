import styled from 'styled-components';

import PostContainer from '../../components/feedComponents/postContainer';
import Topping from '../../components/Topping';

import axios from 'axios';
import { useEffect, useState } from 'react';
import FeedFooter from '../../components/feedComponents/feedFooter';

const feedsObj = [
  {
    username: 'Afonso',
    time: '12/02/2022',
    message:
      'Olá pessoal, tudo bem com vocês? Sou novo aqui no app e gostaria de saber algo sobre...',
  },
  {
    username: 'Afonso',
    time: '12/02/2022',
    message:
      'Olá pessoal, tudo bem com vocês? Sou novo aqui no app e gostaria de saber algo sobre...',
  },
];

export default function Feed() {
  const [feeds, setFeeds] = useState(feedsObj);
  const [message, setMessage] = useState('');

  useEffect(() => {}, [setFeeds]);
  return (
    <Main>
      <Topping name={'Feed'} />
      {feeds.map((feed, i) => {
        return <PostContainer key={i} {...feed} />;
      })}
      <FeedFooter message={message} setMessage={setMessage} />
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
  margin-top: 74px;
  background-color: var(--green);
`;
