import { MdOutlineShoppingCart } from "react-icons/md";
import Badge from "react-bootstrap/Badge";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);
  return (
    <div className="cart-widget">
      <MdOutlineShoppingCart className="cart-widget__icon" size={24} />
      {totalItems() > 0 && (
        <Badge pill bg="danger" className="cart-widget__badge">
          {totalItems()}
        </Badge>
      )}
    </div>
  );
};

export default CartWidget;
