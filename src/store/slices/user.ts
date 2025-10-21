/* eslint-disable no-param-reassign */

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import type { Session } from '@supabase/supabase-js';

interface UserState {
  session: Session | null;
}

const initialState: UserState = {
  session: null,
};

const userSlice = createSlice({
  name: 'configs',
  initialState,
  reducers: {
    setSession(state, action: PayloadAction<Session>) {
      state.session = action.payload;
    },
  },
});

export const { setSession } = userSlice.actions;

const persistConfig = {
  key: 'user',
  storage,
};

export default persistReducer(persistConfig, userSlice.reducer);
