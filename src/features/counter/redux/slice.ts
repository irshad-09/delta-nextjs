import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppState } from '../../../app/store';

export interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
};

export const actionTypes = {
  FAILURE: 'FAILURE',
  LOAD_DATA: 'LOAD_DATA',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
};

export function incrementAsync(amount) {
  return { type: actionTypes.LOAD_DATA, amount };
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    incrementIfOdd: (state, action: PayloadAction<number>) => {
      if (state.value % 2 === 1) {
        state.value += action.payload;
      }
    },
    loadDataSuccess: (state, action: PayloadAction<{ data: number }>) => {
      state.status = 'idle';
      state.value = action.payload.data;
    },
    failure: (state, action) => {
      state.status = 'failed';
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  incrementIfOdd,
  loadDataSuccess,
  failure,
} = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: AppState) => state.counter.value;
export const selectStatus = (state: AppState) => state.counter.status;

export default counterSlice.reducer;
