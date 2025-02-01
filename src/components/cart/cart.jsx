import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/entities/cart/cart-slice";
import { CartItem } from "./cart-item";
import styles from "./cart.module.css";
import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";
import { Container } from "../container/container";

export const Cart = () => {
  const items = useSelector(selectCartItems);
  const { theme } = useTheme();

  if (!items.length) {
    return null;
  }
  return (
    <Container>
      <div
        className={classNames(styles.cart, {
          [styles.light]: theme === "light",
          [styles.dark]: theme === "dark",
        })}
      >
        <div>
          <h3>Cart</h3>
          <ul>
            {items.map(({ id }) => (
              <li key={id}>
                <CartItem id={id} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};
