import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
	{ label: "About Me", href: "#about" },
	{ label: "Skills", href: "#skills" },
	{ label: "Projects", href: "#projects" },
	{ label: "Experience", href: "#experience" },
	{ label: "Contact", href: "#contact" },
];

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("");

	useEffect(() => {
		const sections = document.querySelectorAll("section[id]");

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(`#${entry.target.id}`);
					}
				});
			},
			{
				threshold: 0.5,
			},
		);

		sections.forEach((section) => observer.observe(section));

		return () => observer.disconnect();
	}, []);

	return (
		<header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-2xl">
			<nav className="flex h-20 w-full items-center justify-between px-8 lg:px-16">
				{/* Logo */}
				<a
					href="#"
					className="text-3xl font-bold tracking-wide text-white transition-all duration-300 hover:text-cyan-400"
				>
					Ayush Sharma
				</a>

				{/* Desktop Menu */}
				<div className="hidden items-center gap-3 md:flex">
					{navItems.map((item) => (
						<a
							key={item.label}
							href={item.href}
							className={`rounded-lg px-4 py-2 text-[15px] font-medium transition-all duration-300
								${
									activeSection === item.href
										? "bg-cyan-400/10 text-cyan-400"
										: "text-gray-300 hover:bg-white/5 hover:text-cyan-400"
								}`}
						>
							{item.label}
						</a>
					))}
				</div>

				{/* Mobile Menu Button */}
				<button
					onClick={() => setOpen(!open)}
					className="text-white transition hover:text-cyan-400 md:hidden"
				>
					{open ? <X size={30} /> : <Menu size={30} />}
				</button>
			</nav>

			{/* Mobile Menu */}
			{open && (
				<div className="border-t border-white/10 bg-black/70 backdrop-blur-2xl md:hidden">
					{navItems.map((item) => (
						<a
							key={item.label}
							href={item.href}
							onClick={() => setOpen(false)}
							className={`block rounded-lg px-8 py-4 text-[15px] font-medium transition-all duration-300
								${
									activeSection === item.href
										? "bg-cyan-400/10 text-cyan-400"
										: "text-gray-300 hover:bg-white/5 hover:text-cyan-400"
								}`}
						>
							{item.label}
						</a>
					))}
				</div>
			)}
		</header>
	);
}
