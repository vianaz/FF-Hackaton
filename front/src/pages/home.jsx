import { FiMapPin, FiSearch } from 'react-icons/fi';

import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Service from '../components/Service';

import {
  Container,
  Content,
  Heading,
  Form,
  InputLabel,
  Input,
  Status,
  Services,
  UpperText,
  BottomText,
  UpperContent,
  BottomContent
} from './home1';

export default function Home() {
  function handleSubmitForm(event) {
    event.preventDefault();
  }

  return (
    <Container>
      <Header />
      <Content>

        <Heading>STATUS</Heading>

        <Status>
          <BottomContent>
            <UpperContent>
              <UpperText>KMs</UpperText>
              <UpperText>Saldo</UpperText>
              <UpperText>Bike</UpperText>
            </UpperContent>

            <BottomText></BottomText>
            <BottomText></BottomText>
            <BottomText></BottomText>
          </BottomContent>
        </Status>

        <Services>
          <Service type="gps" />
          <Service type="lojas" />
          <Service type="seguros" />
          <Service type="mecânico" />
        </Services>

        <Image src='/../public/Frame.png' alt='' width={322} height={115} />
      </Content>

      <Footer />
    </Container>
  );
}