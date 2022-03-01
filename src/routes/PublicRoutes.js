import { Navigate } from "react-router-dom";

export const PublicRoute =({isAuthe,children})=>{
    return!isAuthe? children : <Navigate to="/*"/>
}