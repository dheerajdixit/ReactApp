const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports={
  context : path.join(__dirname,'src'),
  entry :'./index.js',
  output :
  {
    path :path.resolve( __dirname,'dist'),
    filename:'./bundle.js'

  },
  module:
  {
    rules :[
      {
    test :/\.js$/,
    loader :'babel-loader'}
  ]
},
plugins:
[
  new htmlWebpackPlugin({
    template:'index.html',
    inject:'body'
  })
]



}
