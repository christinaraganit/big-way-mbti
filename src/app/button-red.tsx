"use client";
import React from 'react';
import styles from './button.red.module.css';
import StarRed from "@/app/star-red";

type Props = {
  id: string;
  label: string;
  onClick: () => void;
};

const ButtonRed: React.FC<Props> = ({ label, onClick, id }) => {
  return (
    <div onClick={onClick} className={styles.box} id={id}>
      <svg viewBox="0 0 350 72" className={styles.corners} preserveAspectRatio="none">
        <defs>
          <mask id={`${id}_m`} fill="#fff">
            <rect id={`${id}_b`} width="350" height="72" />
            <ellipse id={`${id}_c`} rx="20" ry="17.5" fill="#000" />
            <use xlinkHref={`#${id}_c`} x="350" />
            <use xlinkHref={`#${id}_c`} y="72" />
            <use xlinkHref={`#${id}_c`} x="350" y="72" />
          </mask>

          <linearGradient id={`${id}_gradient`}>
            <stop offset="10%" stopColor="#9C3B48" />
            <stop offset="90%" stopColor="#60143A" />
          </linearGradient>

          <linearGradient id="strokeGradient" x1="0" y1="0" x2="350" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFDA76" />
            <stop offset="50%" stopColor="#D69C5F" />
            <stop offset="100%" stopColor="#B87329" />
          </linearGradient>

          <linearGradient
            id={`${id}-animatedShimmer`}
            x1="-40"
            y1="-9.5"
            x2="71.1343"
            y2="88.4364"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FFA0A0" stopOpacity="0" />
            <stop offset="50%" stopColor="#FFA0A0" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FFA0A0" stopOpacity="0" />

            <animate attributeName="x1" values="-40;168;284" dur="1.5s" begin={`${id}.mouseenter`} end={`${id}.mouseleave`} />
            <animate attributeName="y1" values="-9.5;41;36" dur="1.5s" begin={`${id}.mouseenter`} end={`${id}.mouseleave`} />
            <animate attributeName="x2" values="71.1343;237.267;354.268" dur="1.5s" begin={`${id}.mouseenter`} end={`${id}.mouseleave`} />
            <animate attributeName="y2" values="88.4364;90.2892;123.525" dur="1.5s" begin={`${id}.mouseenter`} end={`${id}.mouseleave`} />
          </linearGradient>
        </defs>

        <g>
          <use xlinkHref={`#${id}_b`} mask={`url(#${id}_m)`} fill={`url(#${id}_gradient)`} />

          <rect
            x="0"
            y="0"
            width="350"
            height="72"
            fill={`url(#${id}-animatedShimmer)`}
            mask={`url(#${id}_m)`}
            fillOpacity="0"
          >
            <animate
              attributeName="fill-opacity"
              values="0;1;0"
              keyTimes="0;0.3;1"
              dur="1.5s"
              begin={`${id}.mouseenter`}
              end={`${id}.mouseleave`}
              fill="remove"
            />
          </rect>
        </g>

        <line x1="20" y1="0" x2="330" y2="0" stroke="url(#strokeGradient)" strokeWidth="4" />
        <line x1="350" y1="17.5" x2="350" y2="54.5" stroke="url(#strokeGradient)" strokeWidth="4" />
        <line x1="330" y1="72" x2="20" y2="72" stroke="url(#strokeGradient)" strokeWidth="4" />
        <line x1="0" y1="54.5" x2="0" y2="17.5" stroke="url(#strokeGradient)" strokeWidth="4" />

        <ellipse id={`${id}_f`} rx="20" ry="17.5" strokeWidth="2" fill="none" />
        <use xlinkHref={`#${id}_f`} stroke="#FFDA76" x="0" y="0" />
        <use xlinkHref={`#${id}_f`} stroke="#B87329" x="350" y="0" />
        <use xlinkHref={`#${id}_f`} stroke="#FFDA76" x="0" y="72" />
        <use xlinkHref={`#${id}_f`} stroke="#B87329" x="350" y="72" />

        <rect
          x="6"
          y="6"
          width="338"
          height="60"
          fill="none"
          stroke="url(#strokeGradient)"
          strokeWidth="2"
        />
      </svg>

      <div className="relative z-1 flex items-center justify-center flex-1 bg-[#5D1239]" />
      <div className={styles.gradientText}>
        <StarRed />
        <span>{label}</span>
        <StarRed />
      </div>
    </div>
  );
}

export default ButtonRed;