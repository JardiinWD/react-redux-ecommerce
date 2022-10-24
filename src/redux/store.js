import { configureStore } from '@reduxjs/toolkit' // Imported configureStore from toolkit
import cartSlice from './slices/cartSlice' // Imported my CartSlice 



// My object callback
let storeConfigObject = {
    reducer: {
        cart: cartSlice,
    }
}
// Saved to a variable store my configure
const store = configureStore(storeConfigObject)

export default store