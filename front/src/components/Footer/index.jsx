import Link from 'next/link';
import { MdDirectionsBike } from 'react-icons/md';
import { HiUserGroup } from 'react-icons/hi';
import { GiDutchBike } from 'react-icons/gi';

import styled from 'styled-components';

import { Container, StyledLink } from './styles';

export default function Footer() {
  return (
    <Container>
      <Link href="/bikes">
        <StyledLink>
          <MdDirectionsBike fontSize="40px" color="#fff" />
          <span>Minha bike</span>
        </StyledLink>
      </Link>
      <Link href="/">
        <StyledLink>
          <BikeBall>
            <GiDutchBike fontSize="50px" color="#fff" />
          </BikeBall>
        </StyledLink>
      </Link>
      <Link href="/feed">
        <StyledLink>
          <HiUserGroup fontSize="40px" color="#fff" />
          <span>Comunidade</span>
        </StyledLink>
      </Link>
    </Container>
  );
}

const BikeBall = styled.div`
  width: 100px;
  height: 100px;
  background-color: #329752;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  margin-bottom: 50px;
`
