import {ADD_TO_CART,REMOVE_FROM_CART,DELETE_FROM_CART} from '../Constant'




const cardReducer= (state="abc",action)=>
{
    switch(action.type)
    {
        case ADD_TO_CART:
        return action.data;

        default:
            return state;

    }
    

}
export default cardReducer;