import { useContext, useState } from "react";
import { AuthContext } from "./auth";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const { currentUser } = useContext(AuthContext);
    const [data, setData] = useState(props.data); // Add state to hold data
    const router = useRouter();

    // Redirect to login page if user is not authenticated
    useEffect(() => {
      if (
        !currentUser &&
        typeof window !== "undefined" &&
        router.pathname !== "/login"
      ) {
        router.push("/login");
      }
    }, [currentUser, router]);

    // Event handler to toggle checkbox
    const handleToggle = (id) => {
      const newData = data.map((item) => {
        if (item.id === id) {
          return { ...item, done: !item.done }; // Toggle 'done' property
        } else {
          return item;
        }
      });
      setData(newData); // Update state with new data
    };

    // Render the protected page if user is authenticated
    return currentUser ? (
      <Component {...props} data={data} handleToggle={handleToggle} />
    ) : null;
  };
}
