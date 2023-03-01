import React from 'react';
import { PropTypes } from 'prop-types';

import { ItemContact, ButtonDeleteContact } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContacts(id));

  return (
    <>
      <ItemContact>
        <p>
          {name}: {number}
        </p>
        <ButtonDeleteContact type="button" onClick={() => handleDelete(id)}>
          Delete
        </ButtonDeleteContact>
      </ItemContact>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
