"use client";

import React from "react";
import styles from "./AnimatedBackground.module.css";

const AnimatedBackground: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.radialBg} />
    </div>
  );
};

export default AnimatedBackground;
