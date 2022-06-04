import { FiMapPin, FiSearch } from 'react-icons/fi';

import Header from '../components/Header';
import Service from '../components/Service';

import {
  Container,
  Content,
  Heading,
  Form,
  InputLabel,
  Input,
  Services,
} from './home';

export default function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <Heading>Encontre os melhores serviços para sua bike</Heading>

        <Form>
          <InputLabel>
            <FiMapPin />
            <Input name="cidade" icon="" placeholder="Cidade" />
          </InputLabel>
          <InputLabel>
            <FiSearch />
            <Input name="serviço" icon="" placeholder="Serviço" />
          </InputLabel>
        </Form>

        <Heading>Serviços</Heading>

        <Services>
          <Service type="mecanico" />
          <Service type="lojas" />
          <Service type="bicicletario" />
          <Service type="mecanico" />
          <Service type="lojas" />
        </Services>
      </Content>
    </Container>
  );
}
