// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
export const useFontLoader = () => ({
  test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
  loader: 'file-loader',
  options: {
    name: '[name][contenthash:8].[ext]',
  },
});
