import React from "react";

function Nav(props) {
  const { home, setHome } = props;

  return (
    <header className="flex-row px-2 py-2 hbackground">
      <h2>
        <a href="/" className="hbackground">
          Sallam Thabet
        </a>
      </h2>
      <nav>
        <ul className="flex-row ">
          <li className="px-2 py-2 ">
            <a
              href="#about"
              className="hbackground"
              onClick={() => setHome("about")}
            >
              About me
            </a>
          </li>
          <li className="px-2 py-2">
            <a
              href="#portfolio"
              className="hbackground"
              onClick={() => setHome("portfolio")}
            >
              {" "}
              Portfolio{" "}
            </a>
          </li>

          <li className="px-2 py-2">
            <a
              href="#experience"
              className="hbackground"
              onClick={() => setHome("experience")}
            >
              {" "}
              Experience{" "}
            </a>
          </li>

          <li className={`px-2 py-2 `}>
            <a
              href="#contact"
              className="hbackground"
              onClick={() => setHome("contact")}
            >
              {" "}
              Contact{" "}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
