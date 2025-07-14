"use client";
import React from 'react';
import styles from './button.green.module.css';
import StarGreen from "@/app/star-green";

type Props = {
  id: string;
  label: string;
  onClick: () => void;
};

const ButtonGreen: React.FC<Props> = ({ id, label, onClick }) => {
  return (
    <div onClick={onClick} id={id} className={styles.box}>
      <svg viewBox="0 0 350 72" className={styles.corners} preserveAspectRatio="none">
        <defs>
          <mask id={`${id}-m`} fill="#fff">
            <rect id={`${id}-b`} width="350" height="72" />
            <ellipse id={`${id}-c`} rx="20" ry="17.5" fill="#000" />
            <use xlinkHref={`#${id}-c`} x="350" />
            <use xlinkHref={`#${id}-c`} y="72" />
            <use xlinkHref={`#${id}-c`} x="350" y="72" />
          </mask>

          <linearGradient id={`${id}-button_green`}>
            <stop offset="10%" stopColor="#569061" />
            <stop offset="90%" stopColor="#155F4E" />
          </linearGradient>

          <linearGradient
            id={`${id}-strokeGradient`}
            x1="0"
            y1="0"
            x2="350"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
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
            <stop offset="0%" stopColor="#A0FFC1" stopOpacity="0" />
            <stop offset="50%" stopColor="#A0FFC1" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#A0FFC1" stopOpacity="0" />

            <animate attributeName="x1" values="-40;168;284" dur="1.5s" begin={`${id}.mouseenter`} end={`${id}.mouseleave`} />
            <animate attributeName="y1" values="-9.5;41;36" dur="1.5s" begin={`${id}.mouseenter`} end={`${id}.mouseleave`} />
            <animate attributeName="x2" values="71.1343;237.267;354.268" dur="1.5s" begin={`${id}.mouseenter`} end={`${id}.mouseleave`} />
            <animate attributeName="y2" values="88.4364;90.2892;123.525" dur="1.5s" begin={`${id}.mouseenter`} end={`${id}.mouseleave`} />
          </linearGradient>
        </defs>

        <g>
          <use xlinkHref={`#${id}-b`} mask={`url(#${id}-m)`} fill={`url(#${id}-button_green)`} />

          <rect
            x="0"
            y="0"
            width="350"
            height="72"
            fill={`url(#${id}-animatedShimmer)`}
            mask={`url(#${id}-m)`}
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

        <line x1="20" y1="0" x2="330" y2="0" stroke={`url(#${id}-strokeGradient)`} strokeWidth="4" />
        <line x1="350" y1="17.5" x2="350" y2="54.5" stroke={`url(#${id}-strokeGradient)`} strokeWidth="4" />
        <line x1="330" y1="72" x2="20" y2="72" stroke={`url(#${id}-strokeGradient)`} strokeWidth="4" />
        <line x1="0" y1="54.5" x2="0" y2="17.5" stroke={`url(#${id}-strokeGradient)`} strokeWidth="4" />

        <ellipse id={`${id}-f`} rx="20" ry="17.5" strokeWidth="2" fill="none" />
        <use xlinkHref={`#${id}-f`} stroke="#FFDA76" x="0" y="0" />
        <use xlinkHref={`#${id}-f`} stroke="#B87329" x="350" y="0" />
        <use xlinkHref={`#${id}-f`} stroke="#FFDA76" x="0" y="72" />
        <use xlinkHref={`#${id}-f`} stroke="#B87329" x="350" y="72" />

        <rect
          x="6"
          y="6"
          width="338"
          height="60"
          fill="none"
          stroke={`url(#${id}-strokeGradient)`}
          strokeWidth="2"
        />
      </svg>

      <div className="relative z-1 flex items-center justify-center flex-1 bg-[#145E4D]" />
      <div className={styles.gradientText}>
        <StarGreen />
        <span>{label}</span>
        <StarGreen />
      </div>
    </div>
  );
};

export default ButtonGreen;
