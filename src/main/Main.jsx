import style from '../main/main.module.scss'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, saveProducts, setError } from '../reducers/ProductSlice';
import { addCard } from '../reducers/CardSlice';
import { FiShoppingCart } from "react-icons/fi";  
import { Link } from 'react-router-dom';
const Main = ({ selectedBrand, selectedColor, sortBY }) => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((store) => store.products);
    const cardItem = useSelector(store => store.card.card); 

    const productsSort = [...products].sort((p1, p2) => {
        if (sortBY === "cheap") {
            return p1.price - p2.price;
        }
        if (sortBY === "expensive") {
            return p2.price - p1.price;
        }
        return 0;
    });

    useEffect(() => {
        async function fetchProduct() {
            dispatch(setLoading(true));
            let query = `https://headphones-server.onrender.com/products`;
            const params = [];
            if (selectedColor) {
                params.push(`color_options_like=${encodeURIComponent(selectedColor)}`);
            }
            if (selectedBrand) {
                params.push(`brand_name=${encodeURIComponent(selectedBrand)}`);
            }
            if (params.length > 0) {
                query += `?${params.join("&")}`;
            }
            try {
                const response = await fetch(query);
                if (!response.ok) {
                    throw new Error("Error fetching products");
                }
                const data = await response.json();
                dispatch(saveProducts(data));
            } catch (err) {
                dispatch(setError(err.message || "Something went wrong"));
            } finally {
                dispatch(setLoading(false));
            }
        }

        fetchProduct();
    }, [selectedBrand, selectedColor, sortBY]);

    const handleAddToCard = (product) => {
        dispatch(addCard(product));
    };

    return (
        <div>
            {loading && <h3 className={style.loading}>Loading products...</h3>}
            {error && <p className={style.error}>{error}</p>}
            <ul className={style.products}>
                {productsSort.map((p) => {
                    const disabledBtn = cardItem.some(item => item.id === p.id); 
                    return (
                        <li className={style.productCart} key={p.id}>
                            <img  style={{ width: "100%", height:"250px" }} src={p.image_url} alt={p.name} />
                           <div className={style.textWrapper}>
                            <Link className={style.idd} to={`/product/${p.id}`} > {p.name}</Link>
                            <p>{p.description}</p>
                            <div className={style.colors}>
                                {p.color_options.map((col, index) => (
                                    <li style={{ width: "20px", height: "20px", border: "solid .9px", borderRadius: "50%", background: col }} key={index}></li>
                                ))}
                            </div>
                            <h4>${p.price}</h4>
                            <button 
                                disabled={disabledBtn} 
                                style={disabledBtn 
                                    ? { cursor: 'not-allowed', background: 'gray' } 
                                    : {  cursor: "pointer"  , color:"white" }} 
                                onClick={() => handleAddToCard(p)}
                            >
                                {disabledBtn ? <p>Added to Cart</p> : <p><FiShoppingCart/> Add to Cart</p> }
                            </button>
                           </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Main;

