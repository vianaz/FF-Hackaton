import styled from "styled-components";
import Logo from "../../components/shared/Logo";
import FormSignUp from "../../components/signupComponents/FormSignUp";
import LinkLogin from "../../components/signupComponents/LinkLogin";    


export default function SignUp(){
    return (
        <Container>
            <Logo />
            <FormSignUp />
            <LinkLogin />
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