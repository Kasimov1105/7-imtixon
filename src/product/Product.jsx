import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import style from "../product/product.module.scss";
import { delCard, addCard } from "../reducers/CardSlice";
import Stars from "./Stars";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { TbBus } from "react-icons/tb";
import { CgBox } from "react-icons/cg";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import VideoPlayer from "./videoplayer/VideoPlayer";
import MadeToPlayer from "./madePlayer/MadeToPlayer";

function Product() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { card } = useSelector((store) => store.card);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  const handleAdd = () => {
    if (product) {
      dispatch(addCard(product));
    }
  };

  const handleSubtract = () => {
    if (product && quantity > 1) {
      dispatch(delCard(product));
    }
  };

  const handleAddToCard = () => {
    if (product) {
      dispatch(addCard(product));
    }
  };

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(
          `https://headphones-server.onrender.com/products/${id}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <p>Error: {error}</p>;

  if (!product) return null;

  const productInCart = card.find((item) => item.id === product.id);
  const quantity = productInCart ? productInCart.quantity : 1;
  const disabledBtn = productInCart != null;

  return (
    <div>
      <div className={style.container}>
        <div className={style.imageWrapper}>
          <h1>Products / Gaming Headsets & Audio / {product.name}</h1>
          <div>
            <div className={style.frstImg}>
              <MdArrowBackIos style={{ fontSize: "40px" }} />
              <img src={product.image_url} alt={product.name} />
              <MdArrowForwardIos style={{ fontSize: "40px" }} />
            </div>
          </div>
          <div className={style.imgWrapper}>
            {[...Array(5)].map((_, index) => (
              <img key={index} src={product.image_url} alt={product.name} />
            ))}
          </div>
        </div>
        <div className={style.text_wrapper}>
          <div className={style.wide}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h5>
              <Stars rating={product.ratings_stars} />({product.rating_counts})
            </h5>
          </div>
          <div className={style.wide}>
            <h3>${product.price} or 99.99/month</h3>
            <p>Suggested payments with 6 month special financing</p>
          </div>
          <div className={style.wide}>
            <h3>Choose a color</h3>
            <ul style={{ display: "flex", gap: "10px" }}>
              {product.color_options.map((col, index) => (
                <li
                  style={{
                    width: "50px",
                    height: "50px",
                    border: "solid 1px",
                    borderRadius: "50%",
                    background: col,
                  }}
                  key={index}
                ></li>
              ))}
            </ul>
          </div>
          <div className={style.wide}>
            <div className={style.quality}>
              <span>
                <button onClick={handleSubtract}>-</button>
                <p>{quantity}</p>
                <button onClick={handleAdd}>+</button>
              </span>
              <div className={style.only}>
                <p>
                  Only <p style={{ color: "#0BA42D" }}>16 items</p> left! <br />
                  Don’t miss it{" "}
                </p>
              </div>
            </div>
          </div>
          <div className={style.btnn}>
            <button
              className={style.bt}
              disabled={disabledBtn}
              style={
                disabledBtn
                  ? { cursor: "not-allowed", background: "gray" }
                  : { cursor: "pointer" }
              }
              onClick={handleAddToCard}
            >
              {disabledBtn ? (
                <p>Added to Cart</p>
              ) : (
                <p>
                  <FiShoppingCart /> Add to Cart
                </p>
              )}
            </button>
            <div className={style.like}>
              <div>
                <FaRegHeart />
              </div>
            </div>
          </div>

          <div className={style.delivery}>
            <div className={style.cart}>
              <div className={style.icons}>
                <TbBus
                  style={{ color: "#0BA42D", height: "30px", width: "30px" }}
                />
              </div>
              <div className={style.text}>
                <h4>Free delivery</h4>
                <p>Enter your Postal Code for Delivery Availability</p>
              </div>
            </div>
            <div className={style.line}></div>
            <div className={style.cart}>
              <div className={style.icons}>
                <CgBox
                  style={{ color: "#0BA42D", height: "30px", width: "30px" }}
                />
              </div>
              <div className={style.text}>
                <h4>Return Delivery</h4>
                <p>Free delivery 30 Days return</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <MadeToPlayer />
        <VideoPlayer />
      </div>
    </div>
  );
}

export default Product;
