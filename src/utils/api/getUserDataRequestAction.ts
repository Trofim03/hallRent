import { doc, getFirestore, getDoc } from "firebase/firestore";
import { userDataMock } from "../../api/mocks";

export const getUserDataRequestAction = async (id: string) => {
    try {
        const firebaseDBRef = doc(getFirestore() as any, `users`, id);

        const response = await new Promise((res) => {
            res(userDataMock)
        })
            
        // const response = await getDoc(firebaseDBRef)

        return response.data()
    } catch (error) {
        console.error(error)

        throw new Error(String(error))
    }
}