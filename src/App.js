import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

// const myDiv = React.createElement("div", { id: "container" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", null, "This is the nested text"),
//     React.createElement(
//       "div",
//       null,
//       React.createElement(
//         "ul",
//         null,
//         React.createElement("li", null, "The deep nested line")
//       )
//     ),
//   ]),
//   React.createElement("div", { id: "childB" }, [
//     React.createElement("h2", null, "This is child b"),
//     React.createElement("p", null, "this is a para"),
//   ]),
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(myDiv);

// React First Program

// 1. First create an element
// const headingText = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );

// console.log(headingText);

// //Creating the root
// const root = ReactDOM.createRoot(document.getElementById("root"));

// //show the text on screen
// root.render(headingText);

/*
#Example 1
<div>
    <div class="child">
        <h1>This is the nested text</h1>
    </div>
</div>
*/

// const myDiv = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "Nested text")
//   )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(myDiv);

/*
#Practice 2
<div>
    <div class="child">
        <h1>This is the nested text</h1>
        <div>
            <ul>
                <li></li>
            </ul>
        </div>
    </div>
    <div id= "childB">
        <h2>This is child b</h2>
        <p>This is a para</p>
    </div>
</div>
*/
