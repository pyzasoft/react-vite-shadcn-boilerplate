import { configureStore } from "@reduxjs/toolkit";
import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import rootReducer from "./reducers";
// import { isInDevelopmentMode } from "actions/api/utils";

const store = configureStore({
  reducer: rootReducer,
  // devTools: isInDevelopmentMode(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // NOTE: happens in tournaments.data.0.tournaments.0.start_time
    }),
});

export default store;

/* export type AppThunk = ThunkAction<
  void | Promise<any>,
  any,
  unknown,
  Action<string>
>; */

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
