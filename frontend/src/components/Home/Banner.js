import React, { useState } from "react";
import agent from "../../agent";
import logo from "../../imgs/logo.png";

const MIN_SEARCH_CHAR_LEN = 3;

const Banner = ({ onItemsSearch }) => {
  const [showSearch, setShowSearch] = useState(false);

  let previousSearchTerm = "";

  function handleSearch(e) {
    let term = e.target.value;
    if (term.length < MIN_SEARCH_CHAR_LEN) {
      if (previousSearchTerm.length >= MIN_SEARCH_CHAR_LEN) {
        // edge case: we crossed below the length threshold, so let's show all items
        term = "";
      } else {
        return;
      }
    }

    onItemsSearch(
      term,
      (page) => agent.Items.byTitleSearch(term, page),
      agent.Items.byTitleSearch(term)
    );
    previousSearchTerm = term;
  }

  function handleShowSearch() {
    setShowSearch(true);
  }

  const displayCSS = showSearch ? "inline" : "none";

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} height={300} alt="banner" />
        <div>
          <span>A place to </span>

          <span id="get-part" onClick={handleShowSearch}>
            get{!showSearch && <span> </span>}
          </span>

          <span
            style={{
              position: "relative",
              margin: "10px",
              display: displayCSS,
            }}
          >
            <input
              id="search-box"
              type="search"
              placeholder="What is it that you truly desire?"
              onChange={handleSearch}
              style={{
                padding: "10px",
                position: "relative",
                width: "350px",
                height: "50px",
                borderRadius: "8px",
              }}
            />
            <i
              className="bi bi-search"
              style={{
                position: "absolute",
                right: "16px",
                top: "-6px",
                fontSize: "1.4rem",
                color: "#8272C1",
              }}
            ></i>
          </span>

          <span>the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
