import styled from 'styled-components';

export default function PersonalComponent() {
  return (
    <>
      <Infos>
        <div className='photo-container'>
          <div className='photo'></div>
        </div>
        <div className='infos'>
          <p>
            <strong>Nome:</strong> Gabriel Viana
          </p>
          <p>
            <strong>Email:</strong> gabriel@gabriel.com
          </p>
          <p>
            <strong>Cidade:</strong> dev
          </p>
          <p>
            <strong>Telefone:</strong> (98)99999-9999
          </p>
          <p>
            <strong>Rua:</strong> devinho
          </p>
          <p>
            <strong>Cep:</strong> 234234-123
          </p>
          <p>
            <strong>Complemento:</strong> rua atras da outra rua
          </p>
        </div>
      </Infos>
    </>
  );
}

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 330px;
  min-height: 350px;
  background-color: white;
  padding: 20px 20px;
  .photo-container {
    display: flex;
    justify-content: end;
  }
  .photo {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #797978;
  }
  .infos {
    p {
      font-family: 'Roboto';
      font-weight: 300;
      font-size: 18px;
      line-height: 1.4em;
      letter-spacing: 0.07em;
      margin-top: 10px;
      strong {
          font-weight: 600;
      }
    }
  }
`;
const Card = styled.div`
  margin-top: 40px;
  width: 330px;
  height: 350px;
  background-color: white;
`;
