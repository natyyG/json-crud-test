import React from 'react'

function ContactList({contacts, removeContactHandler}) {
  return (
    <div>
        {contacts.map(contact => {
            return(
                <div key={contact.id}>
                    <h1>{contact.name}</h1>
                    <p>{contact.disc}</p> 
                    <button onClick={() => {removeContactHandler(contact.id)}}>remove</button>   
                </div>
            )
        })}
    </div>
  )
}

export default ContactList