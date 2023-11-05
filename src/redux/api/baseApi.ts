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
  }),
});

export const { useGetDoctorsQuery, useGetDoctorByIdQuery } = baseApi;
export default baseApi;
