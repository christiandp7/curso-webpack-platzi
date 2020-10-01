import React, { useState } from "react";
import data from "../../data.json";
import Loader from "./Loader";

import logo from "../images/black-cap.png";

import "../scss/sass.scss";
import "../less/less.less";
import "../stylus/stylus.styl";

function App() {
  const [loaderList, setLoaderList] = useState([]);

  async function handleClick() {
    setLoaderList(data.loaders);
    const { alerta } = await import("./alert.js");
    alerta("este modulo ha cargado dinamicamente");
  }

  return (
    <div>
      <p className="sass">esto es sass</p>
      <p className="less">esto es less</p>
      <p className="stylus">esto es stylus</p>
      <p>App React - Webpack</p>
      <p>
        <img src={logo} alt="" width={80} />
      </p>
      <ul>
        {loaderList.map((item) => (
          <Loader {...item} key={item.id} />
        ))}
      </ul>
      <button onClick={handleClick}>Show list</button>
    </div>
  );
}

export default App;
