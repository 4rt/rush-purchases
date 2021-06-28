import { Dispatch } from 'redux';
import { RootAction } from '../../types/common';

export const SET_HISTORY_DATA = 'SET_HISTORY_DATA';

interface SetDataAction extends RootAction {
    type: typeof SET_HISTORY_DATA,
    data: any
}

export const setData = (data: any): SetDataAction => ({
    type: SET_HISTORY_DATA,
    data
});

export const getPurchases = () => (dispatch: Dispatch) => {

    return fetch('./mockData.json')
        .then(response => response.json())
        .then(data => dispatch(setData(data)));
}

// export const sendStatuses = (accountId: number | string, history: any) => {
//     return bffClient.axios.post<DataResponse>(`/statuses/${accountId}`, history);
// }

