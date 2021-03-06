# boilerplate-react

## Index
- React / React Hooks.
- Router with react-router(Pre-config) or Next.js
- Form with @jkr26/react-builder-form.
- Test with react testing library or jest and enzyme.
- i18n
- css or sass, styled-components???
- storybooks or styguide
...

### Core

- [ ] [React](https://facebook.github.io/react/)
- [ ] [React Router](https://github.com/ReactTraining/react-router)
- [ ] [Reselect](https://github.com/reactjs/reselect)
- [ ] [Styled Components](https://github.com/styled-components/styled-components)

### Unit Testing

- [ ] [Jest](http://facebook.github.io/jest/)
- [ ] [react testing library](https://github.com/kentcdodds/react-testing-library)
- [ ] [Cypress]()

### Linting

- [ ] [ESLint](http://eslint.org/)
- [ ] [Prettier](https://prettier.io/)
- [ ] [stylelint](https://stylelint.io/)

### Config/Setup
In app component, `configReactProject` allows you to configure your project by adding or deleting, for example: scripts and styles.

The `babel-plugin-module-resolver`package xxx helps you to get all the routes started by *src* configured in the `.babelrc` file.

config sass: https://github.com/webpack-contrib/sass-loader
config webpack and babel: https://medium.freecodecamp.org/how-to-set-up-deploy-your-react-app-from-scratch-using-webpack-and-babel-a669891033d4


## Project Structure
The project is structured in pages, an initial load of `App.page.js` is made. The pages, although it does not have why, are associated to routes. The most important thing is to understand the concept of the page:
** page **: folder composed of a file `example.page.js` and `example.component.js`. Also, if necessary, a `pages` folder and/or a `components` folder.
- `example.page.js`: contains the child routes and the main component, it can also be used as `layout`.
- `example.component.js`: React component.
- `/pages`: submodules / sub routes.
- `/components`: components of `example.component.js`.
Modules can be nested.

![alt text](https://raw.githubusercontent.com/jeiker26/boilerplate-react/master/docs/images/example.page.png "Module example")
