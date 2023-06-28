import {call, put,takeEvery} from "redux-saga/effects"

function* asyncFetchUser() {
    //api call
    const user = yield call(() => fetch('https://jsonplaceholder.typicode.com/posts'))
    const formattedUser = yield user.json()
    yield put({type: 'FETCH_SUCCESS', payload:formattedUser})
}

//create generator function
export function* watchUserActions(){
    yield takeEvery('FETCH_USER' , asyncFetchUser)
}