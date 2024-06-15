'use client'
import {SideBar} from "@/component/dashboard/sideBar"
import { TopBar } from "@/component/dashboard/topBar"
import styled from "styled-components"

const DashLayout = styled.div `
    display : flex;
`

export default function Layout({children} : {children : React.ReactNode}) {

    return (
        <DashLayout>
            <div style={{boxShadow : "0 0 5px black"}}>
                <SideBar />
                {/* composant profils */}
            </div>
            <div style={{width : '100%' }}>
                {children} 
            </div>
        </DashLayout>
    )
}