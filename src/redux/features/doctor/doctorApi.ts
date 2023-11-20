import baseApi from "../../api/baseApi";

const doctorApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDoctors: builder.query({
      query: () => "/doctors",
    }),
    getDoctorById: builder.query({
      query: (id) => `/doctors/${id}`,
    }),
    addDoctor: builder.mutation({
      query: (doctor) => ({
        url: "/add_doctor",
        method: "POST",
        body: doctor,
      }),
      invalidatesTags: ["doctor"],
    }),
    deleteDoctor: builder.mutation({
      query: (id) => ({
        url: `/doctor/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["doctor"],
    }),
    updateDoctor: builder.mutation({
      query: (id) => ({
        url: `/doctor/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["doctor"],
    }),
  }),
});

export const {
  useAddDoctorMutation,
  useGetDoctorByIdQuery,
  useGetDoctorsQuery,
  useDeleteDoctorMutation,
  useUpdateDoctorMutation,
} = doctorApi;
