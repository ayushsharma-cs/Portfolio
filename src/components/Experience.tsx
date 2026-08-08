import { motion } from "framer-motion";
import {
	Briefcase,
	Calendar,
	CheckCircle2,
	MapPin,
	Building2,
} from "lucide-react";

export default function Experience() {
	const experiences = [
		{
			role: "Software Engineering Intern",
			company: "IDEA Lab, GGSIPU",
			period: "June 2026 – July 2026",
			location: "On-site / Hybrid",
			description:
				"Developed Dental Genie, an AI-powered dental diagnosis and clinic management platform during my summer internship at AICTE IDEALab, GGSIPU",
			achievements: [
				"Worked primarily on the frontend and backend, building responsive React.js interfaces and RESTful APIs using Node.js and Express.js",
				"Implemented features including role-based authentication, patient management, appointment scheduling, prescriptions, medical history, image uploads, and diagnostic reports",
				"Integrated the web application with Firebase, Cloudinary, and the Python-based AI service to create a complete end-to-end healthcare platform",
			],
			skills: [
				"React",
				"javascript",
				"FastAPI",
				"Cloudinary",
				"Firebase",
				"OpenCV",
			],
		},
	];

	return (
		<section id="experience" className="w-full px-6 py-24 lg:px-12 xl:px-20">
			<div className="mx-auto max-w-[1600px]">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="mb-12"
				>
					<p className="mb-3 text-sm text-center font-semibold uppercase tracking-[0.3em] text-cyan-400">
						Experience
					</p>

					<h2 className="text-4xl font-bold text-center text-white lg:text-5xl">
						Work & Internships
					</h2>
				</motion.div>

				{/* Experience List */}
				<div className="mx-auto max-w-7xl space-y-8">
					{experiences.map((exp, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-8  transition-all duration-300 hover:border-cyan-500/40 hover:bg-white/[0.04]"
						>
							{/* Card Top Row */}
							<div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
								<div>
									<h3 className="flex items-center gap-2.5 text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
										<Briefcase className="h-5 w-5 text-cyan-400 shrink-0" />
										{exp.role}
									</h3>
									<div className="mt-2 flex items-center gap-2 text-lg font-medium text-gray-300">
										<Building2 className="h-4 w-4 text-cyan-400" />
										<span>{exp.company}</span>
									</div>
								</div>

								<div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
									<span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-cyan-300">
										<Calendar className="h-3.5 w-3.5" />
										{exp.period}
									</span>
									<span className="flex items-center gap-1 text-xs text-gray-400">
										<MapPin className="h-3.5 w-3.5" />
										{exp.location}
									</span>
								</div>
							</div>

							{/* Overview */}
							<p className="mt-4 text-sm leading-relaxed text-gray-300">
								{exp.description}
							</p>

							{/* Achievements */}
							<div className="mt-6">
								<ul className="space-y-2.5">
									{exp.achievements.map((item, idx) => (
										<li
											key={idx}
											className="flex items-start gap-3 text-sm text-gray-300"
										>
											<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
											<span>{item}</span>
										</li>
									))}
								</ul>
							</div>

							{/* Tech Stack */}
							<div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-white/10">
								{exp.skills.map((skill, idx) => (
									<span
										key={idx}
										className="rounded-md border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
									>
										{skill}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
