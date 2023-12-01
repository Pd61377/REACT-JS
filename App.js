// const heading = React.createElement("h1",{id:"heading"},"Hello World from React..");
// const Root =  ReactDOM.createRoot(document.getElementById("root"));

// Root.render(heading);


const parent = React.createElement("div",{id:"parent"},
                                 React.createElement("div",{id:"child"},
                                 [React.createElement("h1",{},"I 'm H1"),
                                  React.createElement("h2",{},"I 'm h2 tag")]
                                 
                                 ) )

console.log(parent)     

const root = ReactDOM.createRoot(document.getElementById("root11"))

root.render(parent)