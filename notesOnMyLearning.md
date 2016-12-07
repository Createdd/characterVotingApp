#### Gulp
The most important Gulp concept is streams. Think of your files passing through a pipe; at one or more points along that pipe, an action is taken. For example, we could insert all our JavaScript files into a scripts pipe which:
- concatenates files into one
- removes console and debugger statements
- minifies the code
- puts the resulting file in a specific location

#### Bower
 is a package manager that lets you easily download JavaScript libraries, such as bootstrap and jQuery, via a command line instead of visiting each individual website, downloading, extracting and adding it to the project manually.

#### ES6 (especially in this project)
- import subset modules (import React from 'react')
- export of modules (export default <>)
- create subclasses with extends (class component extends React.Component)
- arrow function that bind 'this'

#### React Basics
- Fast because of a Virtual DOM
- Composability, i.e. make bigger, more complex components out of smaller components.
- Relatively easy to pick up since there isn’t that much to learn and it does not have a massive documentation like AngularJS and Ember.js.
- Server-side rendering allows us to easily build Isomorphic JavaScript apps.
- The most helpful error and warning messages that I have seen in any JavaScript library.
- Components are self-contained; markup and behavior (and even styles) live in the same place, making components very reusable.

#### Flux Basics
Puts an overview store, which is listening for certain actions and allows to perform certain actions. Flux is really just a fancy term for pub/sub architecture, i.e. data always flows one way through the application and it is picked up along the way by various subscribers (stores) who are listening to it.
