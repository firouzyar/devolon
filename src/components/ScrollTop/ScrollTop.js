import React, { useState } from "react";
import { HtmlScrollTop } from "./ScrollTop.style";
const ScrollTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 600) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 600) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <HtmlScrollTop onClick={scrollTop} display={showScroll.toString()}>
      Top
    </HtmlScrollTop>
  );
};

export default ScrollTop;
