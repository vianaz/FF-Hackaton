import styled from 'styled-components';
import Link from 'next/link';

export default function MechanicalContainer({
  name,
  description,
  close,
  open,
}) {
  return (
    <MechanicalCard>
      <UpperSide>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Name>AF</Name>
          <MechanicInfo>
            <MechanicName>{name}</MechanicName>
            <Time>Fecha: {close}</Time>
          </MechanicInfo>
        </div>

        <Open>Aberto</Open>
      </UpperSide>

      <Link href='https://api.whatsapp.com/send?phone=98999045564&text=Quero%20saber%20o%20valor' passHref>
        <a target="_blank">
          <Contact>Contatar mecânico</Contact>
        </a>
      </Link>
      <BottomSide>
        <Description>{description}</Description>
      </BottomSide>
    </MechanicalCard>
  );
}

const Open = styled.div`
  background-color: #009651;
  border-radius: 10px;
  min-width: 80px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  color: white;
  font-weight: bold;
  margin-left: 15px;
`;

const Time = styled.div`
  color: #212535;
  font-size: 12px;
  font-weight: 400;
  margin-top: 5px;
`;

const MechanicInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7px;
  line-height: 1.2em;
  min-width: 80px;
`;

const MechanicName = styled.p`
  color: #212535;
  font-size: 13px;
  font-weight: bold;
`;

const Name = styled.div`
  width: 45px;
  height: 45px;
  min-width: 45px;
  max-width: 45px;
  max-height: 45px;
  border: 0;
  border-radius: 50%;
  background-color: #212535;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contact = styled.button`
  background-color: #212535;
  height: 30px;
  min-width: 90px;

  border: 0;
  border-radius: 12px;
  color: white;
  font-size: 12px;
  margin-bottom: 10px;
  font-family: 'Roboto';
  padding: 8px;
`;

const MechanicalCard = styled.div`
  min-width: 95%;
  min-height: 210px;
  max-width: 95%;
  background-color: white;
  margin-top: 30px;

  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;

  padding: 10px;
  box-sizing: border-box;
  font-family: 'Roboto';
  letter-spacing: 0.1em;
`;

const UpperSide = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Description = styled.div`
  min-width: 100%;
  background-color: #e6e6e6;
  border: 1px solid #808080;
  border-radius: 10px;
  min-height: 50px;

  padding: 10px;
  line-height: 1.3em;
  letter-spacing: 0.08em;
`;

const BottomSide = styled.div`
  width: 100%;
`;
