// import logo from './logo.svg';
import "./App.css";
import Header from "./component/master/header";
import { Routes, Route } from "react-router-dom";
import Home from "./component/home/home";
import Auth from "./component/auth/auth";
import { AuthContext } from "./context/auth-context";
import { useState } from "react";

function App() {
  const [authData, setAuthData] = useState({
    isLogged: false,
    setLogin: () => setAuthData({...authData, isLogged: true})
  });

  return (
    <AuthContext.Provider value={authData}>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Other />} />
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
}

function Other() {
  return <h1>It's other</h1>;
}

export default App;
