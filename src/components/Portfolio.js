import React, { useState } from "react";

const Portfolio = () => {
  const [activeCards, setActiveCards] = useState("All");
  return (
    <div className="componentBlock" name="PortfolioSection">
      <h3> Who We've Worked With </h3>
      <div className="portfolioGroups">
        <label
          className={activeCards === "All" ? "active" : ""}
          onClick={() => setActiveCards("All")}
        >
          All
        </label>
        <label
          className={activeCards === "App" ? "active" : ""}
          onClick={() => setActiveCards("App")}
        >
          App
        </label>
        <label
          className={activeCards === "Card" ? "active" : ""}
          onClick={() => setActiveCards("Card")}
        >
          Card
        </label>
        <label
          className={activeCards === "Web" ? "active" : ""}
          onClick={() => setActiveCards("Web")}
        >
          Web
        </label>
      </div>
      <div className="portfolioBlocks">
        <div
          className={
            activeCards === "All" || activeCards === "Card"
              ? "portfolioBlock active"
              : "portfolioBlock"
          }
          style={{
            backgroundImage:
              "url(http://www.nuture.tech/_nuxt/img/1ac7915.png)",
          }}
        >
          <p> Project Title </p>
          <label> Project Description </label>
        </div>
        <div
          className={
            activeCards === "All" || activeCards === "Web"
              ? "portfolioBlock active"
              : "portfolioBlock"
          }
          style={{
            backgroundImage:
              "url(https://i0.wp.com/naijaknowhow.net/wp-content/uploads/2021/02/Ibaka-Tv.png?resize=275%2C183&ssl=1)",
          }}
        >
          <p> Project Title </p>
          <label> Project Description </label>
        </div>
        <div
          className={
            activeCards === "All" || activeCards === "App"
              ? "portfolioBlock active"
              : "portfolioBlock"
          }
          style={{
            backgroundImage:
              "url(https://gatatransport.com.ng/wp-content/uploads/2021/07/Getatransport.png)",
          }}
        >
          <p> Project Title </p>
          <label> Project Description </label>
        </div>
        <div
          className={
            activeCards === "All" ||
            activeCards === "App" ||
            activeCards === "Web"
              ? "portfolioBlock active"
              : "portfolioBlock"
          }
          style={{
            backgroundImage:
              "url(https://ngfinders.com//wp-content/uploads/2019/09/Wema-Bank.jpg)",
          }}
        >
          <p> Project Title </p>
          <label> Project Description </label>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
