export const Layout = ({ children, sidebar }) => {
  return (
    <div>
      <header>Some header</header>
      {children}
      {sidebar}
      <footer> Some footer</footer>
    </div>
  );
};
