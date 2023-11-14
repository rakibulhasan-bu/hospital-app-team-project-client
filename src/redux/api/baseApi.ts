import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "hospitalApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:8000/api/v1",
    baseUrl: "https://hospital-app-team-project-server.vercel.app/api/v1",
  }),
  tagTypes: ["users", "blog", "doctor", "product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),
    setProduct: builder.mutation({
      query: (doctor) => ({
        url: "/product",
        method: "POST",
        body: doctor,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useSetProductMutation,
} = baseApi;
export default baseApi;
