import React from 'react';
import ContactItem from '../ContactItem';
import { ListContacts } from './ContactsList.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredContacts = getFilteredContacts(contacts, filter);
  return (
    <ListContacts>
      {contacts.length
        ? filteredContacts.map(({ name, number, id }) => (
            <ContactItem key={id} name={name} number={number} id={id} />
          ))
        : 'No contacts'}
    </ListContacts>
  );
};

export default ContactsList;
