'use client'
import { Button } from "@/component/button"
import { ImageIcon } from "lucide-react"
import Link from "next/link"
import { ChangeEvent, FormEvent, useState } from "react"
import styled from "styled-components"
import axios from 'axios'
import Image from "next/image"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

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
  const Input = styled.input `
  outline : none;
  border : none;
  background : none;
  border : 1px solid;
  padding : 6px;
  font-size : 16px;
  font-weight : bold;
  border-radius : 5px
`
const Label = styled.label `
  color : #494C4F;
`
type Data = {
  userName : string ,
  email : string,
  password : string,
}

export default function Page() {
  const [checked , setchecked] = useState<boolean>(false)
  const [data , setData] = useState<Data>({
    userName : "",
    email : "",
    password : ""
  })
  const router = useRouter()
const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
  const input = e.currentTarget;
  setData({...data , [input.name]: input.value})
}

const handleSubmit = async (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await axios.post('https://redprod-api.onrender.com/api/auths/create', data , {
      // headers : {},
      withCredentials : true

    })
    .then(res => console.log('user created' , data))
    .then(res => router.back() )
    console.log(data.userName)
  }
    return (
        <Main>
            <div>
                <div style={{display : 'flex' , alignItems : 'center' , marginBottom : '20px' , gap :'10px',color : '#F8F8F8' }}>
                <Image src={'/redLogo.png'} alt="logo redproduction" width={40} height={40} />
                <h1>RED PRODUCT</h1>
            </div>
            <Form onSubmit={handleSubmit} >
                <p>inscrivez-vous en tant que </p>
                <Label htmlFor="userName">nom complet</Label>
                <Input type="text" id="userName" name="userName"
                    value={data.userName} onChange={handleChange}/>
                <Label htmlFor="email">E-mail</Label>
                <Input type="email" id="email" name="email"
                    value={data.email} onChange={handleChange}/>
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" name="password"
                    value={data.password} onChange={handleChange}/>
            
            <div style={{display : 'flex' , gap : '10px' , alignItems : 'center'}}>
                <input type="checkbox" checked={checked} required
                  onChange={(e : ChangeEvent<HTMLInputElement>) => setchecked(e.target.checked)}/>
                <p> Accepter la politique de confidentialite </p>
            </div>
            
            <Button type="submit">s'inscrir </Button>
            </Form>
            <p >vous avez deja un compte ? <Link href='/' style={{textAlign : 'center' , color : 'yellow'}} > se conecter </Link> </p>
            
            </div>
        </Main>
    )
}
