import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
//import babel from 'rollup-plugin-babel';
import {uglify} from 'rollup-plugin-uglify';
export default {
    input: 'src/index.js',
    output: {
      file: 'lib/bundle.js',
      format: 'umd'
    },
    plugins: [ 
      commonjs({
      }),
            // babel({
            //   exclude: 'node_modules/**' // 只编译我们的源代码
            // }),
      resolve({
      //   customResolveOptions: {
      //     moduleDirectory: 'node_modules'
      // }
      }),
      json(),
      uglify()
    ],
   
  };