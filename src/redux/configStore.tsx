import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "./MovieReducer/MovieReducer";
import UserReducer from "./UserReducer/UserReducer";

export const store = configureStore({
    reducer: {
      MovieReducer:MovieReducer,
      UserReducer:UserReducer,
      
    },
  });





export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
