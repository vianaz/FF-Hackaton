import { Container } from './styles';

export default function Service({ type }) {
  return (
    <Container>
      <span>{type}</span>
      <a
        href="https://www.google.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://institutouniversal.vteximg.com.br/arquivos/ids/157052-1000-1000/image_mecanica_bicicleta.jpg?v=635368949412000000"
          alt="mecanico"
        />
        <h2>{type}</h2>
      </a>
    </Container>
  );
}