import baseApi from "../../api/baseApi";

const doctorApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDoctors: builder.query({
      query: () => "/doctors",
      providesTags: ["doctors"],
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
      invalidatesTags: ["doctors"],
    }),
    deleteDoctor: builder.mutation({
      query: (id) => ({
        url: `/doctor/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["doctors"],
    }),
    updateDoctor: builder.mutation({
      query: (id) => ({
        url: `/doctor/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["doctors"],
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
