const firebaseApiKey = process.env.FIREBASE_API_KEY;


//Old one whit Jospeh's account

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDDrEqlgUhVuyLhH18hP7wTg4P6e2damig",
//   authDomain: "test-form-db.firebaseapp.com",
//   projectId: "test-form-db",
//   storageBucket: "test-form-db.appspot.com",
//   messagingSenderId: "489037605006",
//   appId: "1:489037605006:web:ec7d9179d6caa18bc4c1df"
// };

// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);

// export const auth = getAuth(app)
// export const provider = new GoogleAuthProvider()


// New Firebase account
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: "geapro-app.firebaseapp.com",
  projectId: "geapro-app",
  storageBucket: "geapro-app.appspot.com",
  messagingSenderId: "637322919363",
  appId: "1:637322919363:web:43b2a6a9cbaa424c395176"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
