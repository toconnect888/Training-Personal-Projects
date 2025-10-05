function MyBox(props) {
  // Variable inside the component (your own note)
  const favoriteFruit = "Apple";

  return (
    <div>
      {/* Reading the variable */}
      <p>My favorite fruit is: {favoriteFruit}</p>

      {/* Reading the prop (note from outside) */}
      <p>Hello, {props.name}!</p>
    </div>
  );
}

// Using the component and passing a prop
export default function MyApp() {
  return (
    <div>
      <MyBox name="Alex" />
      <MyBox name="Sam" />
    </div>
  );
}


console.log("Hello from my page!");
