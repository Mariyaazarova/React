import { Layout } from "../components/layout/layout";
import { AuthContextProvider } from "../components/auth-context/auth-context-provider";
import { ThemeContextProvider } from "../components/theme-context/theme-context-provider";
import "../app.css";
import { ReduxProvider } from "../redux/provider";

export const metadata = {
  title: "Next.js + React",
  description: "Next.js + React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <div id="root">
          <ReduxProvider>
            <ThemeContextProvider>
              <AuthContextProvider>
                <Layout>{children}</Layout>
              </AuthContextProvider>
            </ThemeContextProvider>
          </ReduxProvider>
        </div>
      </body>
    </html>
  );
}
