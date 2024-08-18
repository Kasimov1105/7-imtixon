import { createSlice } from "@reduxjs/toolkit";

export const CardSlice = createSlice({
    name: "card",
    initialState: { 
        card: JSON.parse(localStorage.getItem('card')) || [],
        cardLoading: false,
        cardError: null,
    },
    reducers: {
        saveCard: (state, action) => {
            state.card = action.payload;
            localStorage.setItem('card', JSON.stringify(state.card)); 
        },
        addCard: (state, action) => {
            const existingProduct = state.card.find(product => product.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.card.push({ ...action.payload, quantity: 1 });
            }
            localStorage.setItem('card', JSON.stringify(state.card));
        },
        delCard: (state, action) => {
            const existingProduct = state.card.find(product => product.id === action.payload.id);
            if (existingProduct.quantity > 1) {
                existingProduct.quantity -= 1;
            }
            localStorage.setItem('card', JSON.stringify(state.card));
        },
        deleteCart: (state, action) => {
            state.card = state.card.filter(product => product.id !== action.payload.id);
            localStorage.setItem('card', JSON.stringify(state.card)); 
        },
        setCardLoading: (state, action) => {
            state.cardLoading = action.payload;
        },
        setCardError: (state, action) => {
            state.cardError = action.payload;
        }
    }
});

export const { saveCard, addCard, delCard, setCardLoading, setCardError, deleteCart } = CardSlice.actions;
export default CardSlice.reducer;
