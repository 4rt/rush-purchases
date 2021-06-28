import { Purchases, RootAction } from '../../types/common';
import {
    REMOVE_PURCHASE,
    SET_PURCHASES
} from '../actions/purchases';

const defaultState: Purchases[] = [];

const purchases = (state: Purchases[] = defaultState, action: RootAction): Purchases[] => {
    switch (action.type) {
        case SET_PURCHASES:
            return [...state, action.data];
        case REMOVE_PURCHASE:
            return state.filter(purchase => purchase.id !== action.data);
        default:
            return state;
    }
}

export default purchases;