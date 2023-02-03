import React from "react";

function Sidebar({ tags }) {
  const renderTags = () => {
    return tags.map((tag, index) => {
      return (
        <li className="list-group-item" key={index}>
          <button className="btn btn-info w-100">{tag}</button>
        </li>
      );
    });
  };

  return <ul className="list-group list-group-flush">{renderTags()}</ul>;
}

export default Sidebar;
