import React, { useRef } from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  const wrapperRef = useRef(null); // changed ref to wrapper

  const slide = (direction) => {
    if (!wrapperRef.current) return;

    const container = wrapperRef.current;
    const scrollAmount = container.clientWidth * 0.8; // scroll 80% of visible width

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint totam
        deserunt explicabo pariatur placeat saepe illum aspernatur nesciunt
        laboriosam quisquam vel, harum at repellat. Suscipit adipisci similique
        quibusdam! Et, harum!
      </p>

      <div className="slider-container">
        <button className="slider-btn left" onClick={() => slide("left")}>
          &#10094;
        </button>

        <div className="explore-menu-list-wrapper" ref={wrapperRef}>
          <div className="explore-menu-list">
            {menu_list.map((item, index) => (
              <div
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.menu_name ? "All" : item.menu_name
                  )
                }
                key={index}
                className="explore-menu-list-item"
              >
                <img
                  className={category === item.menu_name ? "active" : ""}
                  src={item.menu_image}
                  alt=""
                />
                <p>{item.menu_name}</p>
              </div>
            ))}
          </div>
        </div>

        <button className="slider-btn right" onClick={() => slide("right")}>
          &#10095;
        </button>
      </div>

      <hr />
    </div>
  );
};

export default ExploreMenu;