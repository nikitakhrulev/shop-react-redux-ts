import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, {useState} from 'react';
import { auth } from '../services/firebase/firebase';
import { createUser } from '../services/firebase/createUser';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    function registerUser(evt: React.FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        if (password !== repeatPassword) {
            setPasswordError('Passwords do not match');
            console.log(passwordError)
            return 
        }
        createUser(auth, email, password, setEmail, setPassword, setRepeatPassword);
    }

    return (
        <form className="sidenav__form" onSubmit={registerUser}>
            <div className="sidenav__input">
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            {/* <div className="sidenav__input">
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div> */}
            <div className="sidenav__input">
                <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="sidenav__input">
                <input type="text" placeholder="Repeat password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)}/>
            </div>
            <div className="sidenav__btn">
                <button type="submit">Create an account</button>
            </div>
        </form>
    )
}

export { SignUp }