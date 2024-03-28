import React, {useState, useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import "../../styles/demo.css";

export const EditContact = () => {
    const navigate = useNavigate();
    const {store, actions} = useContext(Context);
    const {contactIdToEdit} = useParams()
    const [contactEdit, setContactEdit] = useState({
        "full_name" : "",
        "email" : "",
        "agenda_slug" : "putin_agenda",
        "address" : "",
        "phone" : ""
    })    

    const findContact = () => {
        let result = store.contacts.find( (item) => item.id == contactIdToEdit)
        setContactEdit({
            "full_name" : result.full_name,
            "email" : result.email,
            "agenda_slug" : "putin_agenda",
            "address" : result.address,
            "phone" : result.phone
        })
    }

    useEffect( () => {
        findContact()
    }, [] )

    const handleChange = (event) => {
        setContactEdit({
            ...contactEdit, [event.target.name] : event.target.value
        })
    }

    return(
        <div className="container">
                               
            <div className="body m-5">
            <p>Editar contacto </p> 
                <form>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="fullName"
                    value={contactEdit.full_name} onChange={handleChange} name="full_name" 
                    placeholder="Enter full name" required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" id="email"
                    value={contactEdit.email} onChange={handleChange} name="email" 
                    placeholder="Enter email" required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" id="address"
                    value={contactEdit.address} onChange={handleChange} name="address"
                    placeholder="Enter address" required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input type="email" className="form-control" id="phone"
                    value={contactEdit.phone} onChange={handleChange} name="phone"
                    placeholder="Enter phone" required/>
                </div>
                <button className="btn btn-primary" onClick={ () => navigate("/")}>Back</button>
                <Link to="/demo">
                    <button className="btn btn-primary mx-2" onClick={ ()=> actions.editContact(contactEdit, contactIdToEdit) }>Save</button>
                </Link>                
                </form>
            </div>
        </div>
    )
}