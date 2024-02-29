import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";

import { setupListeners } from "@reduxjs/toolkit/query/react"; // Updated import

export const store = configureStore({
    reducer: {
        counterReducer,
    },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
