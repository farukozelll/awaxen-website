import React from 'react';

const AnimatedWLiquidWave = ({
  width = 300,
  height = 300,
  baseColor = "#0A0F1E",
  leafColor = "#4ADE80",
  circuitColor = "#60A5FA"
}) => {
  // W harfi için yaprak benzeri path
  const wPath = `
    M 40 40
    C 80 40, 120 60, 150 160
    C 180 60, 220 40, 260 40
    L 260 40
    C 260 120, 200 220, 150 260
    C 100 220, 40 120, 40 40
    Z
  `;

  // İç dekoratif çizgiler için path
  const decorativePath = `
    M 120 100
    Q 150 120, 180 100
    M 100 140
    Q 150 160, 200 140
    M 90 180
    Q 150 200, 210 180
  `;

  // Nokta pozisyonları
  const dots = [
    {x: 120, y: 100}, {x: 180, y: 100},
    {x: 100, y: 140}, {x: 200, y: 140},
    {x: 90, y: 180}, {x: 210, y: 180},
    {x: 150, y: 120}, {x: 150, y: 160},
    {x: 150, y: 200}
  ];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transform-gpu"
    >
      <defs>
        <clipPath id="wLeafShape">
          <path d={wPath} />
        </clipPath>

        <linearGradient id="leafGradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={leafColor} stopOpacity="1" />
          <stop offset="100%" stopColor={leafColor} stopOpacity="0.9" />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Ana W yaprak şekli */}
      <path
        d={wPath}
        fill={baseColor}
        stroke={leafColor}
        strokeWidth="2"
      />

      {/* Sıvı dolum animasyonu container */}
      <g clipPath="url(#wLeafShape)">
        <g>
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="translate"
            dur="2.5s"
            values="0,300;0,0"
            calcMode="spline"
            keySplines="0.25,0.1,0.25,1"
            fill="freeze"
          />

          {/* Ana dolum */}
          <rect
            x="0"
            y="0"
            width="300"
            height="300"
            fill="url(#leafGradient)"
            opacity="0.95"
          />

          {/* Dekoratif çizgiler */}
          <path
            d={decorativePath}
            stroke={circuitColor}
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
            opacity="0"
          >
            <animate
              attributeName="opacity"
              values="0;0.7;0.7"
              dur="3s"
              begin="1s"
              fill="freeze"
            />
          </path>

          {/* Noktalar */}
          {dots.map((dot, i) => (
            <circle
              key={i}
              cx={dot.x}
              cy={dot.y}
              r="3"
              fill={circuitColor}
              filter="url(#glow)"
              opacity="0"
            >
              <animate
                attributeName="opacity"
                values="0;0.8;0.8"
                dur="0.5s"
                begin={`${1 + i * 0.2}s`}
                fill="freeze"
              />
              <animate
                attributeName="r"
                values="2;3;2"
                dur="2s"
                begin={`${1 + i * 0.2}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </g>
      </g>
    </svg>
  );
};

export default AnimatedWLiquidWave;