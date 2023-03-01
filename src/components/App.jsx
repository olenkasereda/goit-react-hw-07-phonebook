import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

import FormContacts from './FormContacts/FormContacts';
import Filter from './Filter';
import ContactsList from './ContactsList';
import { Container } from './App.styled';

export function App() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1> Phonebook</h1>
      <FormContacts />
      <Filter />
      {isLoading && !error ? <b>Request in progress...</b> : <ContactsList />}
    </Container>
  );
}
