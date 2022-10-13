
# micro-frontends-host

### `npm run start`

Open http://localhost:9999 to view it in the browser.

##
##
##

## Set Up

### 1 : Initialize App
npx create-react-app microfrontendhost
cd mfe1
npm install webpack webpack-cli webpack-server html-webpack-plugin babel-loader webpack-dev-server
Check and make sure it installed Webpack 5 or up 

### 2 : Bootstrap

rename index.js to bootstrap.js

create a new index.js that has one line
import('./bootstrap');

### 3 : Expose your components with plugin

```
plugins: [
    new ModuleFederationPlugin({
      name: "app1",
      library: { type: "var", name: "app1" },
      filename: "remoteEntry.js",
      exposes: {
        // expose each component
        "./Header": "./src/components/Header",
      },
      shared: ["react", "react-dom"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
```
