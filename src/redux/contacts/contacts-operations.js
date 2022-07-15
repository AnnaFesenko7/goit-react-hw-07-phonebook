import axios from 'axios';
import {
  fetchContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  deleteContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  saveContactsError,
  saveContactsRequest,
  saveContactsSuccess,
} from './contacts-actions';
axios.defaults.baseURL = 'https://62ceb308486b6ce8264ac089.mockapi.io/contacts';

export const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};

export const deleteContact = todoId => dispatch => {
  dispatch(deleteContactsRequest());

  axios
    .delete(`/contacts/${todoId}`)
    .then(() => dispatch(deleteContactsSuccess(todoId)))
    .catch(error => dispatch(deleteContactsError(error)));
};

export const saveContact = contact => dispatch => {
  dispatch(saveContactsRequest());

  axios.get(`/contacts/?search=${contact.name}`).then(({ data }) => {
    data.length === 0
      ? axios
          .post('/contacts', contact)
          .then(({ data }) => dispatch(saveContactsSuccess(data)))
          .catch(error => dispatch(saveContactsError(error)))
      : dispatch(saveContactsSuccess(contact));
  });
};
