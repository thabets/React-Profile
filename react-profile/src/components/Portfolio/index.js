import React from "react";

function Portfolio() {
  
 
  return (
    <section className="my-5">
      <h1 id="about">Sample Pictures</h1>
      <div className="flex-row">
        <img
          src={require(`../../assets/small/pic1.jpg`).default}
          style={{ width: 400, height: 400 }}
        />
        <img
          src={require(`../../assets/small/pic2.jpg`).default}
          style={{ width: 400, height: 400 }}
        />
        <img
          src={require(`../../assets/small/pic3.jpg`).default}
          style={{ width: 400, height: 400 }}
        />
        <img
          src={require(`../../assets/small/pic4.jpg`).default}
          style={{ width: 400, height: 400 }}
        />
        <img
          src={require(`../../assets/small/pic5.jpg`).default}
          style={{ width: 400, height: 400 }}
        />
        <img
          src={require(`../../assets/small/pic6.jpg`).default}
          style={{ width: 400, height: 400 }}
        />
        <img
          src={require(`../../assets/small/pic7.jpg`).default}
          style={{ width: 400, height: 400 }}
        />
        <img
          src={require(`../../assets/small/pic8.jpg`).default}
          style={{ width: 400, height: 400 }}
        />
      </div>
    </section>
  );
}

export default Portfolio;
