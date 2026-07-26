import { motion } from "framer-motion";
import {
	FaEnvelope,
	FaGithub,
	FaLinkedin,
	FaMapMarkerAlt,
	FaPhoneAlt,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaRegFilePdf } from "react-icons/fa6";
const contactInfo = [
	{
		icon: <FaEnvelope size={22} />,
		title: "Email",
		value: "a.sharma.codes@gmail.com",
		link: "mailto:a.sharma.codes@gmail.com",
	},
	{
		icon: <FaPhoneAlt size={20} />,
		title: "Phone",
		value: "+91 9289140340",
		link: "tel:+919289140340",
	},
	{
		icon: <FaMapMarkerAlt size={22} />,
		title: "Location",
		value: "New Delhi, India",
		link: "#",
	},
];

const socialLinks = [
	{
		name: "GitHub",
		icon: <FaGithub size={30} />,
		link: "https://github.com/ayushsharma-cs",
	},
	{
		name: "LinkedIn",
		icon: <FaLinkedin size={30} />,
		link: "https://linkedin.com/in/ayushsharma-cs",
	},
	{
		name: "LeetCode",
		icon: <SiLeetcode size={30} />,
		link: "https://leetcode.com/u/ayushsharma-cs",
	},
	{
		name: "Resume",
		icon: <FaRegFilePdf size={30} />,
		link: "/resume.pdf",
	},
];

export default function Contact() {
	return (
		<section
			id="contact"
			className="relative mx-auto max-w-7xl overflow-hidden px-6 pt-20 pb-20 lg:px-16"
		>
			{/* Background Glow */}
			<motion.div
				animate={{
					scale: [1, 1.15, 1],
					opacity: [0.15, 0.3, 0.15],
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
				}}
				className="absolute left-0 top-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]"
			/>

			<motion.div
				animate={{
					scale: [1.1, 1, 1.1],
					opacity: [0.15, 0.3, 0.15],
				}}
				transition={{
					duration: 10,
					repeat: Infinity,
				}}
				className="absolute bottom-16 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]"
			/>

			{/* Heading */}
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7 }}
				className="mb-8 text-center"
			>
				<p className="mb-4 text-lg font-bold uppercase tracking-[0.35em] text-cyan-400">
					Get In Touch
				</p>

				<h2 className="text-4xl font-bold text-white lg:text-5xl">
					Let's Connect
				</h2>

				<p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
					Have a project in mind, an internship opportunity, or just want to say
					hello? Feel free to reach out. I'm always open to discussing new ideas
					and collaborations.
				</p>
			</motion.div>

			{/* Availability */}
			<div className="mb-12 flex justify-center">
				<div className="inline-flex items-center gap-3 rounded-full border border-green-400/20 bg-green-500/10 px-6 py-3 backdrop-blur-xl">
					<span className="h-3 w-3 animate-pulse rounded-full bg-green-400" />

					<span className="text-sm font-medium text-green-300">
						Available for Internships • Freelance • Full-Time
					</span>
				</div>
			</div>

			<div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1.7fr_0.8fr]">
				{/* LEFT SIDE */}
				<div className="space-y-4">
					{contactInfo.map((item, index) => (
						<motion.a
							key={item.title}
							href={item.link}
							initial={{
								opacity: 0,
								x: -40,
							}}
							whileInView={{
								opacity: 1,
								x: 0,
							}}
							viewport={{ once: true }}
							transition={{
								delay: index * 0.15,
							}}
							whileHover={{
								x: 8,
							}}
							className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
						>
							<div className="rounded-xl bg-cyan-500/10 p-4 text-cyan-400 transition duration-300 group-hover:scale-110">
								{item.icon}
							</div>

							<div>
								<h3 className="font-semibold text-white">{item.title}</h3>

								<p className="text-gray-400">{item.value}</p>
							</div>
						</motion.a>
					))}
				</div>
				{/* RIGHT SIDE */}
				<div className="grid h-full grid-cols-2 gap-5">
					{socialLinks.map((item) => (
						<motion.a
							key={item.name}
							href={item.link}
							target="_blank"
							rel="noopener noreferrer"
							initial={{
								opacity: 0,
								scale: 0.8,
							}}
							whileInView={{
								opacity: 1,
								scale: 1,
							}}
							viewport={{ once: true }}
							whileHover={{
								scale: 1.03,
								y: -6,
							}}
							whileTap={{
								scale: 0.97,
							}}
							className="
								group
								text-white
								flex
								min-h-[150px]
								flex-col
								items-center
								justify-center
								rounded-2xl
								border
								border-white/10
								bg-white/5
								backdrop-blur-xl
								transition-all
								duration-300
								hover:border-cyan-400
								hover:bg-cyan-400/5
								hover:text-cyan-400
								hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]
							"
						>
							<div className="transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110">
								{item.icon}
							</div>

							<span className="mt-4 text-base font-semibold text-gray-300 transition-colors duration-300 group-hover:text-cyan-400">
								{item.name}
							</span>
						</motion.a>
					))}
				</div>
			</div>
			{/* Footer */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ delay: 0.5 }}
				className="mt-6 text-center"
			>
				<p className="text-base font-medium text-gray-300">
					Looking forward to building something amazing together.
				</p>

				<p className="mt-2 text-sm text-gray-500">
					Thanks for visiting my portfolio.
				</p>
			</motion.div>
		</section>
	);
}
