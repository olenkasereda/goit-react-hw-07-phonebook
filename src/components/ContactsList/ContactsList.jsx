import ContactItem from '../ContactItem';
import { ListContacts } from './ContactsList.styled';

import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ListContacts>
      {contacts.length
        ? contacts.map(({ name, phone, id }) => (
            <ContactItem key={id} name={name} phone={phone} id={id} />
          ))
        : 'No contacts'}
    </ListContacts>
  );
};

export default ContactsList;
