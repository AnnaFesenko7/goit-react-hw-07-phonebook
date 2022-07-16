import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://62ceb308486b6ce8264ac089.mockapi.io/contacts';

// export const fetchContacts = () => dispatch => {
//   dispatch(fetchContactsRequest());
//   axios
//     .get('/contacts')
//     .then(({ data }) => dispatch(fetchContactsSuccess(data)))
//     .catch(error => dispatch(fetchContactsError(error)));
// };
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const response = await axios.get('/contacts');
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async todoId => {
    await axios.delete(`/contacts/${todoId}`);
    return todoId;
  }
);

export const saveContact = createAsyncThunk(
  'contacts/saveContact',
  async contact => {
    await axios.post('/contacts', contact);
    return contact;
  }
);
