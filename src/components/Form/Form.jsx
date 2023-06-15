import PropTypes from 'prop-types';
import { useState } from 'react';
import { FormContainerCSS, FormInputCSS } from '../MainContainerCSS';

export const Form = ({ formSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleOnSubmit = evt => {
    evt.preventDefault();
    formSubmit({ name, number });
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  return (
    <FormContainerCSS onSubmit={handleOnSubmit}>
      <label>
        Name:
        <FormInputCSS
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        Number:
        <FormInputCSS
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </FormContainerCSS>
  );
};

Form.propTypes = {
  formSubmit: PropTypes.func.isRequired,
};
