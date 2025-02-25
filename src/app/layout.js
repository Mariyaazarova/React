"use client";

import { Provider } from "react-redux";
import { store } from "../redux/store";
import { ThemeContextProvider } from "../components/theme-context/theme-context-provider";
import { AuthContextProvider } from "../components/auth-context/auth-context-provider";
import "./styles.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Restaurants Next</title>
      </head>
      <body>
        <div id="root">
          <Provider store={store}>
            <ThemeContextProvider>
              <AuthContextProvider>{children}</AuthContextProvider>
            </ThemeContextProvider>
          </Provider>
        </div>
      </body>
    </html>
  );
}
