import React from "react";
import UserLogin from "../components/UserLogin/index";
import Navbar from "../components/Nav/index";
import Footer from "../components/Footer/index";

function LoginPage() {
  return (
    <div>
      <Navbar />
      <UserLogin />
      <Footer />
    </div>
  );
}

export default LoginPage;
