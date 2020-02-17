
# Get Started with React! (ES6 + Hooks)

## Install the following:

* [NPM and Node](https://www.npmjs.com/get-npm)
* [Visual Studio Code (recommended)](https://code.visualstudio.com/)

## Read these articles before continuing!

* [ES6](https://www.freecodecamp.org/news/write-less-do-more-with-javascript-es6-5fd4a8e50ee2/)

* [The Create React App section of this article](https://reactjs.org/docs/create-a-new-react-app.html)

* [Understanding Hooks, State and Props](https://reactjs.org/docs/hooks-overview.html)

* [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

## How to build a Todo App with React.

![Picture 1](https://i.imgur.com/2KK22qe.png "Start")

This is how your Visual Studio could should look right after creating your react app (following the guide mentioned above).

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

![Picture 2](https://i.imgur.com/8xyhpkt.png)

This is the App.js file. This is the app which renders everything you see on the webpage. As we have not changed anything, you should be seeing The React logo and some text!

We wont be needing this so you might aswell just remove everything between the ``<div className="App>...</div>`` tags.

Lets create all the folders and files we need for the todo list.

![Picture 3](https://i.imgur.com/ZDDhgLh.png)
The components folder are usually named in all lowercase while the actual components (such as TodoList in this case) are named using CamelCasing. The index.jsx file is the Container Component, the reason for naming it index is simply a personal preference, some prefer calling it TodoListContainer or whatever seperates it 
from the presentational components. 

Lets start writing some code. We start off by importing React using ``import React from 'react'``. This allows us to use the standard React library.

We will then create our first component. Modern React uses ES6 and creates components using the arrow syntax as seen below.
![Picture 4](https://i.imgur.com/JBBQLP8.png)
The code which is returned is what is rendered onto the website. The export keyword allows us to use the component in other components.

Lets prepare the Container Component.
![Picture 5](https://i.imgur.com/prla4oL.png)

As you can see the Container Component (for now) looks pretty much the same as the presentational component. The difference being that the container does not create any jsx elements on it's own but simply renders the presentatial component.

But nothing has changed on the website yet?
Thats because we have not updated the App.js file yet, as mentioned above this is the component which renders EVERYTHING onto the website.
Lets do that now!

Simply import the component into the App.js file and then render the component.
![Picture6](https://i.imgur.com/ryXTJXD.png)
Voila! You now have a webpage which says Todolist with React.

It's time to add state. State (and props) is one of the harder concepts to grasp about React, at the same time it is the core purpose of React.

The modern way of using state is through using Hooks. To create a new state simply write
``const [state, setState] = useState('');`` The first item of the array should be the name of the state and the second should always be called set<thenameofthestate> in order to prevent confusion. 
![Picture7](https://i.imgur.com/vQ6gGdY.png)
You can pass a default state as an argument to the useState function. In this case I passed an array of three Todo Objects.

When using the Presentational / Container structure all state should be contained in the Container component (index.jsx).

The state is then passed to the children components using Props as seen below.

![Picture8](https://i.imgur.com/gzkDsA2.png)
This allows the presentational component to use the state of its parent. When state updates the entire component rerenders.

Lets create the Todo component!
![Picture9](https://i.imgur.com/WirOLeY.png)
Note that I use destructuring for the props. This is an optional step. You could write ``props.task`` instead of ``task`` but this is considered best practice.

Lets render all of these todos on to the website now.

![Picture10](https://i.imgur.com/tKNwivi.png)
The [.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) function is very simply put a for loop (which is very performance efficient). This creates a new Todo component for each and every object in the ``todos`` prop.

Next, lets add the some functionality for creating a new Todo item! We will start of by creating a new state in the Container component called newTodo with the default state '' (an empty string). We also needs to pass the set function as props to the Presentational Component.

![Picture11](https://i.imgur.com/H1PbiPX.png)

Lets create the function for adding a new Todo!

![Picture12](https://i.imgur.com/FNy0TAo.png)
The function uses the setTodos to update the todos state (which is passed to the presentational component as a props).
At the end of the function I simply clear the state (to prevent the user from accidently adding two Todos with the same name).

Now lets create some buttons and input fields for the user!

![Picture13](https://i.imgur.com/JNOUHpY.png)
The input field should have an onChange which changes the state of the parent whenever the user writes something in the input field. ``onChange=((e) => setNewTodo(e.target.value))`` sets the state to whatever is in the input field at the moment.
The button requires an onClick in order to become clickable ``onClick={ () => addNewTodo()}``. 

<a href="http://www.youtube.com/watch?feature=player_embedded&v=cPXw7bfv1TM
" target="_blank"><img src="http://img.youtube.com/vi/cPXw7bfv1TM/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>

( I had some issues finding the stop recording button towards the end).

Now lets add the final(?) piece of the puzzle! Lets create the functionality for completing (or uncompleting) a task!

![Picture14](https://i.imgur.com/EZFoMbK.png)
This function uses a ton of ES6 features including the [spread oprerator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) and [.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort). The function is the passed down to the Todo component as props.

### You're Done (for now)!

Try to add functionality for toggling started on your own!

### Check out the [project @ github](https://github.com/femosc2/react-guide-ia)

### // [Felix](www.felixmorau.se)




<hr />

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
# react-guide-ia
# react-guide-ia
# react-guide-ia
