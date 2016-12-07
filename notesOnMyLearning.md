### Gulp
The most important Gulp concept is streams. Think of your files passing through a pipe; at one or more points along that pipe, an action is taken. For example, we could insert all our JavaScript files into a scripts pipe which:
- concatenates files into one
- removes console and debugger statements
- minifies the code
- puts the resulting file in a specific location
