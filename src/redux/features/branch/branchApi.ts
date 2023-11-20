import baseApi from "../../api/baseApi";

const branchApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBranches: builder.query({
      query: () => "/branches",
    }),
    setBranch: builder.mutation({
      query: (branch) => ({
        url: "/create_branch",
        method: "POST",
        body: branch,
      }),
    }),
    deleteBranch: builder.mutation({
      query: (id) => ({
        url: `/branch/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetBranchesQuery,
  useSetBranchMutation,
  useDeleteBranchMutation,
} = branchApi;
