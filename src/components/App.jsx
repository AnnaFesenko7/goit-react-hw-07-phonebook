import s from './App.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ThreeDots } from 'react-loader-spinner';
import ContactsList from './ContactsList/ContactsList';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import * as contactsOperations from '../redux/contacts/contacts-operations';
// import * as contactsSelectors from '../redux/contacts/contacts-selectors';
import { contactsOperations, contactsSelectors } from '../redux/contacts';
export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('useef');
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(contactsSelectors.getAllContacts);
  const isLoading = useSelector(contactsSelectors.getStateLoading);
  const isError = useSelector(contactsSelectors.getStateError);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 18,
      }}
    >
      <h2 className={s.title}>Phonebook</h2>
      <div className={s.wrapper__phonebook}>
        <Form />
      </div>

      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <div className={s.wrapper__contacts}>
        {contacts.length !== 0 ? <ContactsList /> : ''}
      </div>
      {isLoading && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ThreeDots height="100" width="100" color="red" ariaLabel="loading" />
        </div>
      )}
      {isError && <p>{isError.message}</p>}
    </div>
  );
}
