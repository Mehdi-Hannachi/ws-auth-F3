import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { userLogin } from "../JS/actions";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const errors = useSelector((state) => state.userReducer.errors);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const loading = useSelector((state) => state.userReducer.loading);

  console.log(errors);

  const dispatch = useDispatch();

  const login = () => {
    dispatch(
      userLogin({
        email,
        password,
      })
    );

    setEmail("");
    setPassword("");
  };

//   if (isAuth) return <Redirect to="/profile" />;

  return isAuth ? (
    <Redirect to="/profile" />
  ) : loading ? (
    <h1> please wait </h1>
  ) : (
    <div>
      {errors ? <p>{errors.msg}</p> : null}
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name=""
        id=""
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
