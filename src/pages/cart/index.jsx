import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './styles.module.css'
import { addToCart, updateCartItem, removeFromCart, emptyCart } from './../../../src/redux/cart/actions'

function Cart() {
  const dispatch = useDispatch();
  const { items } = useSelector((state)=>state.cartReducer);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  }

  const handleRemoveFromCart = (item) => {
    const updatedItem = { ...item, quantity: item.quantity - 1 };
    if (updatedItem.quantity === 0) {
      dispatch(removeFromCart(item));
    } else {
      dispatch(updateCartItem(updatedItem));
    }
  }

  const handleEmptyCart = () => {
    dispatch(emptyCart());
  }

  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className={styles.cart}>
      <h2 className={styles.parag}>Cart Items:</h2>
      {items?.length === 0 
        ? <p className={styles.parag}>Your cart is empty</p>
        : (
          <div className={styles.container}>
            {items?.map((item) => (
              <div key={item.id}>
                <div className={styles.carProd}>
                  <div className={styles.price}>{item.name}</div>
                  <div className={styles.price}>${item.price}</div>
                  <img src={item.image_link} alt={item.name}></img>
                  <button onClick={() => handleAddToCart(item)}>+</button>
                  <div className={styles.price}>{item.quantity}</div>
                  <button onClick={() => handleRemoveFromCart(item)}>-</button>
                </div>
              </div>
            ))}
            <div className={styles.totalPrice}>Total Price: ${totalPrice}</div>
            <button onClick={() => handleEmptyCart()} className={styles.emptyButton}>Empty Cart</button>
          </div>
        )
      }
    </div>
  )
}

export default Cart
