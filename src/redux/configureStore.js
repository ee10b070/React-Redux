import { combineReducers, createStore } from "redux";
import {Product} from "./productReducer";
import {User } from "./userReducer";

export const ConfigureStore = () =>{
    const store = createStore(
        combineReducers({
            products: Product,
            user: User
        })
    );
    return store;
}