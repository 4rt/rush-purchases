import { RootAction } from '../../types/common';

export const SET_PURCHASES = 'SET_PURCHASES';
export const REMOVE_PURCHASE = 'REMOVE_PURCHASE';

interface SetDataAction extends RootAction {
    type: typeof SET_PURCHASES,
    data: any
}

interface RemoveDataAction extends RootAction {
    type: typeof REMOVE_PURCHASE,
    data: number
}

export const setData = (data: any): SetDataAction => ({
    type: SET_PURCHASES,
    data
});

export const removeItem = (id: number): RemoveDataAction => ({
    type: REMOVE_PURCHASE,
    data: id
});

