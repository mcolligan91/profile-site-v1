import { combineReducers } from 'redux';

import IsMobileReducer from './IsMobileReducer';
import IsInvertedReducer from './IsInvertedReducer';

const RootReducer = combineReducers({
    IsMobileReducer,
    IsInvertedReducer
});

export default RootReducer;