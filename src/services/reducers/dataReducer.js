import initialState from '../initialState.js';
const dataReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'GET_DATA':
            return action.data;
        
        default: 
            return state;
    }
}
export default dataReducer;