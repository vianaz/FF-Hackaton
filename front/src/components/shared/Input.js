import styled from "styled-components";

const Input = styled.input`
    width: 90vw;
    height: 45px;
    background-color:#C0C0C0;
    border: solid 1px #D5D5D5;
    border-radius:20px;
    padding:14px;
    margin-left:30px;
    margin-right:20px;
    ::placeholder{
        color: #000;
    }
    margin-bottom: 4px;
    color:#000;
    font-family: 'Roboto';
      font-weight: 300;
      font-size: 18px;
      line-height: 1.4em;
      letter-spacing: 0.07em;
      margin-top: 10px;
      strong {
          font-weight: 600;
      }
`;

export default Input;