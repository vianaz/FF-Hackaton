import Logo from "../../components/shared/Logo";
import LinkSignUp from "../../components/loginComponents/LinkSignUp";
import styled from "styled-components";
import FormLogin from "../../components/loginComponents/FormLogin";

export default function Home() {
    return(
        <Container>
            <Logo />
            <FormLogin />
            <LinkSignUp />
        </Container>

    );
}


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;