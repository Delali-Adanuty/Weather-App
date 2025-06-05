import {getAuth, signOut} from "firebase/auth"

export default function Header(){
    const auth = getAuth()
    function trigger(){
        signOut(auth, (error) => {
            console.log(error)
        })
    }
    return(
        <nav>
            <ul className="right">
                <button onClick={trigger}>Log out</button>
            </ul>
        </nav>
    )
}