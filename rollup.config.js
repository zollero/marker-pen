
import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';
import uglify from 'rollup-plugin-uglify';
import { version } from './package.json';

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/bundle.js',
        format: 'iife',
        name: 'MarkerPen'
    },
    plugins: [ 
        json(),
        resolve({
            jsnext: true,
            main: true
        }),
        typescript({
            typescript: require('typescript')
        }),
        commonjs({
            include: 'node_modules/**',  // Default: undefined\
            ignore: [ 'conditional-runtime-dependency' ]
        }),
        // uglify()
    ],
    watch: {
        include: 'src/**',
        exclude: 'node_modules/**'
    }
}