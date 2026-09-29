export default function SimpleSquare(ctx: any) {
    ctx.fillStyle = "royalblue";
    ctx.fillRect(50, 50, 150, 100); // x, y, width, height

    ctx.strokeStyle = "darkblue";
    ctx.lineWidth = 5;
    ctx.strokeRect(50, 50, 150, 100);
}