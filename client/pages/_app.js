import { AuthProvider } from "../components/Auth";
import "../styles/globals.css";

function App({ Component, pageProps }) {
<<<<<<< HEAD
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
=======

  return <Component {...pageProps} />;

  
>>>>>>> f54b7d167691955dad91ad41b01509163d837f3e
}

export default App;
