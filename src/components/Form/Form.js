import { nanoid } from 'nanoid';
import { useState } from 'react';
import s from './Form.module.css';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsOperations from '../../redux/contacts/contacts-operations';
import { contactsSelectors } from 'redux/contacts';
import showAlert from 'redux/helpers';

export default function Form() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [id, setId] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getAllContacts);
  console.log('🚀 ~ file: Form.js ~ line 16 ~ Form ~ contacts', contacts);

  const saveContact = () => {
    if (
      contacts.find(contact => contact.name === name || contact.phone === phone)
    ) {
      showAlert(name);
      return;
    }
    dispatch(contactsOperations.saveContact({ name, phone, id }));
  };

  const handelInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    setId(nanoid());
    saveContact({ name, phone, id });
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
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
          value={phone}
          onChange={handelInputChange}
          type="tel"
          name="phone"
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
