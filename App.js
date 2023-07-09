const heading1 = React.createElement("h1",{id:"heading1"},"Hello from React!");
console.log(heading1);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root)
root.render(heading1);