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
  <>
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </Router>
  </>
);
```

Let's fetch some cards in our Home.js page component.

Those of you who have read the lesson content for today in moodle will have seen a very simple but effective way to handle fetching to catch errors in our react apps.

When you do these next steps please refer to this code:

```jsx
import { useState, useEffect } from 'react';
import { API } from '../../constants/api';

function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(API);

        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setBooks(json.data);
        } else {
          setError('An error occured');
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR: An error occured</div>;
  }

  return (
    <>
      {books.map(function (book) {
        return <div key={book.id}>{book.title}</div>;
      })}
    </>
  );
}

export default BookList;
```

**You can not copy the code directly, It won't work.**

Create a state variable (useState) to hold your cards array.

use the useEffect hook to fetch cards from 'https://api.magicthegathering.io/v1/cards'

<ol>
<li>
  console.log the response to get familiar with the structure.
</li>
<li>
  use the setter function from your useEffect to write the cards data to your state variable.
</li>
<li>
  use the map() function to render all the names of the cards to the dom.
</li>
</ol>

Take some time to read through the cards data, indentify what data you want to play with and display and make a mental note of that going forward.

Create a card component to display SOME of the data.

I suggest starting off with the image, the name and the rarity.

(we will perform a fetch to the specific card id later to show more data)
