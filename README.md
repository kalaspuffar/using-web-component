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

Angular has a cache list of all the available components so in order to use web components we need to configure our module so it recognize custom elements. This is done by adding a schema to our module.

In my case I open the module ```app.module.ts``` and then add ```CUSTOM_ELEMENTS_SCHEMA``` the import statement for angular core (```import { NgModule } from '@angular/core';```).

Then I need to update the module configuration and add ```schemas: [ CUSTOM_ELEMENTS_SCHEMA ]```.

After that I need to import my web component into the angular component and this is done in ```app.components.ts``` with the import statement ```import 'wc-input';```.

Lastly I add my web component tag ```<wc-input label="Enter name"></wc-input>``` into the html template file ```app.components.html```.


In order to see my changes I need to serve the angular application and this is done with the command below.
```
ng serve --open
```

### Vanilla example

To try out the vanilla example using the bundled minified version of the component just follow the instruction below.

```
cd my-vanillajs-app
npm start
```