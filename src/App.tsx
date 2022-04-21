import React from "react";

import CodeCell from "./components/code-cell";
import TextEditor from "./components/text-editor";

const App = () => {
  return (
    <div>
      <TextEditor />
      <CodeCell />
    </div>
  );
};

export default App;
