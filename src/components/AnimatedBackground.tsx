"use client";

import React, { useEffect, useRef } from "react";
import styles from "./AnimatedBackground.module.css";

const AnimatedBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Set the playback speed to slow (e.g. 0.4x speed)
      videoRef.current.playbackRate = 0.45;
    }
  }, []);

  return (
    <div className={styles.container}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className={styles.video}
      >
        <source src="/videos/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.overlay} />
    </div>
  );
};

export default AnimatedBackground;
