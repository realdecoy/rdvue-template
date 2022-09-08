// import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const useSassLoader = (isDev: boolean) => ({
  test: /\.(?:sa|s?c)ss$/,
  use: [
    'vue-style-loader',
    // including this causes an error at runtime. unsure why.
    // MiniCssExtractPlugin.loader,
    // 'cache-loader',
    'css-loader',
    'postcss-loader',
    'sass-loader',
  ],
});
