import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { ProgressBar } from "../progress-bar/progress-bar";
import { Cart } from "../cart/cart";
import { useAuth } from "../auth-context/use-auth";
export const Layout = ({ children }) => {
  const { auth } = useAuth();

  return (
    <div>
      <ProgressBar />
      <Header />
      {children}
      {auth.isAuthorized && <Cart />}
      <Footer />
    </div>
  );
};
