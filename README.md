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

### Linting

- [ ] [ESLint](http://eslint.org/)
- [ ] [Prettier](https://prettier.io/)
- [ ] [stylelint](https://stylelint.io/)

### Config/Setup
In app component, `configReactProject` allows you to configure your project by adding or deleting, for example: scripts and styles.

The `babel-plugin-module-resolver`package xxx helps you to get all the routes started by *src* configured in the `.babelrc` file.


## Project Structure
The project is structured in modules, an initial load of `App.module.js` is made. The modules, although it does not have why, are associated to routes. The most important thing is to understand the concept of the module:
** Module **: folder composed of a file `example.module.js` and `example.component.js`. Also, if necessary, a `modules` folder and/or a `components` folder.
- `example.module.js`: contains the child routes and the main component, it can also be used as `layout`.
- `example.component.js`: React component.
- `/modules`: submodules / sub routes.
- `/components`: components of `example.component.js`.
Modules can be nested.

Module example: 
![alt text](https://raw.githubusercontent.com/jeiker26/boilerplate-react/master/docs/images/example.module.png "Module example")
