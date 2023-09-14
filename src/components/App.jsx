import { Box } from '../components/Box';
import { Tiltle, Contacts } from './App.styled';
import Phonebook from 'components/Phonebook/Phonebook';
import Forms from 'components/Form/Form';
import Filter from './Filter/Filter';
// import basicContacts from '../../src/basicContacts';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilters } from '../redux/selectors';
import {
  addContact,
  removeContact,
  filterContact,
} from '../redux/contactSlice';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filters = useSelector(getFilters);

  const normolizedFilter = filters.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normolizedFilter)
  );

  const formSubmitHandler = ({ name, number, id }) => {
    dispatch(addContact(name, number, id));
  };

  const nameFilter = e => dispatch(filterContact(e.currentTarget.value));

  const deleteContact = id => dispatch(removeContact(id));

  return (
    <Box
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        paddingLeft: 40,
      }}
    >
      <Tiltle>Phonebook</Tiltle>
      <Forms onSubmit={formSubmitHandler} />
      <Contacts>Contacts</Contacts>
      <Filter value={filters} onChange={nameFilter} />
      <Phonebook contacts={visibleContacts} onDeleteContact={deleteContact} />
    </Box>
  );
};
// };

export default App;
