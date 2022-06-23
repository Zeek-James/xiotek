import React, { useState } from "react";

const Portfolio = () => {
  const [activeCards, setActiveCards] = useState("All");
  return (
    <div className="componentBlock" name="PortfolioSection">
      <h3> Check Out What We've Done </h3>
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
          style={{ backgroundImage: "url(./images/juice.jpg)" }}
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
          style={{ backgroundImage: "url(./images/juice.jpg)" }}
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
          style={{ backgroundImage: "url(./images/juice.jpg)" }}
        >
          <p> Project Title </p>
          <label> Project Description </label>
        </div>
        <div
          className={
            activeCards === "All" || activeCards === "Card"
              ? "portfolioBlock active"
              : "portfolioBlock"
          }
          style={{ backgroundImage: "url(./images/juice.jpg)" }}
        >
          <p> Project Title </p>
          <label> Project Description </label>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
