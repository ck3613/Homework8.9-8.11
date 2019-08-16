module.exports = {
  // 环境变量，模式
  mode:'production',
  // 入口文件
  entry:__dirname + '/src/index.js',
  // 编译产出放的目录
  output: {
    path: __dirname+ '/dist/',
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test:/\.js$/,
        use:{
          loader: "babel-loader",
          options: {
            presets:['@babel/preset-env']
          }
        }
      }
    ]
  }
}