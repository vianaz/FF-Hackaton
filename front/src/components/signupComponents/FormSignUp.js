import styled from "styled-components";
import { useState } from "react";
import Input from "../shared/Input";
import Button from "../shared/Button";
import axios from "axios";
import {useRouter} from "next/router";

export default function FormSignUp(){
    const router = useRouter();
    const [userData,setUserData] = useState({
        name:"",
        email:"",
        password:"",
        street:"",
        city:"",
        complement:"",
        zipCode:"",
        phone:"",
    });

    const { name, email, password, street, city, complement, zipCode,phone } = userData;

    function submitData(event){
        event.preventDefault();
        console.log(userData);
        const SIGNUP_POST_URL = "https://bicare-hackathon.herokuapp.com/sign-up";
        const promise = axios.post(SIGNUP_POST_URL,{
            name,
            email,
            password,
            street,
            city,
            complement,
            zipCode,
            phone,
        });
        promise
            .then(response=>{
                router.push("/login");
            })
            .catch(err=>{
                alert("entrou no catch")
                setUserData({
                    name:"",
                    email:"",
                    password:"",
                    street:"",
                    city:"",
                    complement:"",
                    zipCode:"",
                    phone:"",
                })
            });
    }

    return(
        <Container>
            <form onSubmit={submitData}>
            <Input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={e=>setUserData({...userData,name:e.target.value})}
                    required
                    autoComplete="on"
                />
                <Input
                    type="text"
                    placeholder="E-mail"
                    value={email}
                    onChange={e=>setUserData({...userData,email:e.target.value})}
                    required
                    autoComplete="on"
                />
                <Input 
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={e=>setUserData({...userData,password:e.target.value})}
                    required
                    autoComplete="on"
                />
                <Input
                    type="text"
                    placeholder="Rua"
                    value={street}
                    onChange={e=>setUserData({...userData,street:e.target.value})}
                    required
                    autoComplete="on"
                />
                <Input
                    type="text"
                    placeholder="Cidade"
                    value={city}
                    onChange={e=>setUserData({...userData,city:e.target.value})}
                    required
                    autoComplete="on"
                />
                <Input
                    type="text"
                    placeholder="Complemento"
                    value={complement}
                    onChange={e=>setUserData({...userData,complement:e.target.value})}
                    autoComplete="on"
                />
                <Input
                    type="text"
                    placeholder="CEP"
                    value={zipCode}
                    onChange={e=>setUserData({...userData,zipCode:e.target.value})}
                    required
                    autoComplete="on"
                />
                <Input
                    type="text"
                    placeholder="Telefone"
                    value={phone}
                    onChange={e=>setUserData({...userData,phone:e.target.value})}
                    required
                    autoComplete="on"
                />
                <div>
                    <Button>Cadastrar</Button>
                </div>       
            </form>
        </Container>
    );
}

const Container = styled.div`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
