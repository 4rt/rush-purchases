import { Purchases, RootAction } from '../../types/common';
import {
    SET_HISTORY_DATA
} from '../actions/history';

const defaultState: Purchases[] = [];

const history = (state: Purchases[] = defaultState, action: RootAction): Purchases[] => {
    if (action.type === SET_HISTORY_DATA) {
        return [ ...state, ...action.data ]
    } else {
        return state
    }
}

export default history;