import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "hospitalApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["users"],
  endpoints: (builder) => ({
    getDoctors: builder.query({
      query: () => "/doctors",
    }),
  }),
});

export const { useGetDoctorsQuery } = baseApi;
export default baseApi;
