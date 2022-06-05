import {FaRegPaperPlane} from "react-icons/fa"
import styled from "styled-components";

export default function FeedFooter ({message, setMessage}){

    
  return(
      <Footer>
          <Input placeholder="Digite uma mensagem..." value={message} onChange={e => setMessage(e.target.value)}/>
          <Button>
            <FaRegPaperPlane color={"white"} size={"22px"}/>
          </Button>
      </Footer>
  );
}
const Button = styled.button`
    width: 40px;
    height: 40px;
    background-color: var(--orange);
    border-radius: 50%;
    border: none;
`;

const Input = styled.input`
    font-family: "Roboto", sans-serif;
    height: 40px;
    width: 85%;
    background-color: white;
    border: 1px solid var(--inputBorder);
    border-radius: 20px;
    padding: 21px;
    font-size: 14px;
    ::placeholder{
        color: #4d4d4d;
    }
`;

const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 74px;
    padding: 16px;
    background-color: var(--blue);
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
`;