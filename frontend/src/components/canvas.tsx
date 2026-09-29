import { useEffect, useRef } from "react";
import bezier from "../utils/bezier";

export function StaticCanvas() {
  // 1. Create a reference for the canvas element
  const canvasRef = useRef(null);

  useEffect(() => {
    // 2. Ensure the canvas element is safely mounted to the DOM
    const canvas = canvasRef.current;
    if (!canvas) return;

    // 3. Obtain the 2D rendering context
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 1. Define the size you want the canvas to look on the screen
    const logicalSize = 720; 
        
    // 2. Get the screen's pixel density (Retina/4K screens are usually 2 or 3)
    const dpr = window.devicePixelRatio || 1;
        
    // 3. Set display size via CSS style attributes
    canvas.style.width = logicalSize + 'px';
    canvas.style.height = logicalSize + 'px';
        
    // 4. Multiply internal canvas resolution by the screen pixel density
    canvas.width = logicalSize * dpr;
    canvas.height = logicalSize * dpr;
        
    // 5. Scale all future drawings up automatically so your coordinates stay simple
    ctx.scale(dpr, dpr);

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // 4. Perform your drawing modifications
    bezier(canvas, ctx);
    
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <canvas 
      ref={canvasRef} 
      width={400} 
      height={300} 
      style={{ border: "1px solid #ccc" }} 
    />
  );
}