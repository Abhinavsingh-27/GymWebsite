import React, { useState } from 'react'
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify'; 
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendData = async(e)=>{
    e.preventDefault();  //prevent page reloading
    setLoading(true);
    try{
      const {data} = await axios.post("http://localhost:4000/api/v1/reservation/send", { name,  email , message}, 
        { withCredentials: true, headers: {"Content-type": "application/json"}})
        
      toast.success(data.message);  // Show success toast notification
         
      setName("");
      setEmail("");
      setMessage("");

    }catch (error) {
      setLoading(false);
      const errorMessage = error.response?.data?.message || "An error occurred. Please try again.";
      toast.error(errorMessage);
    }
    finally {
      setLoading(false);
    }
  }
  return (
    <section className='contact'>
      <form onSubmit={sendData}>
        <h1>CONTACT US</h1>
        <div>
          <label>Name</label>
          <input type='text' value={name} onChange={(e)=> setName(e.target.value)} />
        </div>
        <div>
          <label>Email</label>
          <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)} />
        </div>
        <div>
          <label>Message</label>
          <input type='text' value={message} onChange={(e)=> setMessage(e.target.value)} />
        </div>
        <button type='submit' disabled = {loading} 
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px"
          }}
        >
          {loading && <ClipLoader size={20} colors="white"/>}
          Send Message
        </button>
      </form>
      
    </section>
  )
}

export default Contact
