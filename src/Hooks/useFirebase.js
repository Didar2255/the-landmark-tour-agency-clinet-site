import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";
initializeFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth()
    const provider = new GoogleAuthProvider();

    const handelGoogleSignIn = () => {
        setIsLoading(true)
        return signInWithPopup(auth, provider)
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
    }, []);

    const handelSignOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(() => {
                    setIsLoading(false)
                })
            })
    }

    return { handelGoogleSignIn, user, error, handelSignOut, isLoading }
}
export default useFirebase;