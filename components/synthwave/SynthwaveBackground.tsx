"use client";
import React from "react";
import styles from "./styles.module.css";

interface SynthwaveBackgroundProps {
  gridColor?: string;
  sunColor?: string;
}

export const SynthwaveBackground: React.FC<SynthwaveBackgroundProps> = ({
  gridColor = "rgba(255, 0, 255, 0.5)",
  sunColor = "linear-gradient(to top, #ff8a00, #ff0080)",
}) => {
  return (
    <div className={styles.synthwaveContainer}>
      <div
        className={styles.sun}
        style={{
          background: sunColor,
        }}
      />
      <div
        className={styles.grid}
        style={{
          backgroundImage: `linear-gradient(${gridColor} 1px, transparent 1px), 
                            linear-gradient(90deg, ${gridColor} 1px, transparent 1px)`,
        }}
      />
      <div className={styles.mountains}>
        <div
          className={styles.mountain}
          style={{ left: "10%", height: "180px" }}
        />
        <div
          className={styles.mountain}
          style={{ left: "30%", height: "240px" }}
        />
        <div
          className={styles.mountain}
          style={{ left: "50%", height: "280px" }}
        />
        <div
          className={styles.mountain}
          style={{ left: "70%", height: "220px" }}
        />
        <div
          className={styles.mountain}
          style={{ left: "90%", height: "160px" }}
        />
      </div>
      <div className={styles.stars} />
    </div>
  );
};
