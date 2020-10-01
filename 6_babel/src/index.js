import "./css/index.css";
import search from "./search";
import render from "./render";
const id = prompt("quien es este pokemon");

search(id)
  .then((data) => {
    render(data);
  })
  .catch((err) => {
    console.log("no ubo pokemon: " + err);
  });
