import axios from "axios";
import { useEffect, useState } from "react";
import styled from 'styled-components';
import Input from "../shared/Input";
import Button from "../shared/Button";


export default function PersonalComponent() {

  const [userData,setUserData] = useState(null);
  const [change,setChange] = useState(true);

    // const id = localStorage.getItem("id");
    useEffect(()=>{
      const INFO_USER_URL = `https://bicare-hackathon.herokuapp.com/personal/3`;
      const promise = axios.get(INFO_USER_URL);
      
      promise
          .then(response=>{
              const {data}= response;
              setUserData(data[0]); 
          })
          .catch(err=>{
              alert("Erro!");
          });
    },[]);
  return (
    <>
      <Infos>
        
        <div className='photo-container'>
          <div className='photo'>
          {userData ? userData.name[0].toUpperCase():""}
          </div>
        </div>
        <p><strong>Dados do usuario</strong></p>
        <div className='infos'>
        <Input
          type='text'
          value={userData?.name}
          disabled={change ? "disable" : ""}
          required
          autoComplete='on'
        />
        <Input
          type='text'
          value={userData?.email}
          disabled={change ? "disable" : ""}
          required
          autoComplete='on'
        />
        <Input
          type='text'
          value={userData?.phone}
          disabled={change ? "disable" : ""}
          required
          autoComplete='on'
        />
        <Input
          type='text'
          value={userData?.address?.adress}
          disabled={change ? "disable" : ""}
          required
          autoComplete='on'
        />
        <Input
          type='text'
          value={userData?.address?.city}
          disabled={change ? "disable" : ""}
          required
          autoComplete='on'
        />
        <Input
          type='text'
          value={formatZipCode(userData?.address?.postalCode)}
          disabled={change ? "disable" : ""}
          required
          autoComplete='on'
        />
        <Input
          type='text'
          value={userData?.address?.complement}
          disabled={change ? "disable" : ""}
          required
          autoComplete='on'
        />
        <div className="button">
          <Button onClick={()=>setChange(!change)}>Alterar dados</Button>
        </div>
        </div>
      </Infos>
    </>
  );
}

function formatZipCode(str){
	var re = /^([\d]{2})\.*([\d]{3})-*([\d]{3})/;

	if(re.test(str)){
		return str.replace(re,"$1.$2-$3");
	}
	
	return "";
}

const Infos = styled.div`
  display: flex;
  width:90vw;
  height:80vh;
  height:fit-content;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
  width:94vw;
  min-height: 350px;
  background-color: white;
  border-radius:20px;
  padding: 20px 30px;
  .photo-container {
    display: flex;
    justify-content: end;
  }
  strong {
    font-weight: 700;
  }

  .button{
    margin-top:6px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .photo {
    display:flex;
    justify-content:center;
    align-items:center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #4F4F4F;
    font-size:75px;
    color:#FFF;
  }

  p{
    font-family: 'Roboto';
    font-weight: 300;
    font-size: 20px;
    line-height: 1.4em;
    letter-spacing: 0.07em;
    margin-top: 10px;

  }
  .infos {
    p {
      font-family: 'Roboto';
      font-weight: 300;
      font-size: 18px;
      line-height: 1.4em;
      letter-spacing: 0.07em;
      margin-top: 10px;
      
      strong {
          font-weight: 700;
      }
    }
  }
`;



// const Input = styled.input`
//     width: 300px;
//     height: 45px;
//     background-color:#C0C0C0;
//     border: solid 1px #D5D5D5;
//     border-radius:20px;
//     padding:20px;
//     margin-left:30px;
//     margin-right:30px;
//     margin-bottom: 6px;
//     color:#000;
//     font-family: 'Roboto';
//       font-weight: 300;
//       font-size: 18px;
//       line-height: 1.4em;
//       letter-spacing: 0.07em;
//       margin-top: 10px;
//       strong {
//           font-weight: 600;
//       }
// `;

// const Button = styled.button`
//     width: 150px;
//     height: 45px;
//     background-color: #4F4F4F;
//     border-radius:20px;
//     border: none;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;
//     color: #FFF;
//     padding: 14px;
//     font-size: 19px;
//     line-height: 26px;

// `;