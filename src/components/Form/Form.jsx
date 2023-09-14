import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import {
  Form,
  TypeName,
  InputName,
  TypePhone,
  InputPhone,
  AddButton,
} from './Form.styled';
import { getContacts } from '../../redux/selectors';
import { nanoid } from 'nanoid';

const Forms = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handelChange = e => {
    const { value } = e.currentTarget;

    switch (contacts) {
      case 'name':
        addContact(value);
        break;

      case 'number':
        addContact(value);
        break;

      default:
        return;
    }
  };

  const handelSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(addContact(form.elements.name.value, form.elements.number.value));

    form.reset();
  };

  const nameId = nanoid();
  const numberId = nanoid();

  return (
    <Form onSubmit={handelSubmit}>
      <TypeName htmlFor={nameId}>Name</TypeName>
      <InputName
        id={nameId}
        type="text"
        name="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handelChange}
      />
      <TypePhone htmlFor={numberId}>Number</TypePhone>
      <InputPhone
        id={numberId}
        type="tel"
        name="number"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handelChange}
      />
      <AddButton type="submit">Add contact</AddButton>
    </Form>
  );
};

Forms.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.string.isRequired),
  onSubmit: PropTypes.func.isRequired,
};

export default Forms;
