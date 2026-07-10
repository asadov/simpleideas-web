"use client";

import { useEffect, useRef } from "react";
import styles from "./OrbitMark.module.css";

export function OrbitMark() {
  const frontRef = useRef<SVGSVGElement>(null);
  const shipRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    frontRef.current?.querySelectorAll("animateMotion, animate").forEach((a) => a.remove());
    shipRef.current?.setAttribute("transform", "translate(160 74)");
  }, []);

  return (
    <span className={styles.oo}>
      O
      <svg className={styles.back} viewBox="0 0 200 86" aria-hidden="true">
        <path
          d="M 3 43 A 97 40 0 0 1 197 43"
          fill="none"
          stroke="rgba(100,231,240,.26)"
          strokeWidth={1.4}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <svg ref={frontRef} viewBox="0 0 200 86" aria-hidden="true">
        <path
          d="M 197 43 A 97 40 0 0 1 3 43"
          fill="none"
          stroke="rgba(100,231,240,.2)"
          strokeWidth={5}
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 197 43 A 97 40 0 0 1 3 43"
          fill="none"
          stroke="rgba(100,231,240,.85)"
          strokeWidth={1.7}
          vectorEffect="non-scaling-stroke"
        />
        <g ref={shipRef}>
          <animateMotion
            dur="10s"
            repeatCount="indefinite"
            path="M 3 43 A 97 40 0 1 1 197 43 A 97 40 0 1 1 3 43"
          />
          <animate
            attributeName="opacity"
            values="0.3;0.3;1;1;0.3"
            keyTimes="0;0.47;0.53;0.97;1"
            dur="10s"
            repeatCount="indefinite"
          />
          <circle r={8} fill="rgba(255,180,84,.25)" />
          <circle r={3.4} fill="#ffb454" />
        </g>
      </svg>
    </span>
  );
}
