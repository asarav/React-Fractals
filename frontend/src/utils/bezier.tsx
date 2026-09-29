export default function bezier(canvas: any, ctx: any) {
    const size = canvas.clientWidth;
    const steps = 75; // Number of lines per corner
    const spacing = size / steps;

    ctx.strokeStyle = '#00ffcc'; // Vibrant neon cyan
    ctx.lineWidth = 1;

    // Draw lines from top-left outwards
    for (let i = 0; i <= steps; i++) {
        const x = i * spacing;
        const y = i * spacing;
            
        // Top-left corner illusion
        ctx.beginPath();
        ctx.moveTo(x, 0);       // Move along top edge
        ctx.lineTo(0, size - y); // Line down to left edge
        ctx.stroke();

        // Bottom-right corner illusion
        ctx.beginPath();
        ctx.moveTo(x, size);     // Move along bottom edge
        ctx.lineTo(size, size - y); // Line up to right edge
        ctx.stroke();
    }
}