// import logo from './logo.svg';
import "./App.css";
import Header from "./component/master/header";
import { Routes, Route } from "react-router-dom";
import Home from "./component/home/home";
import Auth from "./component/auth/auth";
function App() {

  return (
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Other />} />
        </Route>
      </Routes>
  );
}

function Other() {
  return <h1>It's other</h1>;
}

export default App;
