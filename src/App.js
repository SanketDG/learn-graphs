import React from "react";
import data from "./data.json";
import { ForceGraph } from "./ForceGraph";
import "./App.css";

function App() {
  const nodeHoverTooltip = React.useCallback((node) => {
    return `<div>${node.name}</div>`;
  }, []);

  console.log(data.links);

  return (
    <div className="App">
      <header className="App-header">Learn Graphs</header>
      <section className="Main">
        <ForceGraph
          linksData={data.links}
          nodesData={data.nodes}
          nodeHoverTooltip={nodeHoverTooltip}
        />
      </section>
    </div>
  );
}

export default App;
