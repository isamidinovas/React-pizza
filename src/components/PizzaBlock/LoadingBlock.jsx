import React from "react";
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="136" cy="144" r="115" />
      <rect x="3" y="270" rx="6" ry="6" width="280" height="26" />
      <rect x="4" y="309" rx="6" ry="6" width="290" height="84" />
      <rect x="7" y="408" rx="6" ry="6" width="91" height="31" />
      <rect x="137" y="402" rx="20" ry="20" width="141" height="43" />
    </ContentLoader>
  );
}

export default LoadingBlock;
