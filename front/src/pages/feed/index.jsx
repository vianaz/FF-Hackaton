import styled from 'styled-components';

import PostContainer from '../../components/feedComponents/postContainer';
import Topping from '../../components/Topping';

import axios from 'axios';
import { useEffect, useState } from 'react';
import FeedFooter from '../../components/feedComponents/feedFooter';
import { BallTriangle } from 'react-loader-spinner';

export default function Feed() {
  const [refresh, setRefresh] = useState(1);
  const [feeds, setFeeds] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const promise = axios.get('https://bicare-hackathon.herokuapp.com/feed');
    promise.then((response) => {
      const array = response.data;
      console.log();
      setFeeds(array.reverse());
    });
    const refreshInterval = setInterval(() => {
      setRefresh(refresh + 1);
      console.log(refresh);
    }, 5000);
    return () => clearInterval(refreshInterval);
  }, [refresh]);
  return (
    <Main>
      <Topping name={'Feed'} fixed={feeds[0] ? 'sticky' : 'fixed'} />
      {feeds[0] ? (
        feeds.map((feed, i) => {
          return <PostContainer key={i} {...feed} />;
        })
      ) : (
        <BallTriangle
          heigth='100'
          width='100'
          color='white'
          ariaLabel='loading-indicator'
        />
      )}
      <FeedFooter
        message={message}
        setMessage={setMessage}
        setFeeds={(men) => {
          setFeeds(men);
        }}
        refresh={() => {
          setRefresh(refresh + 1);
        }}
      />
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  min-height: 100vh;
  background-color: var(--green);
  padding-bottom: 90px;
`;
