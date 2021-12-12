import { useEffect, useState } from "react"
import initializeFirebase from "../Pages/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken} from "firebase/auth";


initializeFirebase()

const useFirebase = () => {
    const [user, setuser] = useState({});
    const [isLoading, setisLoading] = useState(true);
    const [authError, setauthError] = useState('');
    const [admin, setadmin] = useState(false);
    const [token, settoken] = useState('');

    const auth = getAuth();
    const Googleprovider = new GoogleAuthProvider();

// create user with usig email and password
    const registerUser = (email, password, name, history) => {
        setisLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
           setauthError('')
           const newUser = {email, displayName:name}
           setuser(newUser);
            //save user to the database
            saveUser(email, name, 'POST');
            // set name in firebase
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {                
              }).catch((error) => {               
              });
           history.push('/');
          })
          .catch((error) => {           
            setauthError(error.message);           
          })
          .finally(() => setisLoading(false));
    }

//   login user with email password
    const loginUser = (email, password, location, history) => {
        setisLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const redierect_uri = location.state?.from || '/';
            history.push(redierect_uri);
        })
        .catch((error) => {
            setauthError(error.message);
        })
        .finally(() => setisLoading(false));
    }

// login user with Google
    const signInWithGoogle = (location, history) => {
        setisLoading(true);
        signInWithPopup(auth, Googleprovider)
            .then((result) => {                
                const user = result.user;
                const redierect_uri = location.state?.from || '/';
                history.push(redierect_uri);
                setauthError('');
                // save user to the database
                saveUser(user.email, user.displayName, 'PUT');
                
            }).catch((error) => {
                
                setauthError(error.message);
            })
            .finally(() => setisLoading(false));
    }

 

// on authstate change || observe user state
    useEffect( () => {
       const unsubscribed = onAuthStateChanged( auth, user => {
            if(user){
                setuser(user)
                getIdToken(user)
                .then(idToken => {
                    settoken(idToken);
                })
            }
            else{
                setuser({})
            }
            setisLoading(false);
        });
        return () => unsubscribed;
    } , [])

    const logout = () => {
        setisLoading(true)
        signOut(auth)
        .then(() => {

        })
        .finally(() => setisLoading(false));
    }

// save user in database
    const saveUser = (email, displayName, method) => {
        const user = {email, displayName};
        fetch('https://secret-tundra-43833.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()

    }
    // admin secure,,, backend e jehetu get krci tai ekhane useeffect krte hbe
    useEffect( () => {
        fetch(`https://secret-tundra-43833.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setadmin(data.admin))
    } , [user.email])

    return {
        user,
        logout,
        loginUser,
        isLoading,
        admin,
        token,
        authError,
        signInWithGoogle,
        registerUser
    }
}

export default useFirebase;