import styled from 'styled-components';

export default function PostContainer({ username, time, message }) {
  return (
    <Container>
      <Header>
        <Avatar>AF</Avatar>
        <PostInfo>
          <p>{username}</p>
          <span>{time}</span>
        </PostInfo>
      </Header>
      <Body>
        <p>{message}</p>
      </Body>
    </Container>
  );
}

const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-weight: bold;
    font-size: 19px;
  }

  span {
    font-size: 13px;
  }
`;

const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 7px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--blue);
  font-weight: 500;
  color: white
`;

const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  width: 330px;
  min-height: 160px;
  margin-bottom: 17px;
  padding: 10px;
  background-color: white;
  border-radius: 15px;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    10px 10px 13px -3px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 10px 10px 13px -3px rgba(0, 0, 0, 0);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  p {
    font-weight: 600;
    font-size: 18px;
    letter-spacing: 0.05em;
  }
`;
const Body = styled.div`
  font-size: 14px;
  margin-top: 11px;
  background-color: #e6e6e6;
  border: 1px solid #808080;
  border-radius: 27px;
  padding: 15px;
  p {
    line-height: 1.4em;
    letter-spacing: 0.05em;
  }
`;
