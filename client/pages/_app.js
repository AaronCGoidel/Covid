import { AuthProvider } from "../hooks/useAuth";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default App;
