import React from "react";
import classes from "./Cart.module.css";
import LayOut from "../../LayOut/LayOut";
import { useContext } from "react";
import { DataContext } from "../../DataProvider/DataProvider";
import ProductCard from "../../Product/ProductCard";
import CurrencyFormat from "../../CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import { Type } from "../../../Utility/action.type";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };
  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };
  return (
    <LayOut>
      <>
        <section className={classes.container}>
          <div className={classes.cart__container}>
            <h2>Hello</h2>
            <h3>Your Shopping Basket </h3>
            <hr />
            {basket?.length == 0 ? (
              <p>Opps! No item in Your cart</p>
            ) : (
              basket?.map((item, i) => {
                return (
                  <section className={classes.cart__product} key={i}>
                    <ProductCard
                      product={item}
                      renderDesc={true}
                      renderAdd={false}
                      flex={true}
                    />
                    <div className={classes.btn__container}>
                      <button
                        className={classes.btn}
                        onClick={() => increment(item)}
                      >
                        <IoIosArrowUp size={20} />
                        
                      </button>
                      <span>{item.amount}</span>
                      <button
                        className={classes.btn}
                        onClick={() => decrement(item.id)}
                      >
                        <IoIosArrowDown size={20} />
                      </button>
                    </div>
                  </section>
                );
              })
            )}
          </div>
          {basket?.length !== 0 && (
            <div className={classes.subtotal}>
              <div>
                <p>Subtotal({basket?.length} items)</p>
                <CurrencyFormat amount={total} />
              </div>
              <span>
                <input type="checkbox" />
                <small>This order contains a gift</small>
              </span>
              <Link to="/payments">Continue to check out</Link>
            </div>
          )}
        </section>
      </>
    </LayOut>
  );
}

export default Cart;
