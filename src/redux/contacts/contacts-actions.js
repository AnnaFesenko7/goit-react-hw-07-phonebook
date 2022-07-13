import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest'
);
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess'
);
export const fetchContactsError = createAction('contacts/fetchContactsError');

export const deleteContactsRequest = createAction(
  'contacts/deleteContactsRequest'
);
export const deleteContactsSuccess = createAction(
  'contacts/deleteContactsSuccess'
);
export const deleteContactsError = createAction('contacts/deleteContactsError');

export const saveContactsRequest = createAction('contacts/saveContactsRequest');
export const saveContactsSuccess = createAction('contacts/saveContactsSuccess');
export const saveContactsError = createAction('contacts/saveContactsError');

export const changeFilter = createAction('contacts/changeFilter');
