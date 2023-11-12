import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "hospitalApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  tagTypes: ["users"],
  endpoints: (builder) => ({
    getDoctors: builder.query({
      query: () => "/doctors",
    }),
    getDoctorById: builder.query({
      query: (id) => `/doctors/${id}`,
    }),
    addDoctor: builder.mutation({
      query: (doctor) => ({
        url: "/doctors",
        method: "POST",
        body: doctor,
      }),
    }),
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
    getBranches: builder.query({
      query: () => "/api/v1/branches",
    }),
    setBranch: builder.mutation({
      query: (branch) => ({
        url: "/api/v1/branches",
        method: "POST",
        body: branch,
      }),
    }),
  }),
});

export const {
  useGetDoctorsQuery,
  useGetDoctorByIdQuery,
  useGetProductsQuery,
  useGetProductByIdQuery,
  useAddDoctorMutation,
  useSetProductMutation,
  useGetBranchesQuery,
  useSetBranchMutation,
} = baseApi;
export default baseApi;
