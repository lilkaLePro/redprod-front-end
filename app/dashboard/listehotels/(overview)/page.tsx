'use client'
import { HotelsData } from "@/utils/definitions"
import axios from "axios"
import { Bell, LogOut, Plus, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Suspense, useEffect, useState } from "react"
import styled from "styled-components"
import { ErrorBoundary } from "react-error-boundary"
import Loading from "../../(overview)/Loading"
import imgLoader from '../../../../utils/imgloader'
import api from "@/utils/baseUrl"

const P = styled.p`
    font-size : 25px;
    font-weight : 300;
    display : inline-block;
    padding : 15px;
`
const Bar = styled.div`
    padding : 15px;
    border-bottom : 1px solid #424242;
    display : flex;
    justify-content : space-between;
    align-items : center
`
const Input = styled.input`
    border : none;
    outline : none;
`
const CreateButton = styled.button`
border : none;
background : none;
font-size : 15px
`

export default function Page() {

    return (
        <div> 
            <div style={{display:'flex',justifyContent : 'space-between', alignItems : 'center' , padding : "10px" , borderBottom : '1px solid #F8F8F8'}}>
                <div style={{fontWeight : 'bold'}}> listes des hôtels </div>
                
            <div  style={{display:'flex',gap : '15px', alignItems : 'center'}}>
                <div style={{display : 'flex' , alignItems : 'center' , gap : '10px' , border : '1px solid ' , borderRadius : '10px',paddingLeft : '10px'}}>
                    <Search />
                    <Input type="text" placeholder="Rechercher" />
                </div>
                
                <div> <Bell /> <span style={{color : "red" , fontWeight:"bold"}}>3</span> </div>
                <Image src='/photo-profile.jpg' width={35} height={35} alt="image de profil" style={{borderRadius : '100%'}} />
                <LogOut />
            </div>
        </div>
           <Bar>
                <P> Hôtels <span style={{fontSize : '20px'}}> 8 </span> </P>
                <div style={{display : 'flex', justifyContent:'center',alignItems:'center',border:'1px solid',borderRadius:'5px',gap:'4px',padding: "0px 10px",cursor : "pointer",height:"30px"}}>
                    <Plus />
                    <CreateButton> 
                        <Link href="/create" >Enregistrer un hôtel</Link>    
                    </CreateButton>
                </div>
            </Bar> 
            <Suspense fallback={<Loading />}>
                <HotelsCard />
            </Suspense>

        </div>
    )
}

const HotelsCard = () => {
    
    const [hotelsData , setHotelsData ] = useState<HotelsData[]>()

    useEffect(() => {
    
    const wait = () => {
        setTimeout(() => {
            fetch(`https://redprod-api.onrender.com/api/hotels/getHotels`)
            .then(res => res.json())
            .then(data => setHotelsData(data))
        }, 0);
    }
    wait()
    }, [])  



    return (<>
        <div style={{display:"flex" , padding: "10px",height:"78vh",overflow:"scroll"}}>
        {hotelsData &&
            hotelsData.map((data , index) => (
                <div key={index} style={{boxShadow:"0px 0px 10px black", borderRadius:"12px", content:"contents",height:"15vh" }}>
                    <ErrorBoundary fallback={
                    <div style={{width : "250px" , height : "250px", border : "1px solid",borderTopLeftRadius:"20px",borderTopRightRadius:"20px"}}>
                        <p>error</p>
                    </div>
                    }>
                        <Image src={data.image} width={250} loader={imgLoader}
                            height={200} alt="radison hotel image" style={{borderTopRightRadius : "10px",borderTopLeftRadius : "10px"}}/>
                    </ErrorBoundary>

                    <div style={{padding : "10px"}}>
                        <p style={{fontSize : "12px" , color : "darkred"}}>{data.adresse} </p>
                        <p style={{fontWeight : "bold" , fontSize:"16px"}}>{data.hotelName} </p>
                        <p style={{fontSize : "10px", padding:"10px 0px",fontWeight:"bolder"}}>{data.price}{data.currency} par nuit </p>
                    </div>
                </div>
                ))
        }
    </div>
    
        </>)
}