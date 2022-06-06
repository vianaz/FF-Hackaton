import Link from 'next/link';
import { Profile } from '../Header/styles';
import { AiOutlineLeftCircle } from 'react-icons/ai';

import styled from 'styled-components';

export default function Topping({ name }) {
  return (
    <Container>
      <Link href='/home'>
        <AiOutlineLeftCircle fontSize={35} />
      </Link>
      <span>{name}</span>
      <Link href='/personal'>
        <Profile />
      </Link>
    </Container>
  );
}

const Container = styled.header`
  background-color: #fff;
  width: 100%;
  padding: 1rem;
  padding-left: 32px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;

  font-weight: 700;
  letter-spacing: 0.15em;
  font-family: 'Roboto';

  span {
    font-size: 36px;
  }
`;
