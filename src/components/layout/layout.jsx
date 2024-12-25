import { ProgressBar } from "../progress-bar/progress-bar";

export const Layout = ({ children, sidebar }) => {
  return (
    <div>
      <ProgressBar />
      <header>Some header</header>
      {children}
      {sidebar}
      <footer> Some footer</footer>
    </div>
  );
};
