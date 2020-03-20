import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import eslint from 'rollup-plugin-eslint';
import typescript from '@rollup/plugin-typescript';

const name = 'ElementComponents';

function standardBuilds() {
    return {
        input: ['src/index.js'],
        output: [
            { dir: 'lib', format: 'cjs', name },
            { dir: 'es', format: 'es', name }
        ],
        plugins: [
            typescript(),
            babel({
                plugins: ['external-helpers'],
                exclude: ['node_modules/**']
            }),
            replace({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
            resolve({
                browser: true
            }),
            commonjs()
        ],
        experimentalCodeSplitting: true
    };
}

function devBuild() {
    if (process.env.NODE_ENV === 'production') {
        return {};
    }
    return {
        input: 'src/index.js',
        output: {
            file: 'dist/component.umd.js',
            format: 'umd',
            name,
            sourcemap: true
        },
        external: ['aphrodite'],
        plugins: [
            eslint({
                throwOnError: true
            }),
            typescript(),
            babel({
                plugins: ['external-helpers'],
                exclude: ['node_modules/**']
            }),
            replace({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
            resolve({
                browser: true
            }),
            commonjs()
        ]
    };
}

export default [standardBuilds(), devBuild()];
