import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  tagTypes: ["Reviews"],
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => "/restaurants",
    }),
    getRestaurantById: builder.query({
      query: (restaurantId) => `/restaurant/${restaurantId}`,
    }),
    getMenuByRestaurantId: builder.query({
      query: (restaurantId) => `/dishes?restaurantId=${restaurantId}`,
    }),
    getReviewsByRestaurantId: builder.query({
      query: (restaurantId) => `/reviews?restaurantId=${restaurantId}`,
      providesTags: () => {
        return [{ type: "Reviews" }];
      },
    }),
    getDish: builder.query({
      query: (dishId) => `/dishes?dishId=${dishId}`,
    }),
    getUsers: builder.query({
      query: () => "/users",
    }),

    addReview: builder.mutation({
      query: ({ id, review }) => ({
        url: `/review/${id}`,
        method: "POST",
        body: review,
      }),
      invalidatesTags: () => {
        return [{ type: "Reviews" }];
      },
    }),

    updateReview: builder.mutation({
      query: ({ reviewId, updatedReview }) => ({
        url: `/review/${reviewId}`,
        method: "PATCH",
        body: updatedReview,
      }),
      invalidatesTags: () => {
        return [{ type: "Reviews" }];
      },
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetRestaurantByIdQuery,
  useGetMenuByRestaurantIdQuery,
  useGetReviewsByRestaurantIdQuery,
  useGetDishQuery,
  useGetUsersQuery,
  useAddReviewMutation,
  useUpdateReviewMutation,
} = apiSlice;
