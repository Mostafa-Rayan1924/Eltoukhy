import { configureStore } from "@reduxjs/toolkit";
import bannerSlice from "./HomeSlices/bannersSlice";
import ServicesSlice from "./HomeSlices/servicesSlice";
import SuppliersSlice from "./HomeSlices/suppliersSlice";
import Projectslice from "./HomeSlices/projectSlice";

export const store = configureStore({
  reducer: {
    banners: bannerSlice,
    services: ServicesSlice,
    suppliers: SuppliersSlice,
    projects: Projectslice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
