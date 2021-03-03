import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userRegister } from "../JS/actions";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  const addUser = () => {
    dispatch(
      userRegister({
        name,
        email,
        phoneNumber,
        password,
      })
    );
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        id=""
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="email"
        id=""
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        name="phoneNumber"
        id=""
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <input
        type="password"
        name="password"
        id=""
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={addUser}>Submit</button>
    </div>
  );
};

export default Register;
