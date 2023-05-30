import { combineReducers } from "redux";
import reducer from './Reducer/Reducer';

const comreducer=combineReducers({
    cartreducer: reducer,
})

export default comreducer;