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
    }),
  }),
});

export const {
  useAddDoctorMutation,
  useGetDoctorByIdQuery,
  useGetDoctorsQuery,
} = doctorApi;
