import { Container, Profile } from './styles';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <Container>
      <Image src="/../public/logo-bicare.png" alt="" width={108} height={73} />

      <Link href="/personal">
        <Profile />
      </Link>
    </Container>
  );
}
