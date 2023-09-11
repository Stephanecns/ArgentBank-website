import React from "react";
import MainBackground from "../components/MainBackground";
import SignInContent from "../components/SignInContent";



function SignInPage() {
  return (
    <div className="container">
      <MainBackground>
        <SignInContent />
      </MainBackground>
    </div>
  );
}

export default SignInPage;
