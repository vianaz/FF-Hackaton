import StyledLink from "../shared/StyledLink";
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
