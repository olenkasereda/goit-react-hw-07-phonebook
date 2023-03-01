import { selectFilter } from 'redux/selectors';
import ContactItem from '../ContactItem';
import { ListContacts } from './ContactsList.styled';

import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const filter = useSelector(selectFilter);

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
        ? filteredContacts.map(({ name, phone, id }) => (
            <ContactItem key={id} name={name} phone={phone} id={id} />
          ))
        : 'No contacts'}
    </ListContacts>
  );
};

export default ContactsList;
