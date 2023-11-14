import baseApi from "../../api/baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBlog: builder.mutation({
      query: (blogData) => ({
        url: "/create_blog",
        method: "POST",
        body: blogData,
      }),
    }),
    getAllBlog: builder.query({
      query: () => "/blogs",
    }),
  }),
});

export const { useAddBlogMutation, useGetAllBlogQuery } = blogApi;
