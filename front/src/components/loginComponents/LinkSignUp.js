import styled from "styled-components";
import Link from "next/link";

export default function LinkSignUp(){
    return (
        <Link href="/signup">
            <StyledLink>
                Não possuí uma conta? Cadastre-se
            </StyledLink>
        </Link>
    );
}

const StyledLink = styled.div`
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: green;
    margin-top:20px;
`;