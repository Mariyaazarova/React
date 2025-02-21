"use client";

import { AuthButton } from "../auth-button/auth-button";
import { SwitchThemeButton } from "../switch-theme-button/switch-theme-button"; 
import styles from "./header.module.css";
import Link from "next/link";

export const Header = () => {
  return (
    <header className={styles.header}>
      <AuthButton />
   <SwitchThemeButton /> 
      <Link href="/" className={styles.headerContent}>
        Food delivery App
      </Link>
    </header>
  );
};
