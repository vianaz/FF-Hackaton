import styled from "styled-components"

export default function StoreContainer( { name, description, close, open} ) {
    return (
        <MechanicalCard>
            <UpperSide>

            </UpperSide>

            <BottomSide>
                <Contact>Contatar loja</Contact>
                <Description>
                    {description}
                </Description>
            </BottomSide>
        </MechanicalCard>
    )
}

const Contact = styled.button`
    background-color: #212535;
    height: 30px;
    width: 130px;

    border: 0;
    border-radius: 12px;
    color: white;
    font-size: 12px;
`

const MechanicalCard = styled.div`
    width: 95%;
    height: 250px;
    background-color: white;

    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;

    padding: 10px;
    box-sizing: border-box;
`

const UpperSide = styled.div`
    
`

const Description = styled.div`
    
`

const BottomSide = styled.div`
    
`