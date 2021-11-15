import React from "react";

function Portfolio() {
  return (
    <section className="my-5">
      <h1 className="center" id="about">
        Sample Pictures
      </h1>
      <div className="flex-row center">
        <img
          src={require(`../../assets/portimg/pic1.jpg`).default}
          style={{ width: 400, height: 400 }}
        />
        <img
          src={require(`../../assets/portimg/pic2.jpg`).default}
          style={{ width: 400, height: 400 }}
        />
        <img
          src={require(`../../assets/portimg/pic3.jpg`).default}
          style={{ width: 400, height: 400 }}
        />
        <img
          src={require(`../../assets/portimg/pic4.jpg`).default}
          style={{ width: 400, height: 400 }}
        />
        <img
          src={require(`../../assets/portimg/pic5.jpg`).default}
          style={{ width: 400, height: 400 }}
        />
        <img
          src={require(`../../assets/portimg/pic6.jpg`).default}
          style={{ width: 400, height: 400 }}
        />
        <img
          src={require(`../../assets/portimg/pic7.jpg`).default}
          style={{ width: 400, height: 400 }}
        />
        <img
          src={require(`../../assets/portimg/pic8.jpg`).default}
          style={{ width: 400, height: 400 }}
        />
      </div>
    </section>
  );
}

export default Portfolio;
