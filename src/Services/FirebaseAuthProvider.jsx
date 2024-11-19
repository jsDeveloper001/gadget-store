import { createContext, useEffect, useState } from "react";
import { authConfig } from "./Firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null)

const FirebaseAuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const GoogleLogin = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(authConfig, googleProvider)
    }
    const EmailPasswordRegister = (email, password) => {
        return createUserWithEmailAndPassword(authConfig, email, password)
    }

    const EmailPasswordLogin = (email, password) => {
        return signInWithEmailAndPassword(authConfig, email, password)
    }
    const LogOut = () => {
        return signOut(authConfig)
    }


    const AuthCredentials = {
        GoogleLogin,
        EmailPasswordRegister,
        EmailPasswordLogin,
        LogOut,
        userData,
        loading
    }

    useEffect(() => {
        const unSubscribe = () => onAuthStateChanged(authConfig, (user) => {
            if (user) {
                setUserData(user)
                setLoading(false)
            }
        }
        )
        return () => {
            return unSubscribe()
        }
    }, [])


    return <AuthContext.Provider value={AuthCredentials}>
        {children}
    </AuthContext.Provider>
};

export default FirebaseAuthProvider;