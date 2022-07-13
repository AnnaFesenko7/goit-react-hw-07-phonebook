import { nanoid } from 'nanoid';
import { useState } from 'react';
import s from './Form.module.css';
import { useDispatch } from 'react-redux';
import * as contactsOperations from '../../redux/contacts/contacts-operations';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [id, setId] = useState('');
  const dispatch = useDispatch();
  const saveContact = () =>
    dispatch(contactsOperations.saveContact({ name, number, id }));

  const handelInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    setId(nanoid());
    saveContact({ name, number, id });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.form__field}>
        Name
        <input
          className={s.form__input}
          value={name}
          onChange={handelInputChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={s.form__field}>
        Number
        <input
          className={s.form__input}
          value={number}
          onChange={handelInputChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={s.form__btn} type="submit">
        Add contact
      </button>
    </form>
  );
}
