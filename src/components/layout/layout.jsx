import { ProgressBar } from "../scroll/scroll";

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
