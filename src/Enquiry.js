import {useState, useRef} from "react";
import axios from "axios";

export default function Enquiry(){

    const rName = useRef();
    const [ name,setName ] = useState("");
    const [ phone,setPhone ] = useState("");
    const [ query,setQuery ] = useState("");
        
    const hName = (event) => {setName(event.target.value);}
    const hPhone = (event) => {setPhone(event.target.value);}
    const hQuery = (event) => {setQuery(event.target.value);}
    
    const save = (event) => {
        event.preventDefault();
        let data = {name, phone, query};
        let urladd = "https://en-backend-1w7ibe1md-vishalgori2208.vercel.app/save";
        axios.post(urladd, data)
        .then(res => {
            console.log(res.data)
            alert(res.data);
            setName("");
            setPhone("");
            setQuery("");
            rName.current.focus();
        })
        .catch(err => console.log(err));
    }

    return(
        <>
        <center>
        <h1>Fill the Form</h1>
        <form onSubmit={save}>
            <input type="text" placeholder="Enter your name " onChange={hName} value={name} ref={rName}/>
            <br/><br/>
            <input type="number" placeholder="Enter Phone No" onChange={hPhone} value={phone}/>
            <br/><br/>
            <textarea placeholder="Enter your query" rows={5} cols={30} onChange={hQuery} value={query}></textarea>
            <br/><br/>
            <input type="submit" value="Save"/>
        </form>
        </center>
        </>
    );

}