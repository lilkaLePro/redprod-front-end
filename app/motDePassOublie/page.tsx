'use client'
import { Button } from "@/component/button"
import { ImageIcon } from "lucide-react"
import Link from "next/link"
import styled from "styled-components"

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
  display : flex;
  flex-direction : column;
  gap : 20px;
  background : #F8F8F8;  
  padding : 20px;
  max-width : 400px  
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

export default function Page() {

    return (
        <Main>
             <div>
                <div style={{display : 'flex' , alignItems : 'center' , marginBottom : '20px' , gap :'10px',color : '#F8F8F8' }}>
                <ImageIcon />
                <h1>RED PRODUCT</h1>
            </div>
            <Form>
                <p> Mot de passe oublié ? </p>
                <p> Entrez votre adresse e-mail ci-dessous et nous vous envoyons des instructions sur la façon de modifier votre mot de passe. </p>
                <Label htmlFor="E-mail"> E-mail </Label>
                <Input type="email" id="email" />
                <Button> envoyer </Button>
            </Form>
                <p> revenir a la <Link href='/' style={{color : 'yellow' , textAlign : 'center' }} > conexion</Link> </p>
            </div>
        </Main>
    )
}