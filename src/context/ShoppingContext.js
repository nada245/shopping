import { createContext, useContext, useState } from "react"
import ShoppingCart from "../component/ShoppingCart";
const ShoppingContext = createContext({});


const ShoppingProvider = ({ children }) => {
    const [isOpen,setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useState([]);
    const openCart=()=>{
        setIsOpen(true)
    }
    const closeCart=()=>{
        setIsOpen(false)
    }
    const cartQuantity=cartItems.reduce((quantity,item)=> item.quantity +quantity
,0
    )
    const getItemQuantity = (id) => {
        return cartItems.find((item) => item.id === id)?.quantity || 0
    }

    const increaseCartQuantity = (id) => {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }];
            }
            else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    }
                    else {
                        return item
                    }
                })
            }
        });
    };

    const decreaseCartQuantity = (id) => {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.id === id) == null) {
                return currItems.filter((item) => item.id !== id)
            }
            else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    }
                    else {
                        return item
                    }
                })
            }
        });
    };

    const removeItemFromCart = (id) => {
        setCartItems((currItems) => currItems.filter((item) => item.id !== id))
    }



    return (
        <ShoppingContext.Provider value={{ cartItems, getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeItemFromCart,closeCart,openCart,cartQuantity }}>
            {children}
            <ShoppingCart isOpen={isOpen}/>
        </ShoppingContext.Provider>
    )
}

export default ShoppingProvider;
export const useShoppingCart = () => {
    return useContext(ShoppingContext);
};