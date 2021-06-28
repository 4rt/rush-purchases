import { Purchases, RootAction } from '../../types/common';
import {
    SET_DATA
} from '../actions/data';

const defaultState: Purchases[] = [];

const data = (state: Purchases[] = defaultState, action: RootAction): Purchases[] => {
    if (action.type === SET_DATA) {
        return [ ...state, ...action.data ]
    } else {
        return state
    }
}

export default data;