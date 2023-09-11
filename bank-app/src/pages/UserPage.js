import React from "react";
import WelcomeHeader from "../components/WelcomeHeader";
import MainBackground from "../components/MainBackground";
import AccountSummaryList from "../components/AccountSummaryList";

function UserPage() {
  return (
    <div className="container">
      <MainBackground>
        <WelcomeHeader />
        <AccountSummaryList />
      </MainBackground>
    </div>
  );
}

export default UserPage;
