import { Container, LogoTitle, Profile } from './styles';
import { useState } from 'react';
import PersonalInfo from '../../pages/personal';

export default function Header() {
  const [visible,setVisible]=useState(false);

  return (
    <Container>
      <LogoTitle>BiCare</LogoTitle>
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


