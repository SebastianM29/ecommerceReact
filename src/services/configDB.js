// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {collection,doc,writeBatch}  from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8Vp76P_zfoYtMaHOHmqDROlLRU4ZBF8E",
  authDomain: "ecommerce-wood.firebaseapp.com",
  projectId: "ecommerce-wood",
  storageBucket: "ecommerce-wood.appspot.com",
  messagingSenderId: "535811087815",
  appId: "1:535811087815:web:187fd5f3d002745a3a0de2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

const productos = [
    { nombre : "Tabla de Asado",stock:3, precio:20000 , imagePath: "/img/img2.jpg", cat:"madera"},
    { nombre : "Maceta" ,stock:3,precio:1000 ,imagePath: "/img/img3.jpg", cat:"madera"},
    { nombre : "Cuadro" ,stock:3, precio:15000 , imagePath: "/img/img4.jpg", cat:"laser"},
    { nombre : "Cuadro",stock:3, precio:20000 , imagePath: "/img/img6.jpg", cat:"laser"},
    { nombre : "Pizzera",stock:3, precio:1500 , imagePath: "/img/img7.jpg", cat:"madera"},
    { nombre : "Cream ordeñe",stock:3, precio:1500 , imagePath: "/img/bio1.webp", cat:"cPersonal"},
    { nombre : "Combo Origenes",stock:3, precio:1500 , imagePath: "/img/bio2.png", cat:"cPersonal"},
    { nombre : "Queen Beauty Set",stock:3, precio:1500 , imagePath: "/img/bio3.jpg", cat:"cPersonal"},
    { nombre : "Crema corporal de Arnica",stock:3, precio:1500 , imagePath: "/img/bio4.jpg", cat:"cPersonal"},
    { nombre : "lana", precio:1500 ,stock:3, imagePath: "/img/textil1.jpeg", cat:"textil"},
    { nombre : "lana", precio:1500 ,stock:3, imagePath: "/img/images.jfif", cat:"textil"}
]

// const uploadProducts = async () => {
//     const batch = writeBatch(db)
//     const productRef = collection(db,"productos")

//     for (const element of productos) {
//         const newDocs = doc(productRef)
//         batch.set(newDocs,element)
//     }

//     try {
//         await batch.commit()
//         console.log("guardado exitosamente");
        
//     } catch (error) {
//         console.log("error al grabar",error);
//     }

// }

// uploadProducts()

