import { useEffect, useRef } from "react";

export default function Background() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		let animationFrameId: number;
		let particles: Particle[] = [];
		let width = window.innerWidth;
		let height = window.innerHeight;

		const colors = [
			"rgba(34, 211, 238, ", // Cyan-400
			"rgba(6, 182, 212, ", // Cyan-500
			"rgba(8, 145, 178, ", // Cyan-600
			"rgba(255, 255, 255, ", // White
		];

		class Particle {
			x: number;
			y: number;
			size: number;
			speedX: number;
			speedY: number;
			colorPrefix: string;
			pulseSpeed: number;
			pulseDirection: number;
			alpha: number;
			maxAlpha: number;

			constructor() {
				this.x = Math.random() * width;
				this.y = Math.random() * height;
				this.size = Math.random() * 3 + 2.2; // particle radius 1px to 4px
				this.speedX = (Math.random() - 0.5) * 0.7; // slow moving drift
				this.speedY = (Math.random() - 0.5) * 0.5;
				this.colorPrefix = colors[Math.floor(Math.random() * colors.length)];
				this.maxAlpha = Math.random() * 0.5 + 0.15; // alpha up to 0.65
				this.alpha = Math.random() * this.maxAlpha;
				this.pulseSpeed = Math.random() * 0.004 + 0.005;
				this.pulseDirection = Math.random() > 0.5 ? 1 : -1;
			}

			update() {
				this.x += this.speedX;
				this.y += this.speedY;

				// Glow pulse animation
				this.alpha += this.pulseSpeed * this.pulseDirection;
				if (this.alpha >= this.maxAlpha) {
					this.pulseDirection = -1;
				} else if (this.alpha <= 0.05) {
					this.pulseDirection = 1;
				}

				// Bounce or wrap edges
				if (this.x < 0) this.x = width;
				else if (this.x > width) this.x = 0;

				if (this.y < 0) this.y = height;
				else if (this.y > height) this.y = 0;
			}

			draw(context: CanvasRenderingContext2D) {
				context.save();
				context.beginPath();
				context.arc(this.x, this.y, this.size, 0, Math.PI * 2);

				// Glowing effect using shadow properties
				const currentAlpha = Math.max(0.01, this.alpha);
				context.fillStyle = `${this.colorPrefix}${currentAlpha})`;
				context.shadowBlur = this.size * 4;
				context.shadowColor = `${this.colorPrefix}${currentAlpha * 0.8})`;

				context.fill();
				context.restore();
			}
		}

		const resize = () => {
			if (!canvas || !ctx) return;
			const pixelRatio = window.devicePixelRatio || 1;
			width = window.innerWidth;
			height = window.innerHeight;

			canvas.width = width * pixelRatio;
			canvas.height = height * pixelRatio;
			canvas.style.width = `${width}px`;
			canvas.style.height = `${height}px`;

			ctx.scale(pixelRatio, pixelRatio);

			// Reinitialize particles to fit new screen dimensions
			particles = [];
			const density = 20000; // one particle per 20000 sq pixels
			const particleCount = Math.min(
				Math.floor((width * height) / density),
				120,
			);
			for (let i = 0; i < particleCount; i++) {
				particles.push(new Particle());
			}
		};

		const animate = () => {
			if (!canvas || !ctx) return;
			ctx.clearRect(0, 0, width, height);

			for (let i = 0; i < particles.length; i++) {
				particles[i].update();
				particles[i].draw(ctx);
			}

			animationFrameId = requestAnimationFrame(animate);
		};

		resize();
		animate();

		window.addEventListener("resize", resize);

		return () => {
			cancelAnimationFrame(animationFrameId);
			window.removeEventListener("resize", resize);
		};
	}, []);

	return (
		<div className="fixed inset-0 -z-10 bg-black overflow-hidden">
			{/* Grid Lines */}
			<div
				className="
            absolute inset-0
            bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px)]
            bg-[size:40px_40px]
            pointer-events-none
        "
			/>
			{/* Glowing Particles Canvas */}
			<canvas
				ref={canvasRef}
				className="absolute inset-0 pointer-events-none"
			/>
		</div>
	);
}
