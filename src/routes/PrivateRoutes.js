import { Navigate } from "react-router-dom";

export const PrivateRoute=({isAuthe,children})=>{
    return isAuthe?children:<Navigate to="/launch"/>
}