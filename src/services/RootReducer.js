import { combineReducers } from 'redux';
import dataReducer from './reducers/dataReducer'

const RootReducer = () =>{
    return combineReducers({data: dataReducer});
}
export default RootReducer;