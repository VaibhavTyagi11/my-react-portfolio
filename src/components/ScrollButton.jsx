import React, { useState, useEffect } from "react";
import { BiUpArrow } from "react-icons/bi";


function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {showButton && (
        <button
          onClick={handleClick}
          className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-full fixed bottom-20 right-10"
        >
          <BiUpArrow size={20} />
        </button>
      )}
    </div>
  );
}

export default ScrollToTop;
