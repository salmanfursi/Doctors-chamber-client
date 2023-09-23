import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged,  signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/FirebaseConfig";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
   const [user,setUser]=useState(null)
   const [loader,setLoading]=useState(true)
  
   

   const createUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }
   const signin = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
   }
   const logOut = (auth) => {
      setLoading(true)
      return signOut(auth)
   }
   
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser);
         setLoading(false)

      });

      return () => {
         return unsubscribe()
      };

   }, [])


   const authInfo = {
      createUser,signin,logOut,setLoading,user,auth,loader
   };

   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export { AuthProvider };
