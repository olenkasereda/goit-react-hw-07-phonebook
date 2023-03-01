import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const extraActions = [fetchContacts, addContact, deleteContact];

const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const fetchContactSuccessReducer = (state, action) => {
  state.contacts.items = action.payload;
};

const addContactSuccessReducer = (state, action) => {
  state.contacts.items.push(action.payload);
};

const deleteContactSuccessReducer = (state, action) => {
  const index = state.contacts.items.findIndex(
    task => task.id === action.payload.id
  );
  state.contacts.items.splice(index, 1);
};

const pendingReducer = state => {
  state.contacts.isLoading = true;
};

const rejectedReducer = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const fulfilledReducer = state => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },

  reducers: {
    contactsFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactSuccessReducer)
      .addCase(addContact.fulfilled, addContactSuccessReducer)
      .addCase(deleteContact.fulfilled, deleteContactSuccessReducer)
      .addMatcher(getActions('pending'), pendingReducer)
      .addMatcher(getActions('rejected'), rejectedReducer)
      .addMatcher(getActions('fulfilled'), fulfilledReducer),
});

export const { contactsFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
