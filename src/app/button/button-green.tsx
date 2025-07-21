"use client";
import React from "react";
import StarGreen from "@/app/stars/star-green";
import Button from "@/app/button/button";

type Props = {
  id: string;
  label: string;
  onClick: () => void;
};

const ButtonGreen: React.FC<Props> = ({ id, label, onClick }) => {
  return (
    <Button
      id={id}
      label={label}
      onClick={onClick}
      backgroundGradient={{start: "#569061", end: "#155F4E"}}
      shimmerGradient="#A0FFC1"
      innerRectangleColor="#145E4D"
      strokeGradient={["#FFDA76", "#D69C5F", "#B87329"]}
      textColor={{start: "#FFE08B", end: "#FFB676"}}
      star={<StarGreen />}
    />
  );
};

export default ButtonGreen;
