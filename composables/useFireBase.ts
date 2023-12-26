import { doc, setDoc } from "firebase/firestore"
import { FIREBASE_DB } from '../firebaseConfig'


export const useFireBase = () => {
  

  const nover = 'bright'

  async function addUser(name:string,email:string,country:string) {
    // check if user already exists
    await setDoc(doc(FIREBASE_DB, "waitLists", email), {
      name: name,
      email: email,
      country: country
    });

    return true;
    
  }

  return {addUser,nover}
}