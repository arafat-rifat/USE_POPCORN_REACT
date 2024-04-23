import React, { useState } from "react";
import WatchedSummery from "./WatchedSummery";
import WatchedList from "./WatchedList";

const WatchedBox = ({ watched }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && (
        <>
        </>
      )}
    </div>
  );
};

export default WatchedBox;
