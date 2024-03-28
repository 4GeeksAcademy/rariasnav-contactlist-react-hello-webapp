import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Home = () => {
	const navigate = useNavigate()
	const { store, actions } = useContext(Context);

	

	return (
		<div className="container">
			<Link to="/newContact">
				<button className="btn btn-primary my-3">Create contact</button>
			</Link>
			
			<ul className="list-group">
				{store.contacts.map((item, index) => {
					return (
						<li	key={index}	className="list-group-item d-flex justify-content-between">						
							<div className="card mb-3" style={{width: "540px"}}>								
								<div className="row g-0">
									<div className="col-md-4 d-flex">
										<div className="justify-content-center m-auto">
											<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/1024px-Google_Contacts_icon.svg.png" className="img-fluid rounded-start" alt="..." style={{width: "200px"}}/>
										</div>
										
									</div>
									<div className="col-md-4">
										<div className="card-body">
											<h5 className="card-title">{item.full_name}</h5>
											<div className="card-text">
												<p className="card-text">Phone number: {item.phone}</p>
												<p className="card-text">Email: {item.email}</p>
												<p className="card-text">Address: {item.address}</p>
											</div>									
										</div>
									</div>
									<div className="col-md-4">
										<div className="text-end"> 
											<button className="btn" onClick={ () => actions.deleteContact(item.id)}><i class="fa-solid fa-trash"></i></button>
											<button className="btn" onClick={ ()=> navigate(`/editContact/${item.id}`)} ><i class="fa-solid fa-pen"></i></button>
										</div>										
									</div>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
