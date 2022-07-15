import s from './ContactsList.module.css';
// import { useEffect } from 'react';
import Contact from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import * as contactsSelectors from '../../redux/contacts/contacts-selectors';

export default function ContactsList() {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);

  return (
    <ul className={s.contactsList}>
      {contacts.map(contact => (
        <Contact contact={contact} key={contact.id} />
      ))}
    </ul>
  );
}
