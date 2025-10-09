const config = {
  schemaFile: process.env.VITE_ENV_API_URL,
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
      apikey: process.env.VITE_ENV_API_KEY,
    },
  },
};

export default config;
