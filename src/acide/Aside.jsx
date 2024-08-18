import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  saveColors,
  setColorsLoading,
  setColorsError,
} from "../reducers/ColorSlice";
import {
  saveBrand,
  setBrandLoading,
  setBrandError,
} from "../reducers/BrandSlice";
import style from "../acide/aside.module.scss";

const Aside = ({
  selectedBrand,
  setSelectedBrand,
  selectedColor,
  setSelectedColor,
  input, setInput
}) => {
  const dispatch = useDispatch();
  const { colors, colorsLoading, colorsError } = useSelector(
    (store) => store.colors
  );
  const { brand, brandLoading, brandError } = useSelector(
    (store) => store.brand
  );

  useEffect(() => {
    async function fetchColors() {
      dispatch(setColorsLoading(true));
      try {
        const response = await fetch(
          "https://headphones-server.onrender.com/colors"
        );
        if (!response.ok) {
          throw new Error("Error fetching colors");
        }
        const data = await response.json();
        dispatch(saveColors(data));
      } catch (error) {
        dispatch(setColorsError(error.message));
      } finally {
        dispatch(setColorsLoading(false));
      }
    }
    fetchColors();
  }, [dispatch]);

  useEffect(() => {
    async function fetchBrands() {
      dispatch(setBrandLoading(true));
      try {
        const response = await fetch(
          "https://headphones-server.onrender.com/brands"
        );
        if (!response.ok) {
          throw new Error("Error fetching brands");
        }
        const data = await response.json();
        dispatch(saveBrand(data));
      } catch (error) {
        dispatch(setBrandError(error.message));
      } finally {
        dispatch(setBrandLoading(false));
      }
    }
    fetchBrands();
  }, [dispatch]);

  return (
    <div className={style.aside}>
      <h3>BRAND</h3>
      <div className={style.brandWrapper}>
        {brandLoading && <p className="loading">Brand Loading... </p>}
        {brandError && <p className="error">{brandError} </p>}
        {brand.map((brand, index) => (
          <li key={index}>
            <input
              type="checkbox"
              id={brand}
              name="brand"
              onChange={() => setSelectedBrand(brand)}
              checked={selectedBrand === brand}
            />
            <label htmlFor={brand}>{brand}</label>
          </li>
        ))}
        <button className={style.reset} onClick={() => setSelectedBrand("")}>
          Reset
        </button>

        {colorsLoading && <p className="loading">Color Loading...</p>}
        {colorsError && <p className="error">{colorsError}</p>}
      </div>
      <h3>Colors</h3>
      <div className={style.colorWrapper}>
        {colors.map((color, index) => (
          <li key={index}>
            <button
              onClick={() => setSelectedColor(color)}
              style={{
                width: "20px",
                height: "20px",
                border: "solid 1px",
                borderRadius: "50%",
                cursor: "pointer",
                backgroundColor: color,
                outlineOffset: "3px",
                outline: selectedColor === color ? "1px solid red" : "",
              }}
            ></button>
          </li>
        ))}
        <button className={style.reset} onClick={() => setSelectedColor("")}>
          Reset
        </button>
      </div>

      <div className={style.connect}>
        <h3>CONNECTIVITY</h3>
        <div>
          <span>
            <input  type="checkbox"    />
            <p>2.4 GHz wireless technology</p>
          </span>
          <span>
            <input  type="checkbox"   />
            <p>3.5mm audio input</p>
          </span>
          <span>
            <input  type="checkbox"   />
            <p>Bluetooth</p>
          </span>
          <span>
            <input  type="checkbox" />
            <p>LIGHTSPEED wireless technology</p>
          </span>
          <span>
            <input  type="checkbox"   />
            <p>Wired USB input</p>
          </span>
          <span>
            <input type="checkbox"  />
            <p>USB-C</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Aside;
