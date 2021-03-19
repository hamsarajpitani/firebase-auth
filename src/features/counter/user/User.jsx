import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, selectUser } from "./userSlice";


const User = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  const loginuser = () => {
    dispatch(login("raja"));
  };

  function logoutuser() {
    dispatch(logout());
  }

  return (
    <div>
      <h1>{user}</h1>
      <button
       
        aria-label="Increment value"
        onClick={loginuser}
      >
        login
      </button>
      <button
       
        aria-label="Decrement value"
        onClick={logoutuser}
      >
        logout
      </button>
    </div>
  );
};

export default User;
