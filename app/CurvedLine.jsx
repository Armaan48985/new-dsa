// components/CurvedDashedLine.js

import { useEffect, useRef } from "react";

const CurvedDashedLine = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Function to draw a curved dashed line
    function drawCurvedDashedLine(
      start,
      end,
      control1,
      control2,
      dashLength,
      gapLength
    ) {
      ctx.beginPath();
      ctx.moveTo(start[0], start[1]);

      // Calculate points along the curve
      for (let t = 0; t <= 1; t += 0.01) {
        const x =
          Math.pow(1 - t, 3) * start[0] +
          3 * Math.pow(1 - t, 2) * t * control1[0] +
          3 * (1 - t) * Math.pow(t, 2) * control2[0] +
          Math.pow(t, 3) * end[0];
        const y =
          Math.pow(1 - t, 3) * start[1] +
          3 * Math.pow(1 - t, 2) * t * control1[1] +
          3 * (1 - t) * Math.pow(t, 2) * control2[1] +
          Math.pow(t, 3) * end[1];

        if (t % (dashLength + gapLength) < dashLength) {
          ctx.lineTo(x, y);
        }
      }

      ctx.stroke();
    }

    // Example usage
    const startPoint = [200, 100];
    const endPoint = [400, 400];
    const controlPoint1 = [200, 50];
    const controlPoint2 = [300, 300];
    const dashLength = 10;
    const gapLength = 5;

    drawCurvedDashedLine(
      startPoint,
      endPoint,
      controlPoint1,
      controlPoint2,
      dashLength,
      gapLength
    );
  }, []); // Ensure this runs only once after component mount

  return <canvas ref={canvasRef} width={800} height={600}></canvas>;
};

export default CurvedDashedLine;
