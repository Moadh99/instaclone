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

const Usernames = [
  {
    username: "sdaf",
  },
];

function Username() {
  return (
    <section className="username">
      {Usernames.map((username) => {
        // const { frame } = story;
        return (
          <section>
            <div id="frame">
              <div id="image">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
                  alt=""
                />
              </div>
            </div>

            <div>
              <p>Unknown</p>
            </div>
          </section>
        );
      })}
    </section>
  );
}

const Posts = [
  {
    user: "fs",
  },
];

function Post() {
  return (
    <section className="post">
      {Posts.map((post) => {
        return (
          <div>
            <h1>UNKNOWN</h1>
          </div>
        );
      })}
    </section>
  );
}

const Profiles = [
  {
    username: "GG",
  },
];

function Profile() {
  return (
    <section className="profile">
      {Profiles.map((profile) => {
        return (
          <section>
            <div id="box">
              <Username />
              <Username />
              <Username />
              <Username />
              <section id="responsive">
                <Username />
                <Username />
                <Username />
                <Username />
                <Username />
                <Username />
                <Username />
                <Username />
                <Username />
              </section>
            </div>
          </section>
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

ReactDOM.render(
  <div>
    <List />
    <Profile />
    <Post />
  </div>,
  document.getElementById("root")
);
