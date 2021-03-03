# Lesson 2, 3 and 4 Code Along

This week we are creating a web app to display Magic The Gathering (MTG) cards.

We will be utilizing everything we have learned so far and more to complete this project.

Please get familiar with the documentation for the API.

https://magicthegathering.io/

I will not be covering styling in this project - I want you to style this using any method of your choosing.

## Project setup

Create your new project call it whatever you want.

<ol>
    <li>Create a new react project</li>
    <li>Remove any bloat before you continue</li>
    <li>Install react-router-dom package</li>
    <li>Install any packages you want(sass, axios, tailwind etc.)</li>
</ol>

Next I like to create all my folders and files i KNOW that i need.

I'll make the following (everything inside the ./src folder):

```jsx
./utils/uris.js
./sass/main.scss
./components
./pages/Home.js
```

### Configure our router

In App.js

```jsx
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
```

```jsx
return (
  <div className={'flex flex-col'}>
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </Router>
  </div>
);
```
