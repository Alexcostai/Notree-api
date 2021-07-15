import { firebaseDb } from "../src/Shared/firebase/firebase.js";

const user = {
    name:"Alex Costa",
    email:"alexunio@hotmail.com",
    password:"test",
}

await firebaseDb.collection('users').add(user);
console.log("creado");