import { FiMapPin, FiSearch } from 'react-icons/fi';

import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Service from '../components/Service';
import Map from '../../public/Frame.png';

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
  BottomContent,
} from '../components/home1';

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
          <Service type='gps' />
          <Service type='lojas' />
          <Service type='seguros' />
          <Service type='mecânico' />
        </Services>

        <Link href='https://www.google.com/maps' passHref>
          <a target='_blank'>
            <Image src={Map} alt='' width={322} height={115} />
          </a>
        </Link>
      </Content>

      <Footer />
    </Container>
  );
}
