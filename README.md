## HTML/CSS only site boilerplate

- Webpack 4
- PUG
- CSS (without preprocessors)
- Normalize.css
- No Javacript
- Autoreload for HTML, HMR for CSS

### Requirements
- `clean-webpack-plugin`: to remove `dist` folder each time we build.
- `css-loader`: to parse css files.
- `html-webpack-plugin`: to generate the final HTML file, this is used alongside `pug-loader`.
- `mini-css-extract-plugin`: ExtractTextPlugin for Webpack 4.
- `normalize.cs`: to normalize the CSS
- `optimize-css-assets-webpack-plugin`: to minify the resulting CSS.
- `pug` and `pug-loader`: to compile .pug files into .html.
- `style-loader`: used in development to enable HMR for CSS
- `webpack`: to actually build the website.
- `webpack-cli`: required in Webpack 4.
- `webpack-dev-server`: to test in development.
- `webpack-merge`: to manage production and development webpack configurations.

### Installation
Install all requirements using `npm install`

### Usage
- `npm start` to start the dev server
- `npm run build` to build for production

### Limitations
`index.js` file is used to include the CSS files and PUG file, otherwise Webpack can't them to the dependency graph.
I can't seem to get rid of this limitation, thus a PR will be much welcome.