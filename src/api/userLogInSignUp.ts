import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { firebaseApp } from "../utils/firebase"
import { logInMock } from "./mocks"

const auth = getAuth(firebaseApp)

export const userLogIn = (email: string, password: string) => {
    return new Promise((res) => {
        res(logInMock)
    })
    return signInWithEmailAndPassword(auth, email, password)
}

export const userSignUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword (auth, email, password)
}