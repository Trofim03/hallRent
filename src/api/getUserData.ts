import { doc, getFirestore, getDoc } from "firebase/firestore";
import { userDataMock } from "./mocks";

export const getUserData = (id: string) => {
    const firebaseDBRef = doc(getFirestore() as any, `users`, id);

    return new Promise((res) => {
        res(userDataMock)
    })
        
    return getDoc(firebaseDBRef)
}