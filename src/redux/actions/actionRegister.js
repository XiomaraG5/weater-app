import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { types } from "../types/type";


export const registroAsync = (email,pass,name)=>{
    return(dispatch)=>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,email,pass)
        .then(async({user}) =>{
            await updateProfile(auth.currentUser,{displayName:name})
            dispatch(registerSiyn(name,email))
            // const newUser={
            //     email,
            //     pass,
            //     name
            // }
            // addDoc(collection(db,"user"),newUser)
        })
        .catch(error =>{
            console.log(error);
        })
    }
}

export const registerSiyn=(name,email)=>{
    return{
        type:types.resgister,
        payload:{name,email}
    }
}