import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
import * as contactsOperations from '../../redux/contacts/contacts-operations';

function Contact({ contact }) {
  const { id } = contact;
  const dispatch = useDispatch();
  return (
    <li className={s.contactsListItem}>
      <p className={s.contactsListName}>{contact.name}</p>
      <p className={s.contactsListName}>{contact.phone}</p>
      <button
        className={s.contactsListBtn}
        onClick={() => dispatch(contactsOperations.deleteContact(id))}
      >
        Удалить
      </button>
    </li>
  );
}

export default Contact;
