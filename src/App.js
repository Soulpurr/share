import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Routes, Route } from "react-router-dom";
import Home from "./Container/Home";

import Contact from "./Components/Contact";
import Login from "./Components/Login";

function App() {
  return (
    //  <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_CLIENT_ID}>
    <GoogleOAuthProvider clientId="58287943540-bv0g7a77jgpn6lnpk4fue0oh4kaag7cq.apps.googleusercontent.com">
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
