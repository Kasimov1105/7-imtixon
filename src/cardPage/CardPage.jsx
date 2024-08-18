import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delCard, addCard, deleteCart } from '../reducers/CardSlice';
import style from '../cardPage/cardpage.module.scss';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowLeftLong } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';

const CardProduct = () => {
    const { card } = useSelector((store) => store.card);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const navigate = useNavigate();

    const del = (product) => {
        setSelectedProduct(product);
        setShow(true);
    };

    const handleDelete = () => {
        if (selectedProduct) {
            dispatch(deleteCart(selectedProduct));
            setShow(false);
        }
    };

    const handleAdd = (product) => {
        dispatch(addCard(product));
    };

    const handleSubtract = (product) => {
        if (product.quantity > 1) {
            dispatch(delCard(product));
        }
    };

    const calculateSubtotal = () => {
        return card.reduce(
            (total, product) => total + product.price * product.quantity,
            0
        );
    };

    const priceProduct = (product) => {
        return product.price * product.quantity;
    };

    return (
        <div className={style.container}>
            <div className={style.navigate}>
                <button onClick={() => navigate(-1)}>
                    <FaArrowLeft /> Back to Shopping
                </button>
                <h1>SHOPPING CART</h1>
            </div>
            <div className={style.products}>
                <div className={style.productWrapper}>
                    <div className={style.abouts}>
                        <h4>Product</h4>
                        <h4>Quantity</h4>
                        <h4>Price</h4>
                    </div>

                    {card && card.length === 0 ? (
                        <h1 style={{margin:"40px auto"}}>Cart is empty.</h1>
                    ) : (
                        <ul className={style.mainWrapper}>
                            {show && (
                                <div className={style.modal}>
                                    <div className={style.dele}>
                                        <p>
                                            Haqiqatdan ham mahsulotni savatchadan o'chirmoqchimisiz?
                                        </p>
                                    </div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            paddingInline: '10px',
                                        }}
                                    >
                                        <button
                                            onClick={handleDelete}
                                            style={{
                                                backgroundColor: 'green',
                                                color: 'white',
                                                width: '60px',
                                                border: 'none',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            Ha
                                        </button>
                                        <button
                                            onClick={() => setShow(false)}
                                            style={{
                                                backgroundColor: 'red',
                                                color: 'white',
                                                width: '60px',
                                                border: 'none',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            Yo'q
                                        </button>
                                    </div>
                                </div>
                            )}
                            {card &&
                                card.map((product) => (
                                    <li key={product.id}>
                                        <button
                                            className={style.close}
                                            onClick={() => del(product)}
                                        >
                                            <IoClose />
                                        </button>
                                        <img
                                            src={product.image_url}
                                            alt={product.name}
                                            style={{
                                                borderRadius: '10px',
                                                width: '100px',
                                                height: '100px',
                                            }}
                                        />

                                        <div className={style.textWraper}>
                                            <div className={style.nameProduct}>
                                                <h3>{product.name}</h3>
                                                <p>{product.brand_name}</p>
                                                <p style={{ color: '#0BA42D' }}>In stock</p>
                                            </div>
                                            <span>
                                                <button onClick={() => handleSubtract(product)}>
                                                    -
                                                </button>
                                                <p>{product.quantity}</p>
                                                <button onClick={() => handleAdd(product)}>+</button>
                                            </span>
                                            <div className={style.productPrice}>
                                                <h3>${product.price}</h3>
                                                <h3>${priceProduct(product).toFixed(2)}</h3>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                        </ul>
                    )}
                </div>
                <div className={style.cardTotal}>
                    <h2>CART TOTALS</h2>
                    <div className={style.textwrappers}>
                        <span>
                            <p>Shipping (3-5 Business Days)</p>
                            <h4>Free</h4>
                        </span>
                        <span>
                            <p>TAX (estimated for the United States (US))</p>
                            <h4>$0</h4>
                        </span>
                        <span>
                            <p>Subtotal</p>
                            <h4>$399.00</h4>
                        </span>
                    </div>
                    <div className={style.totel}>
                        <h3>Total</h3>
                        <h3>${calculateSubtotal().toFixed(2)}</h3>
                    </div>

                    <div className={style.btn}>
                        <button className={style.protect}>Proceed to Checkout</button>
                        <button onClick={() => navigate(-1)} className={style.goTo}>
                            <FaArrowLeftLong /> Back to Shopping
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;
