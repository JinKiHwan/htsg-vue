const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        //모든 변수 파일 연결
        additionalData: `
          @import "@/assets/scss/base/_index.scss";
          @import "@/assets/scss/helpers/_index.scss";
          @import "@/assets/scss/layout/_index.scss";
        `,
      },
    },
  },
});
