# webpack-prebundles

Multiple entry points, leveraging code-splitting for the build, and then merging the chunks into the final results.

### Scenario
* We have many files in `./bundles` that are almost identical.
* They mostly just contain references to a file or two in `./prebundles/lotsOfDeps.js`.
* There's like ~460 bundles in our scenario that diverge every-so-slightly. (An additional file included here or there.)

### Desired behavior
* Deploy each entry file, with all of the chunks merged back in. 
* Leverage Webpack's awesome Code Splitting during the build process, but have some way to merge in the generated chunk into the final outputted bundle.
* Time to build with code splitting on is like < 1 minute.
* Time to build without code splitting is like 7 minutes and an OOM exception.

### A note on the sample project
It was built on top of `@vue/cli`... they do their own webpack config, which should be visible if you do `npx vue-cli-service inspect`
  * Additionally, it's possible to mess with stuff inside of `vue.config.js#chainWebpack` if you don't want to redeclare plugins, etc. 

Please let me know if you need anything. I'm available in the Webpack Gitter.

### Toggling code splitting on/off
* Inside of `vue.config.js#chainWebpack` toggle this line on/off: `config.optimization.delete('splitChunks');`
 
 ----
 
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npx vue-cli-service build
```
