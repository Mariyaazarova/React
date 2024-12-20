export const Layout = ({ children, sidebar }) => {
  return (
    <div>
      {children}
      {sidebar}
      <footer> Some footer</footer>
    </div>
  );
};
