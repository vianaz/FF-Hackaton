import styled from "styled-components";
import Link from "next/link";

export default function LinkLogin(){
    return(
        <Link href="/login">
            <StyledLink>
                Já possuí uma conta? Entre
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