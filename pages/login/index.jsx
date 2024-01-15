import { auth, provider, db } from "../../lib/firebase";
import { signInWithPopup } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useRouter } from "next/router";

export default function Login() {
  const styles = {
    width: "1224px",
    margin: "80px auto",
  };

  const router = useRouter();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", user.email));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length > 0) {
      router.push("/admin");
    } else {
      alert("You are not authorized to access this page.");
      auth.signOut();
    }
  };

  return (
    <section style={styles}>
      <div>
        <button onClick={signInWithGoogle} style={{ color: "lightblue" }}>
          Log in to Continue
        </button>
      </div>
    </section>
  );
}
