import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function EntraLojas() {

    const [mecanico, setMecanico] = useState({
        name: "",
        phone: "",
        open: "",
        close: "",
        description: "",
        address: "",
        city: "",
        postalCode: "",
        complement: ""
    });

    const [loja, setLoja] = useState({
        name: "",
        phone: "",
        open: "",
        close: "",
        description: "",
        address: "",
        city: "",
        postalCode: "",
        complement: ""
    });

    function sendMecanico(event) {
        event.preventDefault();

        axios.post("https://bicare-hackathon.herokuapp.com/mechanics", mecanico)
            .then(() => console.log("deu bão"))
            .catch((e) => console.log(e))
    }

    function sendLoja(event) {
        event.preventDefault();

        axios.post("https://bicare-hackathon.herokuapp.com/stories", loja)
            .then(() => console.log("deu bão"))
            .catch((e) => console.log(e))
    }

    return (
        <Trem>
            <Form onSubmit={sendMecanico} className="FormMecanico">
                <Input type="text" placeholder="nome" value={mecanico.name} onChange={e => setMecanico({ ...mecanico, name: e.target.value })} />
                <Input type="text" placeholder="phone" value={mecanico.phone} onChange={e => setMecanico({ ...mecanico, phone: e.target.value })} />
                <Input type="text" placeholder="open" value={mecanico.open} onChange={e => setMecanico({ ...mecanico, open: e.target.value })} />
                <Input type="text" placeholder="close" value={mecanico.close} onChange={e => setMecanico({ ...mecanico, close: e.target.value })} />
                <Input type="text" placeholder="description" value={mecanico.description} onChange={e => setMecanico({ ...mecanico, description: e.target.value })} />
                <Input type="text" placeholder="address" value={mecanico.address} onChange={e => setMecanico({ ...mecanico, address: e.target.value })} />
                <Input type="text" placeholder="city" value={mecanico.city} onChange={e => setMecanico({ ...mecanico, city: e.target.value })} />
                <Input type="text" placeholder="postalCode" value={mecanico.postalCode} onChange={e => setMecanico({ ...mecanico, postalCode: e.target.value })} />
                <Input type="text" placeholder="complement" value={mecanico.complement} onChange={e => setMecanico({ ...mecanico, complement: e.target.value })} />
                <Button>Envia</Button>
            </Form>

            <Form onSubmit={sendLoja} className="FormLoja">
                <Input type="text" placeholder="nome" value={loja.name} onChange={e => setLoja({ ...loja, name: e.target.value })} />
                <Input type="text" placeholder="phone" value={loja.phone} onChange={e => setLoja({ ...loja, phone: e.target.value })} />
                <Input type="text" placeholder="open" value={loja.open} onChange={e => setLoja({ ...loja, open: e.target.value })} />
                <Input type="text" placeholder="close" value={loja.close} onChange={e => setLoja({ ...loja, close: e.target.value })} />
                <Input type="text" placeholder="description" value={loja.description} onChange={e => setLoja({ ...loja, description: e.target.value })} />
                <Input type="text" placeholder="address" value={loja.address} onChange={e => setLoja({ ...loja, address: e.target.value })} />
                <Input type="text" placeholder="city" value={loja.city} onChange={e => setLoja({ ...loja, city: e.target.value })} />
                <Input type="text" placeholder="postalCode" value={loja.postalCode} onChange={e => setLoja({ ...loja, postalCode: e.target.value })} />
                <Input type="text" placeholder="complement" value={loja.complement} onChange={e => setLoja({ ...loja, complement: e.target.value })} />
                <Button>Envia</Button>
            </Form>
        </Trem>
    )
}

const Input = styled.input`
    margin-top: 10px;
    padding-left: 5px;
    height: 30px;
    border-radius: 10px;

    border: 1px solid;

    width: 250px;
    box-sizing: border-box;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`

const Button = styled.button`
    height: 40px;
    border-radius: 10px;
    margin-top: 10px;

    &:hover {
        cursor: pointer;
    }
`

const Trem = styled.div`
    padding: 20px 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`