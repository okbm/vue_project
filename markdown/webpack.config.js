module.exports = {
  entry: './app/app.js',
  output: {
    path: __dirname + '/app',
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  }
};
