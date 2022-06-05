import { FiMapPin, FiSearch } from 'react-icons/fi';

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
  SubmitButton,
  Services,
} from './home';

export default function Home() {
  function handleSubmitForm(event) {
    event.preventDefault();
  }

  return (
    <Container>
      <Header />

      <Content>
        <Heading>Encontre os melhores serviços para sua bike</Heading>

        <Form>
          <InputLabel>
            <FiMapPin color="#fff" />
            <Input name="cidade" icon="" placeholder="Cidade" />
          </InputLabel>
          <InputLabel>
            <FiSearch color="#fff" />
            <Input name="serviço" icon="" placeholder="Serviço" />
          </InputLabel>
          <SubmitButton onClick={handleSubmitForm}>Pesquisar</SubmitButton>
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

      <Footer />
    </Container>
  );
}
