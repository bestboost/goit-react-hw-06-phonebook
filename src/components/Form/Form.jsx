import PropTypes from 'prop-types';
// import React, { useState } from 'react';
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
import { nanoid } from 'nanoid';

const Forms = ({ onSubmit }) => {
  const dispatch = useDispatch();
  //global state -> to redux
  const contacts = useSelector(state => state.userContact.contacts);
  console.log('Forms  contacts:', contacts);

  //local state
  // const number = useSelector(state => state.userContact.contacts);
  // console.log('Forms  number:', number);

  const handelChange = e => {
    const { contacts, value } = e.currentTarget;

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
    // const addContact = form.elements.name.value;
    // console.log('handelSubmit  form:', addContact);
    dispatch(addContact(form.elements.name.value, form.elements.number.value));

    // onSubmit(Object.assign({ id: nanoid(), name, number }));

    form.reset();
  };

  // const reset = () => {
  //   setName('');
  //   setNumber('');
  // };

  const nameId = nanoid();
  const numberId = nanoid();

  return (
    <Form onSubmit={handelSubmit}>
      <TypeName htmlFor={nameId}>Name</TypeName>
      <InputName
        id={nameId}
        type="text"
        name="name"
        //  pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        // value={value}
        onChange={handelChange}
      />
      <TypePhone htmlFor={numberId}>Number</TypePhone>
      <InputPhone
        id={numberId}
        type="tel"
        name="number"
        //  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        // value={value}
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
