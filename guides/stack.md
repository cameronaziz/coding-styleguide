# React/Redux Stack 🔥

## Components

Most React components should contain only UI and no logic to handle data (in or out).
The only functions manipulating data should be use for UI only related stuff, like formatting a label. Ex: [getLabel for BadgeContact](https://github.com/aircall/aircall-phone/blob/7066cc85e7d86b1a41d79a521f9e63effd461b1a/app/javascript/components/BadgeContact/index.tsx#L5).

They stay in the `components` folder.

Each component has its own folder with its name, containing an index.ts file with the main component class. This structure allows to put other component specific files in the same place, like style or subcomponents.

## Pages

Some components are related to UI but more complex because they are in fact components' containers.
They use smaller components to build a complex UI and handle all the heavy duty data manipulation before sending to the child components. Ex: [CallHistory](https://github.com/aircall/aircall-phone/blob/7066cc85e7d86b1a41d79a521f9e63effd461b1a/app/javascript/components/CallHistory/index.tsx) or [Todos](https://github.com/aircall/aircall-phone/blob/7066cc85e7d86b1a41d79a521f9e63effd461b1a/app/javascript/components/Todos/index.tsx).

Check [this](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) & [that](https://medium.com/@learnreact/container-components-c0e67432e005) for the theory around it.

They stay in the `src/containers` folder

## Redux

Nothing too special here. We mainly use the basic concepts of Redux : [Actions and Reducers](https://redux.js.org/basics).

We added Selectors on the Store with [reselect](https://github.com/reduxjs/reselect).

The data flow is just as described in [Redux documentation](https://redux.js.org/basics/data-flow).

Actions, Reducers and Selectors stay in the `src/store` folder

## Redux Saga

We added the Redux middleware [Redux Saga](https://github.com/redux-saga/redux-saga) to centralize all the asynchronous processes on an action call.

Sagas are :

- written like synchronous functions (no callback)
- easy to test in isolation
- based on ES6 generator functions which can be exited and later re-rentered (pausable, resumable, etc)
- meant to centralize the main business logic. It’s the main place to look at to understand the whole flow of an action.

redux-saga relies on effects to handle async calls simelessly :

- Fork: Tells the middleware to perform some non blocking calls
- Take/TakeLatest : This is blocking. Instruct the middleware to wait for a specified action type.
- Select : This is blocking. Reads the store using selector functions
- Call : This effect is blocking
- Put : This is non blocking. Dispatch an action to the store.

The documentation is very thorough. You can check the full list of Effects [here](https://redux-saga.js.org/docs/api#effect-creators)

The Sagas stay in the `src/sagas` folder

## API

All API calls are wrapped into classes for each object type (User, Number, Search, ...).
The functions are simple wrappers passing the params to the correct paths.
All of them use [a core Api class](https://github.com/aircall/aircall-phone/blob/master/src/api/api.ts) that abstracts API aspects (Rails params format, headers).

❓Type the expected response with [Runtypes](https://github.com/pelotom/runtypes) ?

The API classes stay in the `src/api` folder
