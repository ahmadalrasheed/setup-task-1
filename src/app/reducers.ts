import { combineReducers } from '@reduxjs/toolkit';

import { authSlice } from 'services/apis';

const reducers = combineReducers({
    auth: authSlice?.reducer,
});

export default reducers;
