import app from '../src/firebase'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {useState} from "react"

export default function FormElement(){
    const auth = getAuth(app);
    const [isLoggingIn, setIsLoggingIn] = useState(true);

    function toggleAction(){
        setIsLoggingIn(prev => {
            return (!prev)
        })
    }

    function Submit(formData){
        const emailInput = formData.get("email");
        const passwordInput = formData.get("password");
        {isLoggingIn ? 
            signInWithEmailAndPassword(auth, emailInput, passwordInput)
            .then(user => {
                console.log(user)
            }).catch(error => {
                console.log(error.message)
            }) : 
            createUserWithEmailAndPassword(auth, emailInput, passwordInput)
            .then(user => {
                console.log(user)
            }).catch(error => {
                console.log(error.message)
            }) 
        }

    }
    return(
        <>
        <form action={Submit}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
            <button type="submit">{isLoggingIn ? "Log In": "Create Account"}</button>
        </form>
        <section onClick={toggleAction} className='toggle-login'>{isLoggingIn ? "Create an account": "Already have an account? Login"}</section>
        </>
    )
}