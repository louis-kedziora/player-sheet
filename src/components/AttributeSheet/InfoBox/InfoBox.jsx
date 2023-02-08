import React from "react";

export const InfoBox = ({ info }) => {
  const { title, content } = info;

  return (
    <div className="attributeBox statBox">
      <h1>{title}</h1>
      <h2>{content}</h2>
    </div>
  );
};
