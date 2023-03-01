import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import 'yup-phone';

import {
  ContactForm,
  ButtonAdd,
  InputError,
  FormInput,
  FormLabel,
} from './FormContact.styled.js';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contactsSlice.js';
import { getContacts } from 'redux/selectors.js';

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Your name is too short')
    .required('Please enter full name'),
  number: yup.string().required('Please enter number').phone('UA', true),
});

const initialValues = {
  name: '',
  number: '',
};

const FormContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;

    const names = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (names) {
      alert(name + ' is already in contacts');
      return;
    }

    dispatch(addContacts({ name: name, number: number }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <ContactForm autoComplete="off">
        <FormLabel>
          Name
          <FormInput placeholder="Full name" type="text" name="name" />
          <ErrorMessage name="name" component={InputError} />
        </FormLabel>
        <br />
        <FormLabel>
          Number
          <FormInput
            placeholder="Phone number: +380..."
            type="tel"
            name="number"
          />
          <ErrorMessage name="number" component={InputError} />
        </FormLabel>
        <ButtonAdd type="submit">Submit</ButtonAdd>
      </ContactForm>
    </Formik>
  );
};

export default FormContacts;
