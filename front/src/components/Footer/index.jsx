import Link from 'next/link';
import { MdDirectionsBike } from 'react-icons/md';
import { HiUserGroup } from 'react-icons/hi';

import { Container, StyledLink } from './styles';

export default function Footer() {
  return (
    <Container>
      <Link href="/bike">
        <StyledLink>
          <MdDirectionsBike fontSize="40px" color="#fff" />
          <span>Minha bike</span>
        </StyledLink>
      </Link>
      <Link href="/bike">
        <StyledLink>
          <HiUserGroup fontSize="40px" color="#fff" />
          <span>Comunidade</span>
        </StyledLink>
      </Link>
    </Container>
  );
}
