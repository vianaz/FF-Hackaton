import MechanicalContainer from '../../components/feedComponents/mechanicalContainer';
import styled from 'styled-components';
import Topping from '../../components/Topping';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BallTriangle } from 'react-loader-spinner';
export default function Mechanical() {
  const [mechanicsList, setMechanicsList] = useState([]);

  useEffect(() => {
    axios
      .get('https://bicare-hackathon.herokuapp.com/mechanics')
      .then((answer) => {
        setMechanicsList(answer.data);
        console.log(mechanicsList);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <Main>
      <Topping
        name={'Mecânicos'}
        fixed={mechanicsList[0] ? 'sticky' : 'fixed'}
      />

      {mechanicsList[0] ? (
        mechanicsList.map((mechanic, i) => (
          <MechanicalContainer
            key={i}
            name={mechanic.name}
            description={mechanic.description}
            close={mechanic.close}
            open={mechanic.open}
          />
        ))
      ) : (
        <BallTriangle
          heigth='100'
          width='100'
          color='white'
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
