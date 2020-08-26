import { call, put } from 'redux-saga/effects';
import TYPES from '../../../redux/types/constant';

// Saga generator function to update the state
// It can be also useful in case of api call, we can send data from here to api config file in case if needed
export function* setNameSaga({ payload }) {
	try {
        // For sucess state update
		yield put({ type: TYPES.REQUEST_SET_NAME_SUCCESS, payload: {response:payload} });
	} catch (error) {
        // in case any error
		yield put({ type: TYPES.REQUEST_SET_NAME_FAILURE, payload: {response:error} });
	}
}
