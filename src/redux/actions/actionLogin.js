import {getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { Facebook, google } from "../../firebase/FirebaseConfi";
import { types } from "../types/type";



// these are login function
   // Login with Google
export const loginGoogleAsync=()=>{
 return(dispatch)=>{
    const auth = getAuth();
    signInWithPopup(auth,google)
    .then(({user}) =>{
        dispatch(actionLogin(user.displayName,user.email))  
    })
    .catch(error =>{
        console.log(error);
    })
 }
}
  // Login with email
export const loginEmailAsyc =(email,pass)=>{
  return(dispatch)=>{
    const auth = getAuth()
    signInWithEmailAndPassword(auth,email,pass)
  }
}
export const actionLogin=(name,email)=>{
  return{
    type:types.login,
    payload:{name,email}
  }
}
    //Login with Facebook
export const loginWithFacebook  =()=>{
  return(dispatch)=>{
    const auth = getAuth()
    signInWithPopup(auth,Facebook)
    .then((res)=>{
        console.log(res.user.email, res.user.displayName)
        dispatch(actionLogin(res.user.displayName,res.user.email))  
    })
    .catch((err)=>{console.log(err.mesage)})
    }
 }  

// these are Logout function

export const actionLogout = ()=>{
    return{type:types.logout}
}

export const logoutAsyn=()=>{
  return(dispatch)=>{
    const auth = getAuth()
    signOut(auth)
    .then((user)=>{
        console.log("chao");
        console.log(user);
        dispatch(actionLogout())
    })
    .catch(error =>{
        console.log(error);
    })
  }
}
