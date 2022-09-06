export const useFontLoader = (isDev: boolean) => ({
  test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
  loader: 'file-loader',
  options: {
    name: '[name][contenthash:8].[ext]',
  },
});
