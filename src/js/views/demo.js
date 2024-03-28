import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const navigate = useNavigate()
	const { store, actions } = useContext(Context);

	

	return (
		<div className="container">
			<Link to="/newContact">
				<button className="btn btn-primary">Create contact</button>
			</Link>
			
			<ul className="list-group">
				{store.contacts.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between">
							{item.full_name}
							<button className="btn btn-danger" onClick={ () => actions.deleteContact(item.id)}>del</button>
							<button className="btn btn-primary" onClick={ ()=> navigate(`/editContact/${item.id}`)} >Edit</button>
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
