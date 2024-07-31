/**
 * <div id="parent">
 * <div id="child">
 * <h1>I'm h1 tag</h1>
 * </div>
 * </div>
 * ReactElement(Object)= HTML Brower understands
 * 
 * 
 * 
 * 
 * 
 */
// Creating a nested structure with React.createElement
const parent = React.createElement(
    "div",
    { className: "parent", id: "parent" },
    React.createElement(
        "div",
        { className: "child", id: "child" },
       [React.createElement("h1", { className: "heading" }, "I am h1 Tag"),
        React.createElement("h2", { className: "heading" }, "I am h2 Tag"),]
        /**
         * if you pass more then one child convert them in to arry
         */
    )
);

console.log(parent); // object

// Render the parent element to the root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
