import styled from 'styled-components';
import Topping from '../../components/Topping';
import { useEffect, useState } from 'react';
import axios from 'axios';
import StoreContainer from '../../components/feedComponents/storeContainer';
import { BallTriangle } from 'react-loader-spinner';

export default function Mechanical() {
  const [storesList, setStoresList] = useState([]);

  useEffect(() => {
    axios
      .get('https://bicare-hackathon.herokuapp.com/stories')
      .then((answer) => {
        setStoresList(answer.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <Main>
      <Topping name={'Lojas'} fixed={storesList[0] ? 'sticky' : 'fixed'} />
      {storesList[0] ? (
        storesList.map((store, i) => (
          <StoreContainer
            key={i}
            name={store.name}
            description={store.description}
            close={store.close}
            open={store.open}
          />
        ))
      ) : (
        <BallTriangle
          heigth='100'
          width='100'
          color='grey'
          ariaLabel='loading-indicator'
        />
      )}
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
  background-color: #212535;
`;
