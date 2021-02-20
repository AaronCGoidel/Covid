import firebase from "../components/firebase";
import {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from "react";

const authContext = createContext({ user: {} });
const { Provider } = authContext;

export function AuthProvider(props) {
  const auth = useAuthProvider();
  return <Provider value={auth}>{props.children}</Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

const useAuthProvider = () => {
  const [user, setUser] = useState(null);

  const signinWithGoogle = () => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => {
        setUser(response.user);
      });
  };

  const signinWithFacebook = () => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((response) => setUser(response.user));
  };

  return {
    user,
    signinWithFacebook,
    signinWithGoogle,
  };
};
