const path = require('path');
const fs = require('fs');

const root = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(root, relativePath);

module.exports = {
  src: resolveApp('src'),
  indexJs: resolveApp('src/index.tsx'),
  indexHtml: resolveApp('src/index.html'),
  nodeModules: resolveApp('node_modules'),
};
