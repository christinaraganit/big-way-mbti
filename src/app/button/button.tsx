"use client";
import React from "react";

type Props = {
  id: string;
  label: string;
  onClick: () => void;
  backgroundGradient: {
    start: string;
    end: string;
  };
  strokeGradient: string[];
  shimmerGradient: string;
  innerRectangleColor: string;
  textColor: string | {start: string; end: string};
  star: React.ReactNode;
};

const Button: React.FC<Props> = ({ id, label, onClick, backgroundGradient, shimmerGradient, innerRectangleColor, star, strokeGradient, textColor }) => {
  return (
    <div onClick={onClick} id={id} className="relative p-[5px] w-[calc(100%-2*5px-1em)] max-w-[350px] min-h-[72px] flex flex-col cursor-pointer">
      <svg
        viewBox="0 0 350 72"
        className="absolute top-0 left-0 w-full h-full z-[2]"
        preserveAspectRatio="none"
      >
        <defs>
          <mask id={`${id}-m`} fill="#fff">
            <rect id={`${id}-b`} width="350" height="72" />
            <ellipse id={`${id}-c`} rx="20" ry="17.5" fill="#000" />
            <use xlinkHref={`#${id}-c`} x="350" />
            <use xlinkHref={`#${id}-c`} y="72" />
            <use xlinkHref={`#${id}-c`} x="350" y="72" />
          </mask>

          <linearGradient id={`${id}-button`}>
            <stop offset="10%" stopColor={backgroundGradient.start} />
            <stop offset="90%" stopColor={backgroundGradient.end} />
          </linearGradient>

          <linearGradient
            id={`${id}-strokeGradient`}
            x1="0"
            y1="0"
            x2="350"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            {strokeGradient.map((color, index) => {
              const offset = (index / (strokeGradient.length - 1)) * 100;
              return (
                <stop key={index} offset={`${offset}%`} stopColor={color} />
              );
            })}
          </linearGradient>

          <linearGradient
            id={`${id}-animatedShimmer`}
            x1="-40"
            y1="-9.5"
            x2="71.1343"
            y2="88.4364"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor={shimmerGradient} stopOpacity="0" />
            <stop offset="50%" stopColor={shimmerGradient} stopOpacity="0.4" />
            <stop offset="100%" stopColor={shimmerGradient} stopOpacity="0" />

            <animate
              attributeName="x1"
              values="-40;168;284"
              dur="1.5s"
              begin={`${id}.mouseenter`}
              end={`${id}.mouseleave`}
            />
            <animate
              attributeName="y1"
              values="-9.5;41;36"
              dur="1.5s"
              begin={`${id}.mouseenter`}
              end={`${id}.mouseleave`}
            />
            <animate
              attributeName="x2"
              values="71.1343;237.267;354.268"
              dur="1.5s"
              begin={`${id}.mouseenter`}
              end={`${id}.mouseleave`}
            />
            <animate
              attributeName="y2"
              values="88.4364;90.2892;123.525"
              dur="1.5s"
              begin={`${id}.mouseenter`}
              end={`${id}.mouseleave`}
            />
          </linearGradient>
        </defs>

        <g>
          <use
            xlinkHref={`#${id}-b`}
            mask={`url(#${id}-m)`}
            fill={`url(#${id}-button)`}
          />

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

        <line
          x1="20"
          y1="0"
          x2="330"
          y2="0"
          stroke={`url(#${id}-strokeGradient)`}
          strokeWidth="4"
        />
        <line
          x1="350"
          y1="17.5"
          x2="350"
          y2="54.5"
          stroke={`url(#${id}-strokeGradient)`}
          strokeWidth="4"
        />
        <line
          x1="330"
          y1="72"
          x2="20"
          y2="72"
          stroke={`url(#${id}-strokeGradient)`}
          strokeWidth="4"
        />
        <line
          x1="0"
          y1="54.5"
          x2="0"
          y2="17.5"
          stroke={`url(#${id}-strokeGradient)`}
          strokeWidth="4"
        />

        <ellipse id={`${id}-f`} rx="20" ry="17.5" strokeWidth="2" fill="none" />
        <use xlinkHref={`#${id}-f`} stroke={strokeGradient[0]} x="0" y="0" />
        <use xlinkHref={`#${id}-f`} stroke={strokeGradient[strokeGradient.length-1]} x="350" y="0" />
        <use xlinkHref={`#${id}-f`} stroke={strokeGradient[0]} x="0" y="72" />
        <use xlinkHref={`#${id}-f`} stroke={strokeGradient[strokeGradient.length-1]} x="350" y="72" />

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

      <div
        className={`relative z-1 flex items-center justify-center flex-1`}
        style={{backgroundColor: innerRectangleColor}}
      />
      <div
        style={{
          background: typeof textColor === 'string' ?
            textColor :
            `linear-gradient(to right, ${textColor.start} 0%, ${textColor.end}) 100%`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
        className={
        `bg-clip-text text-transparent absolute inset-0 z-[3] flex items-center justify-between px-[26px] py-[23px] gap-[8px] select-none`
        }
      >
        {star}
        <span className="text-center leading-tight text-balance">{label}</span>
        {star}
      </div>
    </div>
  );
};

export default Button;
