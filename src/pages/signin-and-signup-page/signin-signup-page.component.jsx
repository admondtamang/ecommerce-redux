import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/signUp/signUp.component";

import "./signin-signup-page.style.scss";

const SignInAndSignUpPage = () => (
  <div className="signin-signup">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
