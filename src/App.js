import React from "react";
import data from "./data.json";
import { ForceGraph2D } from "react-force-graph";
import "./App.css";

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <header className="App-header">Learn Graphs</header>
        <section className="Main">
          <div>
            <p>Graphs are not that hard to understand.</p>
          </div>
          <div className="canvasContainer">
            <ForceGraph2D
              height="1000"
              width="800"
              graphData={data}
              nodeLabel="id"
              linkWidth="2"
              nodeCanvasObject={({ id, x, y }, ctx) => {
                ctx.fillStyle = "#000";

                ctx.beginPath();
                ctx.arc(x, y, 5, 0, 2 * Math.PI, false);
                ctx.fill();
                ctx.fillStyle = "#fff";
                ctx.font = "6px Sans-Serif";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(id, x, y);
              }}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
