import React from "react";

const App = () => {
  return (
    <div>
      App
      <br />
      <lottie-player
        src={"https://assets2.lottiefiles.com/packages/lf20_obkemuop.json"}
        speed={1}
        style={{ width: "300px", height: "300px", background: "transparent" }}
        loop
        autoplay
      ></lottie-player>
    </div>
  );
};

export default App;
