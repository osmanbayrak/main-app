import { configureStore } from '@reduxjs/toolkit';
import tableReducer from './features/tableConfig/tableSlice';

const store = configureStore({
  reducer: {
    table: tableReducer,
  },
});

export default store;