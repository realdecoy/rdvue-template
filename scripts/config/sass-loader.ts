// Import MiniCssExtractPlugin from "mini-css-extract-plugin";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useSassLoader = (isDev: boolean) => ({
  test: /\.(?:sa|s?c)ss$/,
  use: [
    'vue-style-loader',
    // Including this causes an error at runtime. unsure why.
    // MiniCssExtractPlugin.loader,
    // 'cache-loader',
    'css-loader',
    'postcss-loader',
    'sass-loader'
  ]
});
