import { App } from "../../app";
import { ThemeContextProvider } from "../../components/theme-context/theme-context-provider";
import { AuthContextProvider } from "../../components/auth-context/auth-context-provider";

export function generateStaticParams() {
  return [{ slug: [""] }];
}

export default function Page() {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ThemeContextProvider>
  );
}
