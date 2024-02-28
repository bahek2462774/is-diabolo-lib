# is-diabolo-lib
Components Library that includes 4 components:

Component A - has control buttons to modify a counter (Plus & Minus)

Component B - shows the current counter value

Component C - has a single button to reset the counter

Component D - shows a language dropdown to change locale

Library provides two types of builds. 
1. Web-components - to be able to use it without any FE frameworks. (bundle includes all necessary global dependencies, such as Vue or tailwind styles)
2. Vue-components - to be able to use it within your Vue application (bundle doesn't include global dependencies)

## Project Setup
clone the project
```sh
git clone https://github.com/bahek2462774/is-diabolo-lib.git
```
install dependencies
```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production
Project has two build scripts
```sh
npm run build-web-components
```
and
```sh
npm run build-vue-components
```
To compile all together just run
```sh
npm run build
```
### built package contains:
1. `webComponents.js` and `webComponents.umd.cjs` - these are esm and umd modules with web components (independent from Vue)

Could be imported withing `is-diabolo-lib/web-components namespace`
```sh
import 'is-diabolo-lib/web-components'
```

2. `main.js` and `main.cjs` - these are esm and umd modules with Vue Components. <mark>CSS from tailwind is not included</mark>
Could be imported withing `is-diabolo-lib/vue-plugin namespace`

`App.vue`
```js
import { createApp } from 'vue'
import isDiaboloLib from 'is-diabolo-lib/vue-plugin'

import App from './App.vue'
import '@/styles.scss'

const app = createApp(App)
app.use(isDiaboloLib) // initialize is-diabolo-li components
app.mount('#app')
```
3. `style.css` - tailwind css styles. Could be imported withing `is-diabolo-lib/style namespace`
If you use scss make sure you have installed dart sass

```sh
npm install -D sass
```

Now you can import this css compiled styles inside your scss files
```scss
@import url('is-diabolo-lib/style')
```



### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Use published library in your consumer project 
1. Install library
```sh
npm install is-diabolo-lib
```
2. Use it either as Web component `import 'is-diabolo-lib/web-components'`  or as Vue Components `import isDiaboloLib from 'is-diabolo-lib/vue-plugin'`

### Try package locally in your consumer project
1. Clone repository
```sh
git clone https://github.com/bahek2462774/is-diabolo-lib.git
```
2. Go into is-diabolo-lib folder
```sh
cd is-diabolo-lib
```
3. Install all dependencies
```sh
npm install
```
4. Run build command
```sh
npm run build
```
5. To be able to try this npm package in your consumer projects link this npm package
```sh
npm link
```

After that you can go into your consumer project with npm and link is-diabolo-lib there.

For example:
```sh
cd /some/path/consumer-project-app
npm link is-diabolo-lib
```
After that your node_modules folder will contain a symbol link to your local built npm package `is-diabolo-lib`
