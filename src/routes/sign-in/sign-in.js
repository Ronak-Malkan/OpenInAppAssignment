import "./sign-in.css";

import SignInBoard from "../../components/signin-board/signin-board";
import SignInForm from "../../components/signin-form/signin-form";

const SignIn = () => {
   return (
      <div className="sign-in-container">
         <SignInBoard />
         <SignInForm />
      </div>
   );
};

export default SignIn;
