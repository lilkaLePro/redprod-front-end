"use client"
import styled from "styled-components";
import { Button } from "@/component/button";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Main = styled.main `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
  background : #494C4F;
`
const Form = styled.form `
  max-width : 60vh;
  display : flex;
  flex-direction : column;
  gap : 20px;
  background : #F8F8F8;  
  padding : 20px;

  `
const Wrapper = styled.div `
`
const Input = styled.input `
  outline :none ;
  border : none ;
  background : none ;
  border : 2px solid #494C4F ;
  padding : 6px ;
  font-size : 16px ;
  font-weight : bold;
  border-radius : 5px
`
const Label = styled.label `
  color : #494C4F;
`
interface Data {
  email : string, 
  password : string
}

export default function Home() {
  const [data , setData ] = useState<Data>({
    email : "",
    password : ""
  })
  const [checked , setchecked ] = useState((false))
  const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    setData({...data , [input.name]: input.value})
  }
  const [error , setError] = useState('')

  const router = useRouter()

  const handleSubmit = async (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios.post('http://localhost:8080/api/auths/connect/email' , data , {
      headers : {'Content-Type': 'application/json', "Accept" : "aplication/json" },
      "withCredentials" : true
    })
    // .then(res => console.log("cors resolue" , data) )
    .then(res => router.push('/dashboard') )
    .catch(err => console.log(err , "peu pas conecter"))
  }

  return (
    <Main>

      <Wrapper>
      <div style={{display : 'flex' , alignItems : 'center' , marginBottom : '20px' , gap :'10px',color : '#F8F8F8',justifyContent:'center' }}>
        <Image src={'/redLogo.png'} alt="logo redproduction" width={40} height={40} />
        <h1>RED PRODUCT</h1>
      </div>
        <Form onSubmit={handleSubmit} action="/app">
          <p>Connectez-vous en tant que administrateur</p>

          <Label htmlFor="mail">E-mail</Label>
          <Input type="text" id="mail"name="email"
               value={data.email} onChange={handleChange}/>

          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password"  name="password"
               value={data.password} onChange={handleChange}/>

          <div style={{display : 'flex' , gap : '10px' , alignItems : 'center'}}>
            <input type="checkbox" checked={checked} width={60}
            onChange={(e) => setchecked(e.target.checked)} />
            <p> Gardez moi connecté </p>
          </div>

          <Button type="submit" disabled={!checked} > se connecter </Button>
        </Form>
        <p style={{textAlign : 'center' , paddingTop : "10px"}}><Link href='/motDePassOublie' style={{textAlign : 'center' , color : 'yellow' , paddingTop : '15px'}}> mot de pass oublié ? </Link></p>
        <p style={{color : 'white' , textAlign : 'center'}} >vous n'avez pas de compte ? <Link href='/inscription' style={{textAlign : 'center' , color : 'yellow'}} > s'inscrire </Link> </p>
      </Wrapper>
    </Main>
  );
}
