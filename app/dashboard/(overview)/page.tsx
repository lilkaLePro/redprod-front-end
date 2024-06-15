'use client'
import { cardInfo } from "@/utils/data"
import { Bell, LogOut, Search } from "lucide-react"
import Image from "next/image"
import styled from "styled-components"
import { Suspense } from "react"
import Loading from "./Loading"

const P = styled.p`
    font-size : 25px
`
const Bar = styled.div`
    padding : 15px;
    border-bottom : 1px solid #424242
`

const Input = styled.input`
    border : none;
    outline : none
`
const Card = styled.div`
    padding : 10px;
    border-radius : 10px;
    display : flex;
    flex-direction : column;
    margin : 15px;
    box-shadow : 0 0 2px #424242;
    `
    // color : ${props => cardInfo.map(color => color.color) }


export default function () {

    return (
        <div >
            <div style={{display:'flex',justifyContent : 'space-between', alignItems : 'center' , padding : "15px", borderBottom : '1px solid #F8F8F8'}}>
                <div style={{fontWeight : 'bold'}}> Dashboard </div>
                
                <div  style={{display:'flex',gap : '15px', alignItems : 'center'}}>
                
                <div style={{display : 'flex' , alignItems : 'center' , gap : '10px' , border : '1px solid #F8F8F8' , borderRadius : '10px',padding : '5px 10px'}}>
                    <Search />
                    <Input type="text" placeholder="Rechercher" />
                </div>
                
                <div> <Bell /> <span>3</span> </div>
                <Image src='/photo-profile.jpg' width={30} height={30} alt="image de profil" style={{borderRadius : '100%'}} />
                <LogOut />
            </div>
        </div>
            <Bar>
                <P> Binevenu sur RED Product </P>
                <p style={{color : '#494C4F' , fontSize : '14px'}}> le meilleur endroit pour progresser </p>
            </Bar>
            <div style={{padding : '20px'}}  >
                <Suspense fallback={<Loading />}>
                    <DashboardCards />            
                </Suspense>
            </div>
        </div>
    )
}
const DashboardCards = () => {

    return (<>
         <div style={{display : "grid" , gridTemplateColumns: 'auto auto auto auto' }}>
                {
                    cardInfo.map((card , index) => {
                        const Icon = card.icon;
                        return (
                            <Card key={index}>
                                <div  style={{padding : "10px" , background : "#f2f2f2" , borderRadius:"10px",textAlign:"center"}}>
                                    <div style={{display : "flex", gap : "15px" , alignItems : "center",paddingBottom : "5px" }} ><Icon /> <span>{card.name}</span> </div>
                                    <span style={{color : "#f2f2f2",background:"gray",padding:"2px 7px",borderRadius:"20px",fontWeight:"bolder"}}>{card.num} </span>
                                </div>
                                <p style={{color : '#494C4F', fontSize : "14px"}}> {card.desc} </p>
                            </Card>
                        )
                    })
                }
            </div>
    </>)
}