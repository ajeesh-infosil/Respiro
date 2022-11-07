import React,{useState,useRef} from 'react';
import emailjs from '@emailjs/browser';

export default function Register() {

    const form = useRef();

    const [type, setType] = useState(null);

    const [full_name, setFull_name] = useState(null);
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState(null);

    const handleInput = event => {

        const{id,value} = event.target;
        if(id === "full_name"){
            setFull_name(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "phone"){
            setPhone(value);
        }
    }

    const handleChange = (value) => {
        
        setType(value);
        
    };

    const handleSubmit = (event) =>{

        event.preventDefault()
        
        emailjs.sendForm('service_i89biv5', 'template_eomg6sa', form.current, 'XPHCO-DswPDRzF0x7')
          .then((result) => {
              alert("Mail send Sucessfuly")
          }, (error) => {
              alert("Something went wrong")
          });

    }




  return (
    <>
   
<div className="Auth-form-container">
                <form className="Auth-form" ref={form} onSubmit={handleSubmit}>
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Register Now</h3>
                    
                        <div className="form-group mt-3">
                            <label>Name...</label>
                            <br />
                            <input
                                id='full_name'
                                name='full_name'
                                type="name"
                                className="w3-input"
                                placeholder="Enter name"
                                onChange={handleInput} required
                            />
                        </div> <div className="form-group mt-3">
                            <label>phone...</label>
                            <br />
                            <input
                                id='phone'
                                name='phone'
                                type="phone"
                                className="w3-input"
                                placeholder="Enter phone"
                                onChange={handleInput} required
                            />
                        </div> <div className="form-group mt-3">
                            <label>Email...</label>
                            <br />
                            <input
                                id='email'
                                name='email'
                                type="email"
                                className="w3-input"
                                placeholder="Enter email"
                                onChange={handleInput} required
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label for="item">Choose a Plan</label>
                            
                            <select className="w3-input" name="type" id="item" onChange={handleChange}>
                                <option value="Basic">Basic</option>
                                <option value="Standard">Standard</option>
                                <option value="Premium">Premium</option>
                                <option value="Super Premium">Super Premium</option>
                      </select>
                        </div><br />
                        <div className="d-grid gap-2 mt-3">
                            <button className="button" type='submit'>
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
      </>
  );
}
