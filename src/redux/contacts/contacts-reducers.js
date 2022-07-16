import showAlert from '../helpers';
import { createReducer } from '@reduxjs/toolkit';
import {
  changeFilter,
  // fetchContactsError,
  // fetchContactsRequest,
  // fetchContactsSuccess,
  deleteContactsSuccess,
  deleteContactsError,
  deleteContactsRequest,
  saveContactsError,
  saveContactsRequest,
  saveContactsSuccess,
} from './contacts-actions';
import { fetchContacts } from './contacts-operations';

const items = [];

export const itemsReducer = createReducer(items, {
  [fetchContacts.fulfilled]: (_, { payload }) => {
    console.log(payload);
    return payload;
  },
  [saveContactsSuccess]: (state, { payload }) => {
    return state.find(
      contact =>
        contact.name === payload.name || contact.phone === payload.phone
    )
      ? showAlert(payload.name)
      : [payload, ...state];
  },

  [deleteContactsSuccess]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

export const filterReducer = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

export const loadingReducer = createReducer(false, {
  [fetchContacts.rejected]: () => false,
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [deleteContactsSuccess]: () => false,
  [deleteContactsError]: () => false,
  [deleteContactsRequest]: () => true,
  [saveContactsError]: () => false,
  [saveContactsRequest]: () => true,
  [saveContactsSuccess]: () => false,
});

export const errorReducer = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [deleteContactsError]: (_, { payload }) => payload,
  [saveContactsError]: (_, { payload }) => payload,
});
