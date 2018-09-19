# using-web-component
Small example of using web components in frameworks


### React example

First of you need to create a new React application if you don't have one already and install the web component you want to use in your React app. Below you have an example to create a React app and install my web component input box.
```
npx create-react-app my-react-app
cd my-react-app
npm install wc-input
```

Then you need to find the component you want to add your add the web component to. In my case this was the ```App.js``` and in this component I simply add a import statement like this ```import 'wc-input';```

Then I just add the web component tag ```<wc-input label="Enter name"></wc-input>``` where I want it to show up in the html template.

React don't have any cache or extra information about the components so any component is allowed and if not available it's left to the web browser to find the implementation.

After you have edited your component you start your react app with the command below.
```
npm start
```

### Angular example

First of you need to create a new Angular application if you don't have one already and install the web component you want to use in your Angular app. Below you have an example to create a Angular app and install my web component input box.
```
npm install -g @angular/cli
ng new my-angular-app
cd my-angular-app
npm install wc-input
```

```app.module.ts```
```CUSTOM_ELEMENTS_SCHEMA```
```import { NgModule } from '@angular/core';```
```schemas: [ CUSTOM_ELEMENTS_SCHEMA ],```

```app.components.ts```
```import 'wc-input';```

```app.components.html```
```<wc-input label="Enter name"></wc-input>```

```
ng serve --open
```
