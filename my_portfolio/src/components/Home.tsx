import { motion, useScroll } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Download } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
//import mySecondImage from "../assets/mysecondImage.jpeg";
import photowithoutbackground from "../assets/photowithoutbackground.png";
export default function Home() {
	const { scrollYProgress } = useScroll();

	return (
		<>
			{/* Scroll Progress */}
			<motion.div
				className="fixed left-0 top-0 z-[100] h-1 origin-left bg-cyan-400 "
				style={{
					scaleX: scrollYProgress,
					width: "100%",
				}}
			/>

			<section
				id="home"
				className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 lg:px-16"
			>
				<div className="mx-auto grid w-full max-w-[1600px] items-center gap-20 lg:grid-cols-2">
					{/* ================= LEFT ================= */}

					<motion.div
						initial={{ opacity: 0, x: -60 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center lg:text-left"
					>
						<p className="mb-4 text-lg text-cyan-200">Hello, I'm</p>

						<h1 className="text-6xl font-extrabold leading-tight md:text-7xl xl:text-8xl">
							<span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 bg-clip-text text-transparent">
								Ayush Sharma
							</span>
						</h1>

						<div className="mt-8 h-16 text-3xl font-bold text-cyan-50 md:text-5xl">
							<TypeAnimation
								sequence={[
									"Full Stack Developer",
									2000,
									"MERN Stack",
									2000,
									"Next.js",
									2000,
								]}
								speed={50}
								repeat={Infinity}
							/>
						</div>

						<p className="mt-8 text-2xl font-bold text-cyan-200">
							B.Tech CSE Student • USICT, GGSIPU '28
						</p>

						<p className="mt-8 max-w-2xl text-lg leading-9 text-cyan-100/70">
							I build fast, scalable, and modern web applications using the MERN
							Stack while exploring Artificial Intelligence to create smarter
							digital experiences. I enjoy transforming ideas into elegant,
							user-focused products with clean architecture and beautiful UI.
						</p>
						{/* Social Links */}

						<div className="mt-12 flex justify-center gap-5 lg:justify-start">
							<motion.a
								whileHover={{
									scale: 1.15,
									y: -6,
								}}
								href="https://github.com/ayushsharma-cs"
								target="_blank"
								rel="noopener noreferrer"
								className="rounded-xl border border-white/10 bg-white/5 p-4 text-gray-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]"
							>
								<FaGithub size={24} />
							</motion.a>

							<motion.a
								whileHover={{
									scale: 1.15,
									y: -6,
								}}
								href="https://linkedin.com/in/ayushsharma-cs"
								target="_blank"
								rel="noopener noreferrer"
								className="rounded-xl border border-white/10 bg-white/5 p-4 text-gray-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]"
							>
								<FaLinkedin size={24} />
							</motion.a>

							<motion.a
								whileHover={{
									scale: 1.15,
									y: -6,
								}}
								href="https://leetcode.com/u/ayushsharma-cs"
								target="_blank"
								rel="noopener noreferrer"
								className="rounded-xl border border-white/10 bg-white/5 p-4 text-gray-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]"
							>
								<SiLeetcode size={24} />
							</motion.a>

							<motion.a
								whileHover={{
									scale: 1.15,
									y: -6,
								}}
								whileTap={{
									scale: 0.97,
								}}
								href="/resume.pdf"
								target="_blank"
								className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
							>
								<Download size={20} />
								Resume
							</motion.a>
						</div>
					</motion.div>

					{/* ================= RIGHT ================= */}

					<motion.div
						initial={{
							opacity: 0,
							x: 80,
						}}
						animate={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							duration: 0.9,
						}}
						className="relative flex items-center justify-center min-h-[580px]"
					>
						{/* Main Ambient Background Glow */}
						<motion.div
							animate={{
								scale: [1, 1.1, 1],
								opacity: [0.35, 0.6, 0.35],
							}}
							transition={{
								duration: 6,
								repeat: Infinity,
								ease: "easeInOut",
							}}
							className="absolute h-[540px] w-[540px] rounded-full bg-cyan-400/20 blur-[140px]"
						/>

						{/* Hair Rim Light & Head Backlight Glow */}
						<motion.div
							animate={{
								scale: [1, 1.08, 1],
								opacity: [0.45, 0.75, 0.45],
							}}
							transition={{
								duration: 4,
								repeat: Infinity,
								ease: "easeInOut",
							}}
							className="absolute top-4 h-[320px] w-[320px] rounded-full bg-gradient-to-tr from-cyan-400/50 via-sky-300/40 to-teal-300/40 blur-[55px]"
						/>

						{/* Secondary Glow */}
						<motion.div
							animate={{
								scale: [1.1, 1, 1.1],
								opacity: [0.2, 0.4, 0.2],
							}}
							transition={{
								duration: 8,
								repeat: Infinity,
								ease: "easeInOut",
							}}
							className="absolute h-[400px] w-[400px] rounded-full bg-cyan-300/25 blur-[100px]"
						/>

						{/* Tech Halo Frame Shield */}
						<div className="absolute top-12 h-[440px] w-[440px] rounded-full border border-cyan-400/30 bg-gradient-to-b from-cyan-500/10 via-cyan-500/5 to-transparent shadow-[0_0_60px_rgba(34,211,238,0.2)] backdrop-blur-[2px]" />

						{/* Rotating Tech Orbit Ring */}
						<motion.div
							animate={{
								rotate: 360,
							}}
							transition={{
								duration: 30,
								repeat: Infinity,
								ease: "linear",
							}}
							className="absolute h-[480px] w-[480px] rounded-full border border-dashed border-cyan-400/25"
						/>

						{/* Floating Image with Hair Lighting, Filters & Seamless Bottom Mask */}
						<motion.img
							src={photowithoutbackground}
							alt="Ayush Sharma"
							animate={{
								y: [-10, 10, -10],
							}}
							transition={{
								duration: 5,
								repeat: Infinity,
								ease: "easeInOut",
							}}
							style={{
								WebkitMaskImage:
									"linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 98%)",
								maskImage:
									"linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 98%)",
								filter:
									"brightness(0.8) contrast(1.15) saturate(1.06) drop-shadow(0 0 35px rgba(34,211,238,0.45)) drop-shadow(0 -12px 25px rgba(56,189,248,0.45))",
							}}
							className="relative z-10 w-[360px] md:w-[470px] xl:w-[540px]"
						/>
					</motion.div>
				</div>
			</section>
		</>
	);
}
