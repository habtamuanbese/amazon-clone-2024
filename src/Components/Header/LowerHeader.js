import React from "react";
// import { AiOutlineMenu } from "react-icons/ai";
import classes from "./header.module.css";
// import { IoMdArrowDropdown } from "react-icons/io";

const LowerHeader = () => {
  return (
    <div className={classes.lower__container}>
      <ul>
        <li>
          {/* <AiOutlineMenu /> */}
          <p>All</p>
        </li>
        <li>
          Medical Care 
          {/* <IoMdArrowDropdown /> */}
        </li>
        <li>Best Sellers</li>
        <li>Amazon Basics</li>
        <li>
          Prime 
          {/* <IoMdArrowDropdown /> */}
        </li>
        <li>New Releases</li>
        <li>Today's Deal</li>
        <li>Musics</li>
        <li>
          Groceries 
          {/* <IoMdArrowDropdown /> */}
        </li>
        <li> Costumer Service </li>
        <li>Amazon Home</li>
        <li> Registry</li>
        <li>Books</li>
      </ul>
    </div>
  );
};

export default LowerHeader;
