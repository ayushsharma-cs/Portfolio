import { motion } from "framer-motion";
import myImage from "../assets/myImage.jpeg";

export default function About() {
	return (
		<section id="about" className="w-full px-6 py-24 lg:px-12 xl:px-20">
			<div className="mx-auto max-w-[1600px]">
				{/* ================= Header ================= */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="mb-12"
				>
					<p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
						About Me
					</p>

					<h2 className="text-4xl font-bold text-white lg:text-5xl">
						Building Modern Web Experiences
					</h2>
				</motion.div>

				<div className="grid items-start gap-20 lg:grid-cols-[0.9fr_1.35fr]">
					{/* ================= Left ================= */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7 }}
						className="flex flex-col"
					>
						<p className="mb-8 text-lg leading-8 text-gray-300">
							Hi, I'm{" "}
							<span className="font-semibold text-white">Ayush Sharma</span>, a
							passionate{" "}
							<span className="text-cyan-400">Full Stack Developer</span> with
							expertise in the <span className="text-cyan-400">MERN Stack</span>
							. I enjoy transforming ideas into scalable, responsive, and
							user-friendly web applications with clean architecture and modern
							UI.
						</p>

						<div className="relative self-center">
							{/* Glow */}
							<div className="absolute inset-0 rounded-3xl bg-cyan-500/20 blur-3xl"></div>

							<img
								src={myImage}
								alt="Ayush Sharma"
								className="relative h-[530px] w-[430px] rounded-3xl mt-20 border border-white/10 object-cover shadow-2xl"
							/>
						</div>
					</motion.div>

					{/* ================= Right ================= */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7 }}
					>
						<p className="mb-10 text-lg leading-8 text-gray-300">
							Beyond web development, I'm deeply interested in Artificial
							Intelligence and enjoy exploring how AI can enhance modern
							applications. I constantly challenge myself to learn new
							technologies and solve real-world problems through software.
						</p>

						{/* ================= Highlights ================= */}
						<div className="mb-12 grid gap-5 sm:grid-cols-2">
							<div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40">
								<h3 className="mb-3 text-lg font-semibold text-cyan-300">
									💻 Full Stack Development
								</h3>

								<p className="leading-7 text-gray-300">
									Building responsive, scalable and performant web applications
									using modern technologies.
								</p>
							</div>

							<div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40">
								<h3 className="mb-3 text-lg font-semibold text-cyan-300">
									🤖 AI Enthusiast
								</h3>

								<p className="leading-7 text-gray-300">
									Exploring AI tools and integrating intelligent features into
									modern web applications.
								</p>
							</div>

							<div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40">
								<h3 className="mb-3 text-lg font-semibold text-cyan-300">
									🚀 Problem Solver
								</h3>

								<p className="leading-7 text-gray-300">
									Passionate about solving real-world problems with efficient
									and scalable software solutions.
								</p>
							</div>

							<div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40">
								<h3 className="mb-3 text-lg font-semibold text-cyan-300">
									📚 Learning something new
								</h3>

								<p className="leading-7 text-gray-300">
									Always learning new frameworks, tools and best practices to
									stay ahead in technology.
								</p>
							</div>
						</div>

						{/* ================= Education ================= */}
						<div>
							<h3 className="mb-6 text-2xl font-bold text-white">Education</h3>

							<div className="space-y-5">
								{/* College */}
								<div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10">
									<div className="mb-3 flex items-center justify-between">
										<h4 className="text-xl font-semibold text-white">
											🎓 Bachelor of Technology
										</h4>

										<span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-400">
											2024 - 2028
										</span>
									</div>

									<p className="font-medium text-cyan-300">
										Computer Science & Engineering
									</p>

									<p className="mt-2 text-gray-400">
										University School of Information, Communication & Technology
										(USICT), GGSIPU
									</p>

									<p className="mt-2 text-sm text-gray-500">CGPA: 8.35 / 10</p>
								</div>

								{/* School */}
								<div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10">
									<div className="mb-3 flex items-center justify-between">
										<h4 className="text-xl font-semibold text-white">
											🏫 Senior Secondary Education
										</h4>

										<span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-400">
											2021 - 2023
										</span>
									</div>

									<p className="font-medium text-cyan-300">CBSE Board</p>

									<p className="mt-2 text-gray-400">
										St. Martin Diocesan School
									</p>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
