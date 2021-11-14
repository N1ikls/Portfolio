module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/styles.scss";',
      },
    },
  },
  transpileDependencies: ["vuetify"],
  publicPath: '/Portfolio/'
};
