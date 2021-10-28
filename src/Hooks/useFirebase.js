import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";
initializeFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const auth = getAuth()
    const provider = new GoogleAuthProvider();

    const handelGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            });
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        })
    }, []);

    const handelSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return { handelGoogleSignIn, user, error, handelSignOut }
}
export default useFirebase;