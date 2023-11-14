import baseApi from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (productData) => ({
        url: "/create_product",
        method: "POST",
        body: productData,
      }),
    }),
    getAllProduct: builder.query({
      query: () => "/products",
    }),
    getSingleProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
    updateProduct: builder.mutation({
      query: ({ updateData, id }) => ({
        url: `/products/${id}`,
        method: "PATCH",
        body: updateData,
      }),
    }),
    deleteProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetAllProductQuery,
  useGetSingleProductQuery,
  useUpdateProductMutation,
  useDeleteProductQuery,
} = productApi;
