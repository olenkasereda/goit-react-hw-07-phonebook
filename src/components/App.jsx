import FormContacts from './FormContacts/FormContacts';
import Filter from './Filter';
import ContactsList from './ContactsList';
import { Container } from './App.styled';

export function App() {
  return (
    <Container>
      <h1> Phonebook</h1>
      <FormContacts />
      <Filter />
      <ContactsList />
    </Container>
  );
}
