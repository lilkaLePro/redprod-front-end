'use client'
import { Bell, LogOut, Search } from "lucide-react"
import Image from "next/image"
import styled from "styled-components"

const Input = styled.input`
    border : none ;
    outline : none;
`

export const TopBar = () => {

    return (
        <div style={{display:'flex',justifyContent : 'space-between', alignItems : 'center' , paddingLeft : '10px' , paddingRight : '10px', borderBottom : '1px solid #F8F8F8'}}>
                <div style={{fontWeight : 'bold'}}> Dashboard </div>
                
                <div  style={{display:'flex',gap : '15px', alignItems : 'center'}}>
                
                <div style={{display : 'flex' , alignItems : 'center' , gap : '10px' , border : '1px solid #F8F8F8' , borderRadius : '10px',padding : '10px'}}>
                    <Search />
                    <Input type="text" placeholder="Rechercher" />
                </div>
                
                <div> <Bell /> <span >3</span> </div>
                <Image src='/' width={50} height={50} alt="image de profil" style={{borderRadius : '100%'}} />
                <LogOut />
            </div>
        </div>
    )
}