import React, { useEffect } from "react";
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import {auth} from "../../config/firebaseinitialize";
import { useNavigate } from "react-router-dom";
function SignIn() {
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();
  const signIn = () => {
    console.log("signIn called");
   
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user, "token", token);
        localStorage.setItem("user", JSON.stringify(user));  //store in Local storage
        localStorage.setItem("token", token);

        // ...
       
        navigate("/profile");
      })
      .catch((error) => {
        // Handle Errors here.
        alert("error");
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <h1>Hello welcome to sign in page</h1>
        <button onClick={signIn}>Sign up with google</button>
      </div>
    </>
  );
}

export default SignIn;
