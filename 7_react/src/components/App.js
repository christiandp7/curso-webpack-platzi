import React, { useState } from "react";
import data from "../../data.json";
import Loader from "./Loader";

function App() {
  const [loaderList, setLoaderList] = useState([]);

  return (
    <div>
      <ul>
        {loaderList.map((item) => (
          <Loader {...item} key={item.id} />
        ))}
      </ul>
      <button onClick={() => setLoaderList(data.loaders)}>Show list</button>
    </div>
  );
}

export default App;
