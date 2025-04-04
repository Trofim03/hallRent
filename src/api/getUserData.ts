import { doc, getFirestore, getDoc } from "firebase/firestore";

export const getUserData = (id: string) => {
    const firebaseDBRef = doc(getFirestore() as any, `users`, id);
        
    return getDoc(firebaseDBRef)
}