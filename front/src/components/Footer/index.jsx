import Link from 'next/link';
import { MdDirectionsBike } from 'react-icons/md';

import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <Link href="/bike">
        <a>
          <MdDirectionsBike />
        </a>
      </Link>
      <Link href="/bike">
        <a>
          <MdDirectionsBike />
        </a>
      </Link>
    </Container>
  );
}
