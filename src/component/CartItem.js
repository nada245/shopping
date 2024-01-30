import React from "react";
import { Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingContext";
import storeItems from "../data/storeitems.json";
import formatCurrent from "./formatCurrent";
const CartItem = ({ id, quantity }) => {
    const { removeItemFromCart } = useShoppingCart();
    const item = storeItems.find((i) => i.id === id);
    if (item == null) return null;
    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img
                src={item.imgUrl}
                alt="cart-img"
                style={{ width: "125px", height: "75px", objectFit: "cover" }}
            />
            <div className="me-auto">
                <div>
                    {item.name}{" "}
                    {quantity > 1 && (
                        <span className="text-muted" style={{ fontSize: "0.65rem" }}>
                            x{quantity}
                        </span>
                    )}
                </div>
                <div className="text-muted" style={{ fontSize: "0.75rem" }}>
                    {(item.price)}
                </div>
            </div>
            <div>{formatCurrent(item.price * quantity)}</div>
            <Button
                variant="outline-danger"
                size="sm"
                onClick={() => removeItemFromCart(item.id)}
            >
                &times;
            </Button>
        </Stack>
    );
};

export default CartItem;