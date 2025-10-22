const config = {
  // eslint-disable-next-line no-undef
  schemaFile: `${process.env.VITE_PUBLIC_DATABASESUPABASE_URL}/rest/v1/`,
  apiFile: './src/store/api-slices/emptyApi.ts',
  apiImport: 'emptySplitApi',
  outputFile: './src/api/api.ts',
  exportName: 'api',
  hooks: {
    queries: true,
    lazyQueries: true,
    mutations: true,
  },
  useEnumType: true,
  httpResolverOptions: {
    headers: {
      // eslint-disable-next-line no-undef
      apikey: process.env.VITE_PUBLIC_DATABASESUPABASE_ANON_KEY,
    },
  },
};

export default config;
