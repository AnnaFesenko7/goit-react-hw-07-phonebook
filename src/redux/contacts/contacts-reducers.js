import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './contacts-actions';
import {
  fetchContacts,
  deleteContact,
  saveContact,
} from './contacts-operations';

const items = [];

export const itemsReducer = createReducer(items, {
  [fetchContacts.fulfilled]: (_, { payload }) => {
    console.log(payload);
    return payload;
  },
  [saveContact.fulfilled]: (state, { payload }) => [payload, ...state],

  [deleteContact.fulfilled]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

export const filterReducer = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

export const loadingReducer = createReducer(false, {
  [fetchContacts.rejected]: () => false,
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [saveContact.rejected]: () => false,
  [saveContact.pending]: () => true,
  [saveContact.fulfilled]: () => false,
});

export const errorReducer = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [deleteContact.rejected]: (_, { payload }) => payload,
  [saveContact.rejected]: (_, { payload }) => payload,
});
