// Any JSX element can write a self-closing tag  <div /> or write as HTML <div></div>, 
// and every element must be closed. .**
//  ** <div />
// ** <div></div>
// **The difference : there is no way to include anything in the <div />.**

const JSX = (
 <div>
    <h2>Welcome to React!</h2> <br />
        <p>Be sure to close all tags!</p>
    <hr />
</div>
)



// **Create a React Component**
// **stateless component**Can receive data and render it, doesn't manage or track changes to the data**
//Function name has to be capital letter

const Component = function() {
return (
<div className='customClass' />
);
};

const DemoComponent = function() {
 return (
 <div>Hello</div>
 );
};

//So the Kitten class now has access to many useful React features, such as local state and lifecycle hooks. 

class Kitten extends React.Component {
constructor(props) {
super(props);
}
 render() {
return (
 <h1>Hi</h1>
  );
}
}


// **React calls your function (Greeting) whenever it needs to show or update this part of the page.**
// **The props object contains all the attributes you passed in, like name="Alex".**
// **Your function returns JSX, which is a description of what should appear in the browser.**



// “Props”: properties—like parameters for component. read-only, don’t change them inside the component.
function Greeting(props) {
      return <h1>Hello, {props.name}!</h1>;
}

//call the function
<Greeting name="Alex" />     


const ChildComponent = () => {
return (
 <div>
 <p>I am the child</p>
 </div>
);
};



// This code is about showing a list of foods on a web page.It uses React, but you can think of it as a way to write little “sections” (or components) of a page,
//  like nesting boxes inside each other.

// a tiny box that shows a title “Fruits:” and a bullet list of 4 fruits JavaScript class- TypesOfFood ,  later use it like <TypesOfFood />.*
const TypesOfFruit = () => {
return ( 
  <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};


// another box place first fruit list (TypesOfFruit).It doesn’t add anything new—it’s just a container that holds the fruit list.

const Fruits = () => {
  return (
    <div>
      <TypesOfFruit />     {/\* calls the function component TypesOfFruit\*/}
    </div>
  );
};

//extends means “inherits from” or “is built on top of”.React.Component is the base blueprint that React gives you to create a class component.**
// **By writing extends React.Componentg: Make a new component that behaves like a React component,and add my own custom details to it.”**
// you can: write a render() describe what appear on the page. 
// Imagine React gives you a basic “template” for a reusable section of a webpage.**
//“I’m making a special section called TypesOfFood based on React’s template, so I can decide exactly what it should show.”**
//“Create a React component called TypesOfFood using a class, and give it all the powers that any normal React component has.”**

class TypesOfFood extends React.Component {
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
      </div>
    );
  }
};


// **This is the main box.**
// **• It puts a big heading: “Types of Food:”.**
// **• Then it places the Fruits box, which itself places the TypesOfFruit list.**
// This is why later in the code you see:
// That render() method is React’s way of asking:
// “Okay, when we show TypesOfFood, what should it look like?”



function MyBox(props) {
  // Variable inside the component (your own note)
  const favoriteFruit = "Apple";
  return (
    <div>
      {/\* Reading the variable \*/}
      <p>My favorite fruit is: {favoriteFruit}</p>
      {/\* Reading the prop (note from outside) \*/}
      <p>Hello, {props.name}!</p>
    </div>
  );
}

// Using the component and passing a prop

function App() {
  return (
    <div>
      <MyBox name="Alex" />
      <MyBox name="Sam" />
    </div>
  );
}


// My favorite fruit is: Apple
// Hello, Alex!
// My favorite fruit is: Apple
// Hello, Sam!
// Variables → your personal data inside the component.
// Props → data passed in from outside, like a “note someone gives you.”





