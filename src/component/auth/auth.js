import { useState } from "react";
import "./auth.css";
import { useNavigate } from "react-router-dom";
import { loggedIn } from '../../redux/auth-slice'
import { useDispatch } from 'react-redux'

const initAuthState = {
  uname: "",
  pwd: ""
};

const secret = {
  uname: "admin",
  pwd: "123123",
};


function Auth() {
  const [auth, setAuth] = useState(initAuthState);
  const authDispatch = useDispatch();
  let navigate = useNavigate();

  function login() {
    if (auth.uname === secret.uname && auth.pwd === secret.pwd) {
      authDispatch(loggedIn());
      navigate(`/`);
    } else {
      alert("sai rồi bà già");
    }
  }
  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setAuth({ ...auth, uname: e.target.value })}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setAuth({ ...auth, pwd: e.target.value })}
          />
          <button type="button" onClick={() => login()}>
            login
          </button>
          {/* <button type="button" onClick={() => console.log(logged)}>
              test
            </button> */}
        </form>
      </div>
    </div>
  );
}

export default Auth;
