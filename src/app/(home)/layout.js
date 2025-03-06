"use client";

import { useAuth } from "../../components/auth-context/use-auth";
import { Cart } from "../../components/cart/cart";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";

export default function HomeLayout({ children }) {
  const { auth } = useAuth();

  return (
    <div className="main-wrapper">
      <Header />
      {children}
      {auth.isAuthorized && <Cart />}
      <Footer />
    </div>
  );
}
