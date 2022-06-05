import styled from "styled-components"

export default function MechanicalContainer({ name, description, close, open }) {
    return (
        <MechanicalCard>
            <UpperSide>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Name>AF</Name>
                    <MechanicInfo>
                        <MechanicName>{name}</MechanicName>
                        <Time>Fecha: {close}</Time>
                    </MechanicInfo>
                </div>

                <Open>Aberto</Open>
            </UpperSide>

            <Contact>Contatar mecânico</Contact>
            <BottomSide>
                <Description>
                    {description}
                </Description>
            </BottomSide>
        </MechanicalCard>
    )
}

const Open = styled.div`
    background-color: #009651;
    border-radius: 10px;
    width: 80px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    color: white;
    font-weight: bold;
`

const Time = styled.div`
    color: #212535;
    font-size: 12px;
    font-weight: bold;
`

const MechanicInfo = styled.div`
    display: flex; 
    flex-direction: column;
`

const MechanicName = styled.p`
    color: #212535;
    font-size: 13px;
    font-weight: bold;
`

const Name = styled.div`
    width: 45px;
    height: 45px;
    border: 0;
    border-radius: 50%;
    background-color: #212535;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Contact = styled.button`
    background-color: #212535;
    height: 30px;
    width: 130px;

    border: 0;
    border-radius: 12px;
    color: white;
    font-size: 12px;
    margin-bottom: 10px;
`

const MechanicalCard = styled.div`
    width: 95%;
    height: 210px;
    background-color: white;
    margin-top: 30px;

    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;

    padding: 10px;
    box-sizing: border-box;
`

const UpperSide = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 10px;
`

const Description = styled.div`
    width: 100%;
    background-color: #e6e6e6;
    border: 1px solid #808080;
    border-radius: 10px;
    height: 50px;

    padding: 10px;
`

const BottomSide = styled.div`
    width: 100%;
`