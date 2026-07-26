import { motion } from "framer-motion";
import pythonrepo from "../assets/pythonrepo.svg";
import DSAimage from "../assets/DSAimage.png";
import DBMSimage from "../assets/DBMS.png";
import OSimage from "../assets/OSimage.png";
import Firebase from "../assets/Firebase.svg";
import {
	SiHtml5,
	SiJavascript,
	SiTypescript,
	SiReact,
	SiNextdotjs,
	SiTailwindcss,
	SiRedux,
	SiNodedotjs,
	SiExpress,
	SiMongodb,
	SiMysql,
	SiHoppscotch,
	SiPostman,
	SiGithub,
	SiFastapi,
} from "react-icons/si";

import { FaJava } from "react-icons/fa6";
import { TbLetterC } from "react-icons/tb";

import {
	Monitor,
	Server,
	Database,
	Wrench,
	Code2,
	BookOpen,
} from "lucide-react";

const skillCategories = [
	{
		title: "Frontend",
		icon: <Monitor className="h-6 w-6 text-cyan-400" />,
		description: "Building modern and responsive user interfaces.",
		color:
			"hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]",
		skills: [
			{
				name: "HTML",
				icon: <SiHtml5 className="text-4xl text-orange-500" />,
			},
			{
				name: "CSS",
				icon: <div className="text-4xl font-bold text-blue-500">CSS</div>,
			},
			{
				name: "JavaScript",
				icon: <SiJavascript className="text-4xl text-yellow-400" />,
			},
			{
				name: "TypeScript",
				icon: <SiTypescript className="text-4xl text-blue-400" />,
			},
			{
				name: "React",
				icon: <SiReact className="text-4xl text-cyan-400" />,
			},
			{
				name: "Next.js",
				icon: <SiNextdotjs className="text-4xl text-white" />,
			},
			{
				name: "Tailwind CSS",
				icon: <SiTailwindcss className="text-4xl text-sky-400" />,
			},
			{
				name: "Redux",
				icon: <SiRedux className="text-4xl text-purple-500" />,
			},
		],
	},

	{
		title: "Backend",
		icon: <Server className="h-6 w-6 text-green-400" />,
		description: "Developing scalable server-side applications.",
		color:
			"hover:border-green-400/40 hover:shadow-[0_0_40px_rgba(74,222,128,0.15)]",
		skills: [
			{
				name: "Node.js",
				icon: <SiNodedotjs className="text-4xl text-green-500" />,
			},
			{
				name: "Express.js",
				icon: <SiExpress className="text-4xl text-white" />,
			},
			{
				name: "FastAPI",
				icon: <SiFastapi className="text-4xl text-green-500" />,
			},
		],
	},

	{
		title: "Database",
		icon: <Database className="h-6 w-6 text-blue-400" />,
		description: "Working with relational and NoSQL databases.",
		color:
			"hover:border-blue-400/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]",
		skills: [
			{
				name: "MongoDB",
				icon: <SiMongodb className="text-4xl text-green-500" />,
			},
			{
				name: "SQL",
				icon: <SiMysql className="text-4xl text-blue-500" />,
			},
			{
				name: "Firebase",
				icon: (
					<img
						src={Firebase}
						alt="Firebase"
						className="text-9xl text-blue-500"
					/>
				),
			},
		],
	},

	{
		title: "Developer Tools",
		icon: <Wrench className="h-6 w-6 text-yellow-400" />,
		description: "Tools that improve productivity and workflow.",
		color:
			"hover:border-yellow-400/40 hover:shadow-[0_0_40px_rgba(250,204,21,0.15)]",
		skills: [
			{
				name: "GitHub",
				icon: <SiGithub className="text-4xl text-white" />,
			},
			{
				name: "Postman",
				icon: <SiPostman className="text-4xl text-orange-500" />,
			},
			{
				name: "Hoppscotch",
				icon: <SiHoppscotch className="text-4xl text-green-500" />,
			},
		],
	},

	{
		title: "Programming Languages",
		icon: <Code2 className="h-6 w-6 text-pink-400" />,
		description: "Languages used for solving real-world problems.",
		color:
			"hover:border-pink-400/40 hover:shadow-[0_0_40px_rgba(236,72,153,0.15)]",
		skills: [
			{
				name: "Java",
				icon: <FaJava className="text-4xl text-red-500" />,
			},
			{
				name: "Python",
				icon: (
					<img
						src={pythonrepo}
						alt="Python"
						className="h-10 w-10 object-contain"
					/>
				),
			},
			{
				name: "C",
				icon: <TbLetterC className="text-4xl text-blue-500" />,
			},
		],
	},

	{
		title: "Coursework",
		icon: <BookOpen className="h-6 w-6 text-orange-400" />,
		description: "Core Computer Science fundamentals.",
		color:
			"hover:border-orange-400/40 hover:shadow-[0_0_40px_rgba(251,146,60,0.15)]",
		skills: [
			{
				name: "Data Structures & Algorithms",
				icon: <img src={DSAimage} className="h-10 w-10 object-contain" />,
			},
			{
				name: "Operating Systems",
				icon: <img src={OSimage} className="h-10 w-10 object-contain" />,
			},
			{
				name: "DBMS",
				icon: <img src={DBMSimage} className="h-10 w-10 object-contain" />,
			},
			{
				name: "Computer Networks",
				icon: "🌐",
			},
		],
	},
];

