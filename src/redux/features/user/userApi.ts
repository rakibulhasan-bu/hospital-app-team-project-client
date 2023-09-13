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
  }),
});

export const { useGetUsersQuery, useInsertUsersMutation } = userApi;
