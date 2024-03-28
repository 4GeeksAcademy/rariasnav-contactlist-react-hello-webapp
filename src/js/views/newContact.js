import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";


export const NewContact = () => {
    const {store, actions} = useContext(Context)
    const navigate = useNavigate()
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [agendaSlug, setAgendaSlug] = useState("putin_agenda")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    

    const handleChange = (event) => {
        setAddContact({
            ...addContact, [event.target.name] : event.target.value
        })
    }

    async function saveContact(e) {
        e.preventDefault()
        const result = await actions.createContact(fullName, email, agendaSlug, address, phone) 
        if( result == 201){
            navigate("/home")
        }       
    }

    return(
        <div className="container">
            <div className="body m-5">
                <p>Create a new contact</p>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Full name</label>
                        <input type="text" className="form-control" value={fullName} name="full_name" required
                        onChange={ (e) => setFullName(e.target.value) }/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="text" className="form-control" value={email} name="email" required onChange={ (e) => setEmail(e.target.value) }/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" >Address</label>
                        <input type="text" className="form-control" value={address} name="address" required onChange={ (e) => setAddress(e.target.value) }/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone</label>
                        <input type="number" className="form-control" value={phone} name="phone" required onChange={ (e) => setPhone(e.target.value) }/>
                    </div>
                    <button className="btn btn-primary" onClick={ ()=> navigate("/")}>Back</button>
                    <Link to="/home">
                        <button className="btn btn-primary mx-2" onClick={ (e)=>saveContact(e)}>Save</button>
                    </Link>        
                    
                   
                </form>
            </div>
        </div>
    )
}