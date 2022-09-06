export const useVueLoader = (isDev: boolean) => ({
  test: /\.vue$/,
  loader: 'vue-loader',
  options: {
    hotReload: isDev
  }
});
