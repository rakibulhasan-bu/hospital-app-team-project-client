import baseApi from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (productData) => ({
        url: "/create_product",
        method: "POST",
        body: productData,
      }),
      invalidatesTags: ["product"],
    }),
    getAllProduct: builder.query({
      query: () => "/products",
      providesTags: ["product"],
    }),
    getSingleProduct: builder.query({
      query: (id) => `/product/${id}`,
      providesTags: ["product"],
    }),
    updateProduct: builder.mutation({
      query: ({ updateData, id }) => ({
        url: `/product/${id}`,
        method: "PATCH",
        body: updateData,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetAllProductQuery,
  useGetSingleProductQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
