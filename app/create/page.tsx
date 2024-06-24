'use client'
import { Button } from "@/component/button"
import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"
import { ChangeEvent,  useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { useRouter } from "next/navigation"
import api from "@/utils/baseUrl"

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
  display : grid;
  grid-template-column : 2;
  gap : 20px;
  background : #F8F8F8;  
  padding : 20px;
  `
  const Input = styled.input `
  outline : none;
  border : none;
  background : none;
  border : 1px solid #DDDDDD ;
  padding : 6px;
  font-size : 16px;
  font-weight : bolder;
  border-radius : 5px
`
const Label = styled.label `
  color : #494C4F;
  font-size : 13px;
`
const Select = styled.select`
    outline : none;
    border : none;
    background : none;
    border : 1px solid #DDDDDD;
    padding : 6px;
    font-size : 16px;
    font-weight : bold;
    border-radius : 5px
`

type FormChampProps = {
    label : string, type : string , id : string
    value : number | string , onchange : (e : ChangeEvent<HTMLInputElement>) => void;
}

  
interface Value {
    hotelName : string, adresse : string,
    price : string , email : string , tel : string,
}

export default function Page () {
    const [value , setValue]  = useState<Value>({
        hotelName : "", adresse : "",
        price : "" ,email : '' , tel : ""
    })
    const handleChange = (e : ChangeEvent<HTMLInputElement> ) => {
        const input = e.currentTarget;
        setValue({...value , [input.id]: input.value})   
    }
    
    const [curr , setCurr ] = useState("$")
    const [image , setImage ] = useState<File | null >(null)
    const router = useRouter();
    

        const handleSubmit = ((e : ChangeEvent<HTMLFormElement>) => {
            e.preventDefault();
            
            if(!image){ console.log('no file selected') 
                return; }

            const formData = new FormData()
            formData.append('image' , image)
            formData.append('hotelName' , value.hotelName)
            formData.append('price' , value.price)
            formData.append('tel' , value.tel)
            formData.append('email' , value.email)
            formData.append('currency' , curr)
            formData.append('adresse' , value.adresse)
            
            console.log(image)
            
            axios.post(`https://redprod-api.onrender.com/api/hotels/create` , formData , {
                headers : {
                    "Content-Type" : "multipart/form-data",
                    },
                withCredentials : true
            })
            .then(result => console.log("donnés envoyé avec succe " , result))
            .then(res => router.back())
            .catch(error => console.log("y'a eu ereur a la soumition de donné " , error))
            })
            console.log(api)
return (
        <Main>
            <Form onSubmit={handleSubmit}>
                <p style={{display :'flex', alignItems: 'center', gap: '10px'}}>
                    <Link href="/dashboard/listehotels" ><ArrowLeftIcon /></Link> Enregistrer un nouvel hotel </p>
                <div style={{display : 'flex' , gap: '50px'}}>
                    <div style={{display : 'flex', flexDirection : 'column', gap : '20px'}}>
                        <FormChamp label="Hôtel" type="text" id="hotelName" value={value.hotelName} 
                            onchange={handleChange}/>
                        <FormChamp label="E-mail" type="email" id="email" value={value.email} 
                            onchange={handleChange}/>
                        <FormChamp label="prix par nuit" type="text" id="price" value={value.price} 
                            onchange={handleChange}/>
                    </div>
                    <div style={{display : 'flex', flexDirection : 'column', gap : '20px'}}>
                        <FormChamp label="Adress" type="text" id="adresse" value={value.adresse} onchange={handleChange}/>
                        <FormChamp label="telephone" type="number" id="tel" value={value.tel} onchange={handleChange}/>
                        <div style={{display : 'flex' , flexDirection : 'column', gap : '4px'}}>
                            <Label htmlFor='devise'>Devise</Label>
                            <Select  id="currency" value={curr} onChange={((e : ChangeEvent<HTMLSelectElement> ) => {setCurr(e.target.value)})}>
                                <option value="XOF">F XOF</option>
                                <option value="FCFA">FCFA</option>
                                <option value="£">£</option>
                                <option value="$">$</option>
                            </Select>
                        </div>
                    </div>
                </div>  
                    <div>
                        <input type="file" accept=".jpg,.png,.svg" id="image" onChange={(e : ChangeEvent<HTMLInputElement>) => {
                            if(e.target.files && e.target.files.length>0){setImage(e.target.files[0])}
                        }}
                         style={{border : '1px solid #DDDDDD',width : '100%', display:'flex',justifyContent : 'center', alignItems : 'center',padding: '40px'}} />
                    </div>
                    <Button type="submit"> Enregister </Button>
                    {/* ajouter un popup de confirmation */}
            </Form>
        </Main>
    )
}


const FormChamp  : React.FC<FormChampProps> = ({label , type , id , value , onchange }) =>{
    return (
        <div style={{display : 'flex' , flexDirection : 'column', gap : '4px'}}>
            <Label htmlFor={id}>{label} </Label>
            <Input type={type} id={id} value={value} onChange={onchange} />
        </div>
    )}
