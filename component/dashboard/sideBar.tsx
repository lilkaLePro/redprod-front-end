'use client'
import { Hotel, LayoutDashboard } from "lucide-react"
import Link from "next/link"
import styled from "styled-components"
import { Profil } from "./profil"
import clsx from "clsx"
import { usePathname } from "next/navigation"
import Image from "next/image"


const Section = styled.div `
    width : 250px;
    background : #494C4F;
    height : 100vh;
   
    `
    interface NavLink {
        name : string ; link : string , icon : React.ComponentType
    }
    
    const navLink : NavLink[] = [
        {name : 'Dashboard' , link : '/dashboard' , icon : LayoutDashboard},
        {name : 'liste des hôtels' , link : '/dashboard/listehotels' , icon : Hotel}
    ]
const LinkWrap = styled.div`
    display : flex ;
    alignItems : center ; 
    marginBottom : 20px ; 
    gap : 10px ; 
    color : #F8F8F8;
    padding : 15px;
    padding-left : 20px;
`

const Links = styled.div `
    display : flex;
    flex-direction : column;
`
export const SideBar = () => {
    const pathname = usePathname()

    return (

        <Section>
                <div style={{display : 'flex' , alignItems : 'center' , marginBottom : '20px' , gap :'10px',color : '#F8F8F8', padding : '20px' }}>
                    <Image src={'/redLogo.png'} alt="logo redproduction" width={40} height={40} />
                    <h1 style={{fontSize : '20px', color : 'F8F8F8'}}>RED PRODUCT</h1>
                </div>
                <Links >
                    {
                        navLink.map((link , index) => {
                            const Icon = link.icon;
                            return (<LinkWrap key={index} >
                                <Link href={link.link} style={{display : 'flex' , alignItems : 'center' , gap : '10px'}}>
                                    <Icon />
                                    <p>{link.name} </p>
                                </Link>
                            </LinkWrap> )
                        })
                    }
                </Links>
                <Profil />
        </Section>       
    )
}