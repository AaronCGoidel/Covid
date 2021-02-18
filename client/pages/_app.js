import { AuthProvider } from "../components/Auth";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default App;
