var path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  // webpack이 컴파일 하는 시작 지점.
  entry: './src/main.ts',

  // 참조: https://webpack.js.org/configuration/devtool/
  //      https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
  // 스태틱 리소스(MIME 타입, 텍스트가 아닌 경우)의 비트를 바이트 문자열로 변환하여 bundle.js에 추가해준다. (검색 : sourceMappingURL)
  devtool: 'inline-source-map',  

  // 참조: https://webpack.js.org/configuration/resolve/
  // 옵션: resolve.alias - 모듈이나 경로를 alias 하여 import 시킨다.
  resolve: {
    extensions: ['.ts', '.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  },

  // 참조: https://webpack.js.org/configuration/module/
  // 옵션: module.rules - 모듈이 생성될때에 로더를 적용하거나, 파서를 수정할 수 있다.
  // 현재는 typescript, vue에 대하여 loader가 설정되어 있다.
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        // loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          esModule: true
        }
      }
    ]
  },

  // webpack으로 패키징 후에 나오는 출력 파일
  output: {
    filename: './dist/bundle.js',
    path: __dirname
  },

  // 부가적으로 사용할 플러그인 셋팅
  // BrowserSyncPlugin은 서버를 띄우고, 변경파일이 있을시 자동으로 브라우져를 reload 시킨다.
  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development, 
      // ./public directory is being served 
      host: 'localhost',
      port: 3333,
      server: { baseDir: ['.', 'index.html'] }
    })
  ]
};