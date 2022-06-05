import styled from 'styled-components';
import { useState } from 'react';
import Input from '../shared/Input';
import Button from '../shared/Button';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function FormLogin() {
  const router = useRouter();
  const [userLoginData, setUserLoginData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userLoginData;

  function submitData(event) {
    event.preventDefault();
    const LOGIN_POST_URL = 'https://bicare-hackathon.herokuapp.com/sign-in';
    const promise = axios.post(LOGIN_POST_URL, {
      email,
      password,
    });

    promise
      .then((response) => {
        const {
          data: { id, token },
        } = response;
        const objUserData = {id, token};
        localStorage.setItem('userData', JSON.stringify(objUserData));
        console.log(localStorage);
        router.push('/');
      })
      .catch((err) => {
        alert(
          'As informações de e-mail e/ou senha estão incorretas. Insira os dados novamente ou faça o cadastro!',
        );
        setUserLoginData({
          email: '',
          password: '',
        });
      });
  }

  return (
    <Container>
      <form onSubmit={submitData}>
        <Input
          type='text'
          placeholder='E-mail'
          value={email}
          onChange={(e) =>
            setUserLoginData({ ...userLoginData, email: e.target.value })
          }
          required
          autoComplete='on'
        />
        <Input
          type='password'
          placeholder='Senha'
          value={password}
          onChange={(e) =>
            setUserLoginData({ ...userLoginData, password: e.target.value })
          }
          required
          autoComplete='on'
        />
        <div>
          <Button>Entrar</Button>
        </div>
      </form>
    </Container>
  );
}

const Container = styled.div`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
