import styled from 'styled-components';

export default function PostContainer() {
  return (
    <Container>
      <Header>
        <p>Gabriel Viana</p>
        <div></div>
      </Header>
      <Body>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          tempus pulvinar massa. Nullam elementum ullamcorper mauris, ut lacinia
          lorem pretium ac. Praesent nulla justo, elementum mollis ornare
          fermentum, gravida at justo. Duis eu eleifend turpis. Nunc aliquam
          magna eu imperdiet pharetra. Quisque semper tincidunt est eu accumsan.
          Nulla fermentum augue sit amet dui sodales, vel ornare turpis varius.
          Donec fringilla massa et volutpat tempus. Sed vestibulum dignissim
          fringilla. Praesent venenatis varius sapien, eu tempus purus facilisis
          vel. Mauris in nisl pretium sapien mattis vestibulum a vel dolor.
          Mauris vitae mollis diam, nec malesuada odio. Praesent dapibus enim eu
          ipsum blandit tincidunt.
        </p>
      </Body>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 330px;
  min-height: 160px;
  margin-bottom: 35px;
  padding: 15px 20px;
  background-color: white;
  border-radius: 15px;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    10px 10px 13px -3px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 10px 10px 13px -3px rgba(0, 0, 0, 0);
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #c4c4c4;
  }
  p {
    font-weight: 600;
    font-family: 'Roboto';
    font-size: 18px;
    letter-spacing: 0.05em;
  }
`;
const Body = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
  p {
    font-family: 'Roboto';
    line-height: 1.4em;
    letter-spacing: 0.05em;
  }
`;
