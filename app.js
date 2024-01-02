const Heading=React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"first"},
[React.createElement("h1",{},"I am H1"),React.createElement("h2",{},"I am H2")])
,React.createElement("div",{id:"second"},React.createElement("h2",{},"I am H1"))])
const root = ReactDOM.createRoot(
document.getElementById('root')
);
root.render(Heading)