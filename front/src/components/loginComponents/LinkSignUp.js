import StyledLink from "../shared/StyledLink";
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

