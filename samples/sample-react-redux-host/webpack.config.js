const generateBuildConfig = require('@micro-frontend-react/core/lib/WebpackConfigs');

const devServerPort = 8080;
const useHttps = false;
const openBrowser = true;

const globalVariables = {
  /* =========================
   * Add build time variables here
   * These variables also need to added in ./global.d.ts file to be available in Typescript
   * ====================== */

  __IS_DEVELOPMENT__: process.env.NODE_ENV === 'development' || true,
  __APP_NAME__: 'Micro-Frontend Host Application',
  __BASE_URL__: process.env.baseUrl || `http${useHttps ? 's' : ''}://localhost:${devServerPort}`,
};

const hostEntries = {
  /* =========================
   * Add Webpack entry for host application
   * ====================== */

  app: './src/App.tsx',
};

module.exports = generateBuildConfig({
  cwd: __dirname,
  hostEntries,
  devServer: {
    devServerPort,
    useHttps,
    openBrowser,
  },
  globalVariables,
  externalScripts: [
    'https://ee.azureedge.net/react/17.0.2/react.production.min.js',
    'https://ee.azureedge.net/react/17.0.2/react-is.production.min.js',
    'https://ee.azureedge.net/react/17.0.2/react-dom.production.min.js',
  ],
});
