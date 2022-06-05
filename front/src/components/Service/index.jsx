import styled from 'styled-components';
import { Container, Footer } from './styles';

import { GoGear } from 'react-icons/go';
import { RiShieldCheckLine } from 'react-icons/ri';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

export default function Service({ type }) {

  function getIcon() {
    switch (type) {
      case 'mecânico': return (<GoGear fontSize='65px' />);
      case 'seguros': return (<RiShieldCheckLine fontSize='65px' />);
      case 'gps': return (<HiOutlineLocationMarker fontSize='65px' />);
      case 'lojas': return (<HiOutlineShoppingBag fontSize='65px' />);
      default: console.log('ue');
    }
  }

  return (
    <a
      href="https://www.google.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button type={type}>
        <span>{type.toUpperCase()}</span>

        {getIcon()}

      </Button>
    </a>
  );
}

const Button = styled.div`
  width: 130px;
  height: 146px;
  border-radius: 10px;
  background-color: ${props => props.type === 'gps' ? "#DEDEDE" :"#232435"};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 16px;
`