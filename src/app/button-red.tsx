"use client";
import React from 'react';
import styles from './button.red.module.css';
import StarRed from "@/app/star-red";

type Props = {
  label: string;
  onClick: () => void;
};

const ButtonRed: React.FC<Props> = ({ label, onClick }) => {
  return (
    <div onClick={onClick} className={styles.box}>
      <svg viewBox="0 0 350 72" className={styles.corners} preserveAspectRatio="none">
        <defs>
          <mask id="red_m" fill="#fff">
            <rect id="red_b" width="350" height="72" />
            <ellipse id="red_c" rx="20" ry="17.5" fill="#000" />
            <use xlinkHref="#red_c" x="350" />
            <use xlinkHref="#red_c" y="72" />
            <use xlinkHref="#red_c" x="350" y="72" />
          </mask>

          <linearGradient id="button_red">
            <stop offset="10%" stopColor="#9C3B48" />
            <stop offset="90%" stopColor="#60143A" />
          </linearGradient>

          <linearGradient id="strokeGradient" x1="0" y1="0" x2="350" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFDA76" />
            <stop offset="50%" stopColor="#D69C5F" />
            <stop offset="100%" stopColor="#B87329" />
          </linearGradient>

        </defs>

        <use xlinkHref="#red_b" mask="url(#red_m)" className={styles.filled} />

        <line x1="20" y1="0" x2="330" y2="0" stroke="url(#strokeGradient)" strokeWidth="4" />
        <line x1="350" y1="17.5" x2="350" y2="54.5" stroke="url(#strokeGradient)" strokeWidth="4" />
        <line x1="330" y1="72" x2="20" y2="72" stroke="url(#strokeGradient)" strokeWidth="4" />
        <line x1="0" y1="54.5" x2="0" y2="17.5" stroke="url(#strokeGradient)" strokeWidth="4" />

        <ellipse id="red_f" rx="20" ry="17.5" strokeWidth="2" fill="none" />

        <use xlinkHref="#red_f" stroke="#FFDA76" x="0" y="0" />

        <use xlinkHref="#red_f" stroke="#B87329" x="350" y="0" />

        <use xlinkHref="#red_f" stroke="#FFDA76" x="0" y="72" />

        <use xlinkHref="#red_f" stroke="#B87329" x="350" y="72" />

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


      <div className="relative z-1 flex items-center justify-center flex-1  bg-[#5D1239]" />
      <div className={styles.gradientText}>
        <StarRed />
        <span>{label}</span>
        <StarRed />
      </div>
    </div>
  );
}

export default ButtonRed;