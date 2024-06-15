import { FormInput, GroupIcon, Hotel, Mail, MessageCircle, UsersIcon } from "lucide-react";
import { CardInfo, HotelsCards } from "./definitions"


export const cardInfo : CardInfo[] = [
    { name : 'Formulaires' , num : 125 , icon : FormInput , desc : 'une petite description des cards', color : "red"},
    { name : 'Message' , num : 25 , icon : MessageCircle , desc : 'une petite description des cards', color : "red"},
    { name : 'Email' , num : 525 , icon : Mail , desc : 'une petite description des cards', color : "red"},
    { name : 'hôtel' , num : 8 , icon : Hotel , desc : 'une petite description des cards', color : "red"},
    { name : 'Entité' , num : 125 , icon : GroupIcon , desc : 'une petite description des cards', color : "red"},
]

export const hotelsCards : HotelsCards[] = [
    {name : "Hotel Terrou Bi" , adresse : "Boulevard Martin Luter King" , price : "25.000 XOF", image: "/hotels/radison.png"},
    {name : "Hotel Terrou Bi" , adresse : "Boulevard Martin Luter King" , price : "25.000 XOF", image: "/hotels/radison.png"},
    {name : "Hotel Terrou Bi" , adresse : "Boulevard Martin Luter King" , price : "25.000 XOF", image: "/hotels/radison.png"},
    {name : "Hotel Terrou Bi" , adresse : "Boulevard Martin Luter King" , price : "25.000 XOF", image: "/hotels/radison.png"},
    {name : "Hotel Terrou Bi" , adresse : "Boulevard Martin Luter King" , price : "25.000 XOF", image: "/hotels/radison.png"},
    {name : "Hotel Terrou Bi" , adresse : "Boulevard Martin Luter King" , price : "25.000 XOF", image: "/hotels/radison.png"},
    {name : "Hotel Terrou Bi" , adresse : "Boulevard Martin Luter King" , price : "25.000 XOF", image: "/hotels/radison.png"},
    {name : "Hotel Terrou Bi" , adresse : "Boulevard Martin Luter King" , price : "25.000 XOF", image: "/hotels/radison.png"}
]
