// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
export const useTsLoader = (isDev: boolean) => ({
  test: /\.tsx?$/,
  loader: 'esbuild-loader',
  options: {
    loader: 'ts',
    target: 'es2015',
  },
});
