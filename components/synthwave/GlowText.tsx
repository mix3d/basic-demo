"use client";
import React from "react";
import styles from "./styles.module.css";

interface GlowTextProps {
  text: string;
  mainColor?: string;
  shadowColor?: string;
  className?: string;
  animate?: boolean;
}

export const GlowText: React.FC<GlowTextProps> = ({
  text,
  mainColor = "#ff00ff",
  shadowColor = "#00ffff",
  className = "",
  animate = true,
}) => {
  const textStyle = {
    color: mainColor,
    textShadow: `0 0 5px ${mainColor}, 
                0 0 10px ${mainColor}, 
                0 0 20px ${mainColor}, 
                0 0 40px ${shadowColor}, 
                0 0 80px ${shadowColor}`,
  };

  return (
    <h1
      className={`${animate ? styles.flickerAnimation : ""} ${className}`}
      style={textStyle}
    >
      {text}
    </h1>
  );
};
