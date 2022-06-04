import styled from "styled-components";
import { useState } from "react";
import Input from "../shared/Input";
import Button from "../shared/Button";

export default function FormLogin(){
    const [userLoginData,setUserLoginData] = useState({
        email:"",
        password:"",
    });

    const {email,password} = userLoginData;

    function submitData(event){
        event.preventDefault();
        alert ("Ok,ja pode trocar por axios");
        setUserLoginData({
            email:"",
            password:"",
        });
    }

    return (
        <Container>
            <form onSubmit={submitData}>
                <Input
                    type="text"
                    placeholder="E-mail"
                    value={email}
                    onChange={e=>setUserLoginData({...userLoginData,email:e.target.value})}
                    required
                    autoComplete="on"
                />
                <Input 
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={e=>setUserLoginData({...userLoginData,password:e.target.value})}
                    required
                    autoComplete="on"
                />
                <div>
                    <Button>Entrar</Button>
                </div>       
            </form>
        </Container>
    );
}

const Container = styled.div`
    
    div{
        display:flex;
        justify-content: center;
        align-items: center;
    }
`;