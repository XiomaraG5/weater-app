import { types } from "../types/type";

export const loginReducer=(state ={},action)=>{
    switch(action.type){
        case types.login:
            return {
                     ...state,
                    name:action.payload.name,
                    email:action.payload.email
                }
        case types.logout:
            return{}
        default:
            return state
    }
}