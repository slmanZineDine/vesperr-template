import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// CONSTANTS
const BASE_URL = "http://reactapi.matrix-dev.sy/Api.php";

export const apiSlice = createApi({
   reducerPath: "api",
   baseQuery: fetchBaseQuery({
      baseUrl: BASE_URL,
      // mode: "no-cors",
   }),
   endpoints: (builder) => ({
      getClinets: builder.query({
         query: () => "?action=Client",
      }),
      getAboutUs: builder.query({
         query: () => "?action=Aboutus",
      }),
      getServices: builder.query({
         query: () => "?action=Services",
      }),
      getTeam: builder.query({
         query: () => "?action=Team",
      }),
   }),
});

export const {
   useGetClinetsQuery,
   useGetAboutUsQuery,
   useGetServicesQuery,
   useGetTeamQuery,
} = apiSlice;
