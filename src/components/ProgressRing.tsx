'use client';

import React, { useEffect, useState } from 'react';

interface ProgressRingProps {
    percent: number;
    label: string;
}

const ProgressRing: React.FC<ProgressRingProps> = ({ percent, label }) => {
    const [offset, setOffset] = useState(282.7);
    const radius = 45;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        const progressOffset = circumference - (percent / 100) * circumference;
        setOffset(progressOffset);
    }, [percent, circumference]);

    return (
        <div className="circular-progress">
            <svg viewBox="0 0 100 100">
                <circle className="bg" cx="50" cy="50" r={radius}></circle>
                <circle
                    className="progress"
                    cx="50"
                    cy="50"
                    r={radius}
                    style={{ strokeDasharray: circumference, strokeDashoffset: offset }}
                ></circle>
            </svg>
            <div className="progress-text">
                <span className="percent">{percent}%</span>
                <span className="label">{label}</span>
            </div>

            <style jsx>{`
        .circular-progress {
          position: relative;
          width: 150px;
          height: 150px;
          margin: 0 auto 20px;
        }
        .circular-progress svg {
          transform: rotate(-90deg);
        }
        .circular-progress circle {
          fill: none;
          stroke-width: 8;
          stroke-linecap: round;
        }
        .circular-progress circle.bg {
          stroke: rgba(255, 255, 255, 0.05);
        }
        .circular-progress circle.progress {
          stroke: var(--neon-yellow);
          filter: drop-shadow(0 0 5px var(--neon-yellow));
          transition: stroke-dashoffset 1s ease-out;
        }
        .progress-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }
        .progress-text .percent {
          display: block;
          font-size: 2rem;
          font-weight: 700;
        }
        .progress-text .label {
          font-size: 0.6rem;
          color: var(--text-dim);
          font-weight: 700;
        }
      `}</style>
        </div>
    );
};

export default ProgressRing;
