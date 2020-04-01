import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import eslint from 'rollup-plugin-eslint';
import typescript from '@rollup/plugin-typescript';

const name = 'ElementComponents';

function standardBuilds() {
    return {
        external: ['react', 'react-dom'],
        input: ['src/index.js'],
        output: [
            {
                dir: 'lib',
                format: 'cjs',
                name,
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
            },
            {
                dir: 'es',
                format: 'es',
                name,
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
            }
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
            globals: {
                react: 'React',
                aphrodite: 'aphrodite',
                '@volusion/element-components': 'Components',
                '@volusion/element-proptypes': 'ElementSdk'
            },
            name,
            sourcemap: true
        },
        external: ['aphrodite', 'react', 'react-dom'],
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
