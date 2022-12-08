import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

export interface GeneralState {
  [key: string]: any;
}

const initialState: GeneralState = {};

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    _apply: (state, action: PayloadAction<any>) => {
      state[action.payload.key] = action.payload.value;
    }
  }
});

export const useApply = () => {
  const { _apply } = generalSlice.actions;
  const dispatch = useDispatch();
  return (key: string, value: any) => dispatch(_apply({ key, value }));
};

export default generalSlice.reducer;