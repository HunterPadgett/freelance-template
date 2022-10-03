import "./TopBtn.css";
import React from "react";
import { useEffect, useState } from "react";
// import { Button } from "react-scroll";

function TopBtn() {
  const [up, setUp] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 430) {
        setUp(true);
      } else {
        setUp(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>{up && <i class="fa-solid fa-angles-up" id="upBtn" onClick={scrollUp}></i>}</div>
  );
}

export default TopBtn;
