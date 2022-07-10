import React from "react";

const Portfolio = () => {
  return (
    <div className="componentBlock" name="PortfolioSection">
      <h3> Who We've Worked With </h3>
      <marquee
        direction="alternate"
        onMouseOver="this.stop()"
        onMouseOut="this.start()"
      >
        <div className="portfolioBlocks">
          <div className="portfolioBlock">
            <img
              src="https://ngfinders.com//wp-content/uploads/2019/09/Wema-Bank.jpg"
              alt="Gogata"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                objectFit: "contain",
                minWidth: 200,
                maxWidth: 400,
                padding: 10,
              }}
            />
          </div>
          {/* <div className="portfolioBlock">
            <img
              src="https://www.nuture.tech/_nuxt/img/1ac7915.png"
              alt="nuture tech"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                objectFit: "contain",
                minWidth: 200,
                maxWidth: 400,
                padding: 10,
              }}
            />
          </div> */}
          <div className="portfolioBlock">
            <img
              src="https://media.glassdoor.com/sqll/5154/itex-squarelogo-1524658343988.png"
              alt="itex"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                objectFit: "contain",
                minWidth: 200,
                maxWidth: 400,
                padding: 10,
              }}
            />
          </div>
          <div className="portfolioBlock">
            <img
              src="https://www.utopiatechnology.co.uk/wp-content/themes/utopia/images/utopia_logo_new_style.png"
              alt="utopia"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                objectFit: "contain",
                minWidth: 200,
                maxWidth: 400,
                padding: 10,
              }}
            />
          </div>
          <div className="portfolioBlock">
            <img
              src="https://i0.wp.com/naijaknowhow.net/wp-content/uploads/2021/02/Ibaka-Tv.png?resize=275%2C183&ssl=1"
              alt="ibaka tv"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                objectFit: "contain",
                minWidth: 200,
                maxWidth: 400,
                padding: 10,
              }}
            />
          </div>

          <div className="portfolioBlock">
            <img
              src="https://gatatransport.com.ng/wp-content/uploads/2021/07/Getatransport.png"
              alt="Gogata"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                objectFit: "contain",
                minWidth: 200,
                maxWidth: 400,
                padding: 10,
              }}
            />
          </div>
        </div>
      </marquee>
    </div>
  );
};

export default Portfolio;
