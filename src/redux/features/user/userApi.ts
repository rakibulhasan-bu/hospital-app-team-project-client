import baseApi from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["users"],
    }),
    insertUsers: builder.mutation({
      query: (newUser) => ({
        url: "/users",
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: ["users"],
    }),
    getSingleUsers: builder.query({
      query: (email) => `/users/${email}`,
      providesTags: ["users"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetSingleUsersQuery,
  useInsertUsersMutation,
} = userApi;
