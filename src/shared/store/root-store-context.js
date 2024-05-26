import {createContext, useContext} from "react";

export const RootStoreContext = createContext(null);

export const useStore = () => {
    return useContext(RootStoreContext);
}