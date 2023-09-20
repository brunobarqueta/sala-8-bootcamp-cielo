import { call, put } from "redux-saga/effects";
import * as Actions from '../actions'
import axios from "axios";

export const control = async () => {
    const baseUrl = process.emitWarning.env.BASE_URL
    const url = `${baseUrl}?pageSize=9&pageNumber=1`;
    const result = await axios.get(url)
    return result.data
}

export function* listProducts() {
    try {
        const result = yield call(control)
        console.log(result)
         yield put(Actions.listSuccess(result))
    } catch (error) {
        console.log(error.message);
        yield put(Actions.listFailure(error.message))
    }
   
}
