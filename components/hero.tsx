import React from "react";

export interface HeroProps {
  header: string;
  subHeader: string;
}

const Hero: React.FC<HeroProps> = ({
  header,
  subHeader
}) => {
  return (
    <div>
      <div className="text-xl font-bold">{header}</div>
      <div className="text-sm font-medium">{subHeader}</div>
    </div>
  );
}

export default Hero;