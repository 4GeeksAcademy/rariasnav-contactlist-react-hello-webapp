import { stringify } from "query-string";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: []
		},
		actions: {
			deleteContact: async (indexDelete) => {
				try {
					const store = getStore()
					const requestOptions = {
						method: "DELETE"
					}
					const response = await fetch("https://playground.4geeks.com/apis/fake/contact/" + indexDelete, requestOptions)
					if (response.ok) {
						try {
							const response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/putin_agenda")
							const data = await response.json()
							if (response.ok) {
								setStore( {contacts: data} )
							}
						} catch (error) {
							
						}
					}
				} catch (error) {
					
				}			
			},
			editContact: async (item, contactIdToEdit) => {
				try {
					const store = getStore()
					const requestOptions = {
						method : "PUT",
						headers : { "Content-Type" : "application/json" },
						body : JSON.stringify(item)
					}
					const response = await fetch("https://playground.4geeks.com/apis/fake/contact/" + contactIdToEdit, requestOptions)
					if(response.ok){
						try {
							const response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/putin_agenda")
							const data = await response.json()
							if( response.ok){
								setStore( {contacts: data} )
								const res = await response.json()
							}
						} catch (error) {
							
						}

					}
				} catch (error) {
					
				}
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			createContact: async (fullName, email, agendaSlug, address, phone) => {				
				try {
					const store = getStore()
					const requestOptions = {
						method: "POST",
						headers: { "Content-Type" : "application/json" },
						body: JSON.stringify({
							"full_name" : fullName,
							"email" : email,
							"agenda_slug" : agendaSlug,
							"address" : address,
							"phone" : phone
						})
					}
					const response = await fetch("https://playground.4geeks.com/apis/fake/contact/", requestOptions)
					const data = await response.json()

					if( response.ok ){
						setStore({ contacts: data })
					}
				} catch (error) {
					
				}
			},
			loadSomeData: async () => {
				try {
					const store = getStore()
					const response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/putin_agenda")
					const data = await response.json()
					if(response.ok){
						setStore({ contacts: data})
					}
					
				} catch (error) {
					
				}
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
