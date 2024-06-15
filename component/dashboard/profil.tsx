'use client'
import styled from "styled-components"

const Pwrapper = styled.div `
    color : white;
    display : flex;
    align-items : center;
    padding : 10px 20px;
    gap : 20px;
    margin-top : 50vh;
    border-top : 1px solid gray;

`
const ImageW = styled.div`
    width : 40px;
    height : 40px;
    border-radius : 100%;
    border : 1px solid white ;
`
const Name = styled.span`
    font-size : 12px;
    font-weight : 600;
`
const Tag = styled.span `
    font-size : 10px
`
const TagPoint = styled.div `
    width : 10px;
    height : 10px;
    background : green;
    border-radius : 100%
`

export const Profil = () => {

    return (
        <Pwrapper >
            <ImageW>
                
            </ImageW>
            <div>
                <Name> Mohamed Diallo </Name>
                <div style={{display : 'flex' , gap : '10px', padding : '5px 5px'}}>
                    <TagPoint></TagPoint>
                    <Tag>en ligne</Tag>
                </div>
            </div>
        </Pwrapper>
    )
}