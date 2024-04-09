module.exports = {
    entry: './src/org-helper.ts',
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
	    {
                test: /\.tsx?$/,
                use: ['ts-loader']
            }
        ]
    },
    resolve: {
	extensions: ['.tsx', '.ts', '.js'],
    }
};
