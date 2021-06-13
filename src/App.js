import "./App.css";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(data);
  };

  return (
    <div>
      <h1 className="title">Markdown Editor</h1>
      <button
        className="copy"
        data-tool-tip="copy to clipboard"
        onClick={(e) => {
          copyToClipBoard();
          e.target.innerHTML = "copied";
          setTimeout(() => {
            e.target.innerHTML = "copy";
          }, 1000);
        }}
      >
        copy
      </button>
      <div className="container">
        <textarea
          type="text"
          className="mdInput"
          value={data}
          onChange={(e) => {
            setData(e.target.value);
          }}
          placeholder="Enter markdown here"
        />
        <div className="mdOutput">
          <ReactMarkdown remarkPlugins={[gfm]} children={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
