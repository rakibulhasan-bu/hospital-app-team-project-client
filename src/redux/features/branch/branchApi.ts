import baseApi from "../../api/baseApi";

const branchApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBranches: builder.query({
      query: () => "/branches",
      providesTags: ["branch"],
    }),
    getBranchById: builder.query({
      query: (id) => `/branch/${id}`,
      providesTags: ["branch"],
    }),
    setBranch: builder.mutation({
      query: (branch) => ({
        url: "/create_branch",
        method: "POST",
        body: branch,
      }),
    }),
    updateBranch: builder.mutation({
      query: ({ id, branch }) => ({
        url: `/branch/${id}`,
        method: "PATCH",
        body: branch,
      }),
      invalidatesTags: ["branch"],
    }),
    deleteBranch: builder.mutation({
      query: (id) => ({
        url: `/branch/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["branch"],
    }),
  }),
});

export const {
  useGetBranchesQuery,
  useSetBranchMutation,
  useDeleteBranchMutation,
  useGetBranchByIdQuery,
  useUpdateBranchMutation,
} = branchApi;
