import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App";

const headers = [
  {
    logo: "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",
    home: "https://img.icons8.com/fluency-systems-filled/25/000000/home.png",
    messanger:
      "https://img.icons8.com/material-outlined/25/000000/facebook-messenger--v1.png",
    explore: "https://img.icons8.com/material-outlined/25/000000/compass.png",
    likes: "https://img.icons8.com/material-outlined/25/000000/filled-like.png",
    camera:
      "https://img.icons8.com/fluency-systems-regular/25/000000/camera.png",
    search: "search",
  },
];

function List() {
  return (
    <section className="list">
      {headers.map((header) => {
        const { logo, messanger, home, explore, likes, camera } = header;
        return (
          <div>
            <div className="icons">
              <img id="logo" src={logo} alt="" />
              <img id="likes" src={likes} alt="" />
              <img id="explore" src={explore} alt="" />
              <img id="messanger" src={messanger} alt="" />
              <img id="home" src={home} alt="" />
              <img id="camera" src={camera} alt="" />
              <Header header={header}></Header>
            </div>
          </div>
        );
      })}
    </section>
  );
}

const Header = function (props) {
  const { input } = props.header;
  return (
    <article className="header">
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
    </article>
  );
};

ReactDOM.render(<List />, document.getElementById("root"));
