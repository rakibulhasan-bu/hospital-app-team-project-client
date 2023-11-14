import baseApi from "../../api/baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBlog: builder.mutation({
      query: (blogData) => ({
        url: "/create_blog",
        method: "POST",
        body: blogData,
      }),
      invalidatesTags: ["blog"],
    }),
    getAllBlog: builder.query({
      query: () => "/blogs",
      providesTags: ["blog"],
    }),
  }),
});

export const { useAddBlogMutation, useGetAllBlogQuery } = blogApi;
