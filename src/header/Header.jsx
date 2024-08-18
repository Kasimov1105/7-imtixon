import React from "react";
import styles from "./../header/Header.module.scss";
import Home from "../home/Home";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import CardPage from "../cardPage/CardPage";
import Info from "./info/Info";
import { useSelector } from "react-redux";
import Product from "../product/Product";

function Header() {
  const cardCount = useSelector((store) => store.card.card.length);

  return (
    <BrowserRouter>
    <div className={styles.fixed}>
      <Info />
      <header>
        <div>
          <NavLink to="/">
            <img src="/GameGeek.svg" alt="game" />
          </NavLink>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/categories">Categories</NavLink>
            </li>
            <li>
              <NavLink to="/brands">Brands</NavLink>
            </li>
            <li>
              <NavLink to="/whatsNew">What’s new</NavLink>
            </li>
            <li>
              <NavLink to="/sales">Sales</NavLink>
            </li>
            <li>
              <NavLink to="/help">Help</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.card}>
          <NavLink to="/search">
            <FiSearch />
          </NavLink>
          <NavLink to="/users">
            <FiUser />
          </NavLink>
          <NavLink to="/cardPage">
            <FiShoppingCart />
            {cardCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "12px",
                }}
              >
                {cardCount}
              </span>
            )}
          </NavLink>
        </div>
      </header>
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cardPage" element={<CardPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default Header;