const container = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.15,
		},
	},
};

const card = {
	hidden: {
		opacity: 0,
		y: 40,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
		},
	},
};

type Skill = {
	name: string;
	icon: React.ReactNode;
};

type SkillCategory = {
	title: string;
	icon: React.ReactNode;
	description: string;
	color: string;
	skills: Skill[];
};

function SkillCard({ category }: { category: SkillCategory }) {
	return (
		<motion.div
			variants={card}
			whileHover={{
				y: -8,
			}}
			transition={{
				type: "spring",
				stiffness: 400,
				damping: 25,
			}}
			className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition-colors duration-300 ${category.color}`}
		>
			{/* Background Glow */}
			<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

			{/* Header */}
			<div className="relative mb-6 flex items-center gap-4">
				<div className="rounded-2xl border border-white/10 bg-white/5 p-3">
					{category.icon}
				</div>

				<div>
					<h3 className="text-xl font-bold text-white">{category.title}</h3>

					<p className="mt-1 text-xs text-gray-400">{category.description}</p>
				</div>
			</div>

			{/* Skills */}
			<div className="grid grid-cols-3 gap-3">
				{category.skills.map((skill) => (
					<motion.div
						key={skill.name}
						whileHover={{
							scale: 1.08,
							y: -4,
						}}
						transition={{
							type: "spring",
							stiffness: 400,
							damping: 25,
						}}
						className="group/item flex flex-col items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3 text-center transition-colors duration-200 hover:border-cyan-400/30 hover:bg-white/10 min-h-[90px]"
					>
						<div className="flex h-10 text-2xl items-center justify-center transition-transform duration-200 group-hover/item:scale-110 group-hover/item:rotate-6 [&_svg]:!text-2xl [&_img]:!h-8 [&_img]:!w-8 [&_div]:!text-2xl">
							{skill.icon}
						</div>

						<p className="mt-2 text-[11px] font-medium leading-tight text-white">
							{skill.name}
						</p>
					</motion.div>
				))}
			</div>
		</motion.div>
	);
}

export default function Skills() {
	return (
		<section id="skills" className="mx-auto max-w-none px-6 py-24 lg:px-16">
			{/* Heading */}
			<motion.div
				initial={{
					opacity: 0,
					y: 30,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="mb-20 text-center"
			>
				<p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
					My Skills
				</p>

				<h2 className="text-4xl font-bold text-white lg:text-5xl">
					Technologies I Work With
				</h2>

				<p className="mx-auto mt-5 max-w-2xl text-gray-400">
					My technical toolkit is organized into the areas I use most while
					building modern full-stack applications.
				</p>
			</motion.div>

			{/* Skills Grid */}
			<motion.div
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{
					once: true,
					amount: 0.15,
				}}
				className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
			>
				<SkillCard category={skillCategories[0]} />

				<SkillCard category={skillCategories[1]} />

				<SkillCard category={skillCategories[2]} />

				<SkillCard category={skillCategories[3]} />

				<SkillCard category={skillCategories[4]} />

				<SkillCard category={skillCategories[5]} />
			</motion.div>
		</section>
	);
}
