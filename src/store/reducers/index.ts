import { combineReducers } from 'redux';
import history from './history';
import purchases from './purchases';

export default combineReducers({
    history,
    purchases
});
