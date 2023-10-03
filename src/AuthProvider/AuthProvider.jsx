import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import PropTypes from 'prop-types'; 

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const [user, setUser] = useState([])

    const createUser = (email, password) =>{
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) =>{
       return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
       return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('useeffect with observe current user', currentUser)

        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo = {user, createUser, loginUser, logOut}
    return (
        <>
            <AuthContext.Provider value={authInfo}>
               {children}
            </AuthContext.Provider>
        </>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;