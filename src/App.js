/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import firebase from "firebase";
import { auth, provider } from "./firebase";
import "./App.css";
import User from "./features/counter/user/User";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/counter/user/userSlice";
import { login, logout } from "./features/counter/user/userSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const GoogleLogin = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(login(user.displayName));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const GoogleSignout = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="App">
      <div class="form-structor">
        <div class="signup">
          <h2 class="form-title" id="signup">
            {user ? `😁 ${user}` : "Sign up"}
          </h2>
          {user ? 
          <div class="form-holder">
            <input type="text" class="input" placeholder="write" />
            <input type="email" class="input" placeholder="something" />
            <input type="text" class="input" placeholder="here" />
          </div>
          :
          <button onClick={GoogleLogin} class="submit-btn">
            <img src="https://img.icons8.com/color/30/000000/google-logo.png" />
          </button>
          }
        </div>
        <div class="login slide-up">
          <div class="center">
            <h2 class="form-title" id="login" onClick={GoogleSignout}>
              Log out
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
