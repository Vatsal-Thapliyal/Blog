import './contact.css'
// import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';

export default function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
   
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault(); //just to prevent refreshing of page every time on submission

        setError(false);
        try {
            const res = await axios.post("http://localhost:5000/send", {    //need to handle error in register page
                name,
                email,
                phone,
                message
            });
            window.alert("Message sent Successfully");
            res.data && window.location.replace("/");
           
        } catch (err) {
            setError(true);
            window.alert("Message not Sent ");
            window.location.replace("/");
            // console.log(err);
        }
    };

    return (
       

           <div className="registercontainer">
            <span className="registerTitle">Contact US</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label >Name</label>
                <input type="text" className="registerInput" placeholder="Enter Your name..."
                    onChange={e => setName(e.target.value)}
                />
                <label >Email</label>
                <input type="text" className="registerInput" placeholder="Enter Your email..."
                    onChange={e => setEmail(e.target.value)}
                />
                <label >Phone</label>
                <input type="number" className="registerInput" placeholder="Enter Your 10 digit Phone Number..."
                    onChange={e => setPhone(e.target.value)}
                />
                <label >Enter Message</label>
                <textarea  className="text-area" placeholder="Enter your Message || Suggestions"
                    onChange={e => setMessage(e.target.value)}
                />
                
                
                <button className="registerButton" type="submit">Submit</button>
            </form>
            
            {error && <span className="error">Something Went Wrong!</span>}  
            
        </div>
    )
}
