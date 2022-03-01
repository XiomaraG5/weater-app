import { getAuth, onAuthStateChanged } from "firebase/auth";
import React,{useState,useEffect} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import { Home } from "../containers/Home";
import Launch from "../containers/Launch";
import { PrivateRoute } from "./PrivateRoutes";
import { PublicRoute } from "./PublicRoutes";

const AppRouter = ()=>{
  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if(user?.uid){
        setIsLoggedIn(true)
      
      }else{setIsLoggedIn(false) }
      setChecking(false)
    })
  }, [setIsLoggedIn,setChecking])

   if(checking){
    
    return(
        <h1>Espere...</h1>
    )
  }
  return(
    //   <Login/>
     <Router>
         <Routes>
             {/* <Route path="/launch" element={<Launch/>}/> */}
             <Route path="/launch/*" element={<PublicRoute isAuthe={isLoggedIn} >
                <Launch/>
                </PublicRoute>}
             />
             <Route path="/*" element={<PrivateRoute isAuthe={isLoggedIn}>
                <Home />
             </PrivateRoute>}/>
         </Routes>
     </Router>
   )
}

export default AppRouter