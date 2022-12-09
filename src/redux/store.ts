import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import generalSlice from './generalSlice';

export const store = configureStore({
  reducer: generalSlice
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;