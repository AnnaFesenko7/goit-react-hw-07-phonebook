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

const items = [
  // {
  //   name: 'Anna Fesenko',
  //   number: '359-79-39',
  //   id: '2P2njwuGQH7Ii253QN4R6',
  // },
  // {
  //   name: 'Ivan Khorokhor',
  //   number: '123-85-97',
  //   id: '9JVdbo866LiW0sGNNHBRM',
  // },
  // {
  //   name: 'Nataly Shtukina',
  //   number: '785-269-79',
  //   id: 'sXQj5y5_iz8ZzJJdN94Xv',
  // },
];

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
