"use client";
import React from 'react';
import StarGold from "@/app/stars/star-gold";
import Button from "@/app/button/button";

type Props = {
  id: string;
  label: string;
  onClick: () => void;
};

const ButtonGold: React.FC<Props> = ({ label, onClick, id }) => {
  return (
    <Button
      id={id}
      label={label}
      onClick={onClick}
      backgroundGradient={{start: "#FFC57E", end: "#B9742B"}}
      shimmerGradient="#FFEBC2"
      innerRectangleColor="#5D1239"
      strokeGradient={["#913446"]}
      textColor={"#60143A"}
      star={<StarGold />}
    />
  );
}

export default ButtonGold;