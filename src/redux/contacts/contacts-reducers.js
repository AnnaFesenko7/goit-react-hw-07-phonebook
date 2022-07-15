import showAlert from '../helpers';
import { createReducer } from '@reduxjs/toolkit';
import {
  changeFilter,
  fetchContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  deleteContactsSuccess,
  deleteContactsError,
  deleteContactsRequest,
  saveContactsError,
  saveContactsRequest,
  saveContactsSuccess,
} from './contacts-actions';

const items = [];

export const itemsReducer = createReducer(items, {
  [fetchContactsSuccess]: (_, { payload }) => payload,
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
  [fetchContactsError]: () => false,
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [deleteContactsSuccess]: () => false,
  [deleteContactsError]: () => false,
  [deleteContactsRequest]: () => true,
  [saveContactsError]: () => false,
  [saveContactsRequest]: () => true,
  [saveContactsSuccess]: () => false,
});

export const errorReducer = createReducer(null, {
  [fetchContactsError]: (_, { payload }) => payload,
  [deleteContactsError]: (_, { payload }) => payload,
  [saveContactsError]: (_, { payload }) => payload,
});
