import { Auth, createUserWithEmailAndPassword } from "firebase/auth";

const createUser = (auth: Auth, email: string, password: string, setEmail: (value: string) => void, setPassword: (value: string) => void, setRepeatPassword: (value: string) => void) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);

            setEmail('');
            setPassword('');
            setRepeatPassword('');
        })
        .catch(error => console.log(error));
};


export { createUser }