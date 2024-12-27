export const Menu = ({ menu }) => {
  return (
    <ul>
      {menu.map((menu) => (
        <li key={menu.id}>{menu.name}</li>
      ))}
    </ul>
  );
};
