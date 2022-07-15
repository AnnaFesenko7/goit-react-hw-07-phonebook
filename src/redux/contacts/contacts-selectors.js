import { createSelector } from '@reduxjs/toolkit';
export const getAllContacts = state => state.items;
export const getStateLoading = state => state.loading;
export const getStateError = state => state.error;
export const getFilter = state => state.filter;
export const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return items.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  }
);
