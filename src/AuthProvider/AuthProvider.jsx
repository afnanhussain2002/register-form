import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../firebase/firebase.config";
import PropTypes from 'prop-types'; 

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const createUser = (email, password) =>{
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) =>{
       return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {createUser, loginUser}
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