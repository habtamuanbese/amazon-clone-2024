import React, { useContext } from "react";
import classes from "./header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import { DataContext } from "../DataProvider/DataProvider";
import { IoMdArrowDropdown } from "react-icons/io";
import { auth } from "../../Utility/Firebase";

const Header = () => {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  return (
    <>
      <section className={classes.fixed}>
        <section>
          <div className={classes.header__container}>
            <div className={classes.logo__container}>
              <Link to="/">
                <img
                  src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                  alt="amazon logo"
                />
              </Link>
              <div className={classes.delivery}>
                <span>
                  <SlLocationPin />
                </span>
                <div>
                  <p>Delivering to Dallas</p>
                  <span>
                    <b>Update location</b>
                  </span>
                </div>
              </div>
            </div>

            <div className={classes.search}>
              <select name="" id="">
                <option value="">All</option>
              </select>
              <input type="text" placeholder="Search Amazon" />
              <BsSearch size={38} />
            </div>

            <div className={classes.order__container}>
              <Link to="" className={classes.language}>
                <img
                  src="https://image.shutterstock.com/image-illustration/united-states-america-flag-260nw-308762297.jpg"
                  alt=""
                />
                <select>
                  <option value="">EN</option>
                </select>
              </Link>

              <Link to={!user && "/auth"}>
                <div>
                  {user ? (
                    <>
                      <p>Hello {user?.email?.split("@")[0]}</p>
                      <span onClick={() => auth.signOut()}>Sign Out</span>
                    </>
                  ) : (
                    <>
                      <p> Hello, sign in</p>
                      <span>
                        Account & Lists <IoMdArrowDropdown />
                      </span>
                    </>
                  )}
                </div>
              </Link>

              <Link to="/orders">
                <p>Returns</p>
                <span>
                  <b>& Orders</b>
                </span>
              </Link>
              <Link to="/cart" className={classes.cart}>
                <BiCart size={35} />
                <span>{totalItem}</span>
                <p>Cart</p>
              </Link>
            </div>
          </div>
        </section>
        <LowerHeader />
      </section>
    </>
  );
};

export default Header;
