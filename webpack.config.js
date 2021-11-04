const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/MOTCHeader.js',
  output: {
    path: path.resolve('lib'),
    filename: 'MOTCHeader.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ],
  },
  resolve: {
    alias: {
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
      'primereact': path.resolve(__dirname, './node_modules/primereact'),
      'primeicons': path.resolve(__dirname, './node_modules/primeicons'),
      'primeflex': path.resolve(__dirname, './node_modules/primeflex'),
    }
  },
  externals: {
    // Don't bundle react or react-dom      
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    }
  }
};
