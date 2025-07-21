"use client";
import React from 'react';
import StarRed from "@/app/stars/star-red";
import Button from "@/app/button/button";

type Props = {
  id: string;
  label: string;
  onClick: () => void;
};

const ButtonRed: React.FC<Props> = ({ label, onClick, id }) => {
  return (
    <Button
      id={id}
      label={label}
      onClick={onClick}
      backgroundGradient={{start: "#9C3B48", end: "#60143A"}}
      shimmerGradient="#FFA0A0"
      innerRectangleColor="#5D1239"
      strokeGradient={["#FFDA76", "#D69C5F", "#B87329"]}
      textColor={{start: "#FFE08B", end: "#FFB676"}}
      star={<StarRed />}
    />
  );
}

export default ButtonRed;