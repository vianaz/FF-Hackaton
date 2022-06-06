import { Container, LogoTitle, Profile } from './styles';
import { useState } from 'react';
import PersonalInfo from '../../pages/personal';
import Image from 'next/image';
import Logo from '../../../public/logo-bicare.png';

export default function Header() {
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <Image src={Logo} alt='' width={108} height={73} />
      <Profile onClick={() => setVisible(!visible)}>
        {visible ? <PersonalInfo /> : <></>}
      </Profile>
    </Container>
  );
}
