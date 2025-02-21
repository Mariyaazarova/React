"use client";

import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { ProgressBar } from "../progress-bar/progress-bar";
/* import { useAuth } from "../auth-context/use-auth"; */
/* import { Cart } from "../cart/cart"; */

export const Layout = ({ children }) => {
  /*   const { auth } = useAuth(); */

  return (
    <div className="main-wrapper">
      <ProgressBar />
      <Header />
      {children}
      {/*       {auth.isAuthorized &&  <Cart />} */}
      <Footer />
    </div>
  );
};
