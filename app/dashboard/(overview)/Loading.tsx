"use client"
import { cardInfo } from "@/utils/data"
import styled from "styled-components"

const Card = styled.div`
    padding : 10px;
    border-radius : 10px;
    display : flex;
    flex-direction : column;
    margin : 15px;
    box-shadow : 0 0 2px #424242;
`

export default function Loading () {
    return (
    <div style={{display : "grid" , gridTemplateColumns: 'auto auto auto auto' }}>
        
        <Card>
        <div style={{padding : "10px" , background : "#f2f2f2" , borderRadius:"10px",textAlign:"center", border:"1px solid black"}}>
            <div style={{display : "flex", gap : "15px" , alignItems : "center",paddingBottom : "5px" }} ><span></span> </div>
            <span style={{color : "#f2f2f2",background:"gray",padding:"2px 7px",borderRadius:"20px",fontWeight:"bolder"}}></span>
        </div>
        <p style={{color : '#494C4F', fontSize : "14px"}}></p>
    </Card>
    </div>
)}