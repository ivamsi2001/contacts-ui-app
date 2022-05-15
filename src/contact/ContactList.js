import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props)=>{
    
    const deleteContact = (id) =>{
        props.removeContactHandler(id);
    };

    const renderContacts = props.contacts.map((contact) =>{
        return <ContactCard 
                contact={contact} 
                key={contact.id} 
                removeContactHandler={deleteContact}/>;
    });

    return <div className="ui celled list">{renderContacts}</div>
}
export default ContactList;