import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const exchangeApi = createApi({
  reducerPath: 'exchangeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getBestPrice: builder.query<any, string | void>({
      query: (currency = 'USD') =>
        `/exchangeapp/highestprice/?currency=${currency}`,
    }),

    getPriceList: builder.query<any, void>({
      query: () => `/exchangeapp/pricelist/`,
    }),
    getExchanges: builder.query<any, string | void>({
      query: (currency = 'USD') =>
        `/exchangeapp/pricelist/?currency=${currency}`,
    }),
  }),
});

export const {
  useGetBestPriceQuery,
  useGetPriceListQuery,
  useGetExchangesQuery,
} = exchangeApi;
