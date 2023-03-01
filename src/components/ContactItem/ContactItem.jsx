import { PropTypes } from 'prop-types';

import { ItemContact, ButtonDeleteContact } from './ContactItem.styled';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

const ContactItem = contact => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <>
      <ItemContact>
        <p>
          {contact.name}: {contact.phone}
        </p>
        <ButtonDeleteContact
          type="button"
          onClick={() => handleDelete(contact.id)}
        >
          Delete
        </ButtonDeleteContact>
      </ItemContact>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactItem;
