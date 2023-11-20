import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "hospitalApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:8000/api/v1",
    baseUrl: "https://hospital-app-team-project-server.vercel.app/api/v1",
  }),
  tagTypes: ["users", "blog", "doctors", "product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),
  }),
});

export const { useGetProductsQuery } = baseApi;
export default baseApi;
