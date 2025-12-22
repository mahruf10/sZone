import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../../firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
export const Authcontext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading,setloading]=useState(true)
 const [showCart,setshowCart]=useState(0)
 const [showall,setshowall]=useState(false)
 const[showAll,setshowAll]=useState(false)
 const [price,setprice]=useState("0")
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth,email, password)
    }
    const logoutUser = () => {
//   setloading(true); 
  return signOut(auth)
    .finally(() => setloading(false)); // stop loading no matter what
};
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            
                setUser(user)
                setloading(false)
          
        })
        return () => unsubscribe()
    }, [])

    const Authinfo = {
        user,
        createUser,
        loginUser,
        logoutUser,
        setloading,
        loading,
        setshowCart,
        showCart,
        price,
        setprice,
        showall,
        setshowall,
        showAll,
        setshowAll

    }

    return (
        <Authcontext.Provider value={Authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;