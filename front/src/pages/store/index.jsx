import styled from "styled-components";
import Topping from "../../components/Topping";
import { useEffect, useState } from "react";
import axios from "axios";
import StoreContainer from "../../components/feedComponents/storeContainer";

export default function Mechanical() {

    const [storesList, setStoresList] = useState([]);

    useEffect(() => {
        axios.get('https://bicare-hackathon.herokuapp.com/stories')
            .then( (answer) => {
                setStoresList(answer.data);
            })
            .catch( (e) => console.log(e));
    }, []);

    return (
        <Main>
            <Topping name={'Lojas'} />
            {storesList.map( (mechanic, i) => <StoreContainer key={i} name={mechanic.name} description={mechanic.description} close={mechanic.close} open={mechanic.open} />)}
        </Main>
    )
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 100vw;
  min-height: 100vh;
  padding: 35px;
  background-color: #212535;

  margin-top: 70px;
`;