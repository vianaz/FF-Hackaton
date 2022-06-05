import { Container, LogoTitle, Profile } from './styles';
import Link from 'next/link';

export default function Header() {
  return (
    <Container>
      <LogoTitle>BiCare</LogoTitle>
      <Link href='/personal'>
        <Profile />
      </Link>
    </Container>
  );
}
