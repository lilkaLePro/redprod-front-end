'use client'
import styled from "styled-components"

const Buton = styled.button `
    border : none;
    background : #494C4F ;
    font-size : 17px;
    color : white;
    padding-left : 10px;
    padding : 10px;
    border-radius : 5px;
    cursor : pointer;
`
interface ButtonProps {
    children : React.ReactNode;
    type?: "button" | "submit" | "reset" ;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({children , type = "button" , disabled}) => {

    return (
            <Buton type={type} disabled={disabled} > {children} </Buton>
    )
}