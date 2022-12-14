//FIXME: N.B : you can use the shortcut `rxslice` to create the correct structure

import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    // These are the initial states of Cart
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState, // Object initial State
    // Methods for managing the cart
    reducers: {
        addItem: (state, action) => {
            // For the new Item
            const newItem = action.payload
            // For an existing item in my current state I tried to find out if the current item' Id was equal to the new Item' id
            const existingItem = state.cartItems.find(item => item.id === newItem.id)
            // Updated the state total Quantity
            state.totalQuantity++ // Here, with redux Toolkit I can increment with ++. Not sure if in the previous version I could.
            // If statement for a new Item
            if (!existingItem) {
                // I will try to push on the current state the new Item with his props
                state.cartItems.push({
                    id: newItem.id, // ID
                    productName: newItem.productName, // ProductName
                    image: newItem.image, // Product Image
                    price: newItem.price, // Product Price
                    quantity: 1, // Qty (as default I set to 1)
                    totalPrice: newItem.price // Same as the Product price cause I set 1 quantity
                })
            }
            else {
                // Managing the quantity of cart
                existingItem.quantity++
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
            }
            // Manging state for the total amount
            state.totalAmount = state.cartItems.reduce((total, item) => {
                return total + Number(item.price) * Number(item.quantity)
            }, 0)
            // Watched to the console the result
            // console.log(state.totalQuantity);
            // console.log(state.cartItems);
            // console.log(newItem)
        },
        deleteItem: (state, action) => {
            // Create the id variable and give it the action.payload
            const id = action.payload
            // Find out the existing item with the find method where item.id is equal as variable id
            const existingItem = state.cartItems.find(item => item.id === id)
            // If the existingItem is true
            if (existingItem) {
                // Filter the cartItems and find out where item.id is different from variable id
                state.cartItems = state.cartItems.filter(item => item.id !== id)
                // Update the totalQuantity, removing the existing Item quantity
                state.totalQuantity = state.totalQuantity - existingItem.quantity
            }
            // Manging state for the total amount
            state.totalAmount = state.cartItems.reduce((total, item) => {
                return total + Number(item.price) * Number(item.quantity)
            }, 0)
        }
    }
});

export const cartActions = cartSlice.actions

export default cartSlice.reducer