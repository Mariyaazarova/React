import { Outlet } from "react-router-dom";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { ProgressBar } from "../progress-bar/progress-bar";
import { useAuth } from "../auth-context/use-auth";
import { Cart } from "../cart/cart";

export const Layout = () => {
  const { auth } = useAuth();

  return (
    <div>
      <ProgressBar />
      <Header />
      <Outlet />
      {auth.isAuthorized && <Cart />}
      <Footer />
    </div>
  );
};
