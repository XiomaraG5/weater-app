import { types } from "../types/type";

export const registerReducer=(state={},action)=>{
    switch(action.type){
      case types.resgister:
          return{name:action.payload,
                 email:action.email}
      default:
        return state
    }
}