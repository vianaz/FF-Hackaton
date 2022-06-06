import { Container, LogoTitle, Profile } from './styles';
import { useState } from 'react';
import PersonalInfo from '../../pages/personal';
import { Container, Profile } from './styles';
import Image from 'next/image';

export default function Header() {
  const [visible,setVisible]=useState(false);

  return (
    <Container>
      <Image src="/../public/logo-bicare.png" alt="" width={108} height={73} />
      <Profile onClick={()=>setVisible(!visible)}>
      {visible?
          <PersonalInfo />
          :
          <></>  
        }
      </Profile>
    </Container>
  );
}


