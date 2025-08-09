import React, { useRef, useState } from "react";
import styles from "./zoomimg.module.css";

interface ZoomImgeProps {
  src: string;
  alt?: string;
}

const ZoomImge: React.FC<ZoomImgeProps> = ({ src, alt }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [display, setDisplay] = useState<"block" | "none">("none");

  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
    setDisplay("block");
  };

  const handleMouseLeave = () => {
    setDisplay("none");
  };

  const cssVars: React.CSSProperties = {
    "--url": `url(${src})`,
    "--zoom-x": `${zoomPos.x}%`,
    "--zoom-y": `${zoomPos.y}%`,
    "--display": display,
  } as React.CSSProperties;

  return (
    <div
      ref={containerRef}
      className={`${styles.imageZoom} shadow-sm shadow-slate-600`}
      style={cssVars}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img src={src} alt={alt} className={styles.img} />
    </div>
  );
};

export default ZoomImge;
