
import { ADD_TO_CART ,REMOVE_FROM_CART,DELETE_FROM_CART} from "../Constant";

export const add_to_cart = (data)=>{
    return{
        type: ADD_TO_CART,
        data: data
        
    }
}


