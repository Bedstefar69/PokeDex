import Navbar from "./Navbar/Navbar";
import meme from "../img/meme.jpg"




export default function About(){
    
    return(
        <>
        <Navbar></Navbar>
        <div className="About">
        <img src={ meme } alt='flemming'/>
        </div>


   
    </>
    ) 
}