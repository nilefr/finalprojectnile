import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<header className="w-full bg-white shadow-sm">
			<div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
				<div className="flex items-center gap-3">
					<div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center text-white font-bold">BAY</div>
					<span className="font-semibold text-lg">Bay Area Advocates</span>
				</div>

				<nav className="flex items-center gap-6 text-sm">
					<Link to="/" className="text-gray-700 hover:text-sky-600">Home</Link>
					<Link to="/about" className="text-gray-700 hover:text-sky-600">About</Link>
					<Link to="/profile" className="text-gray-700 hover:text-sky-600">Profile</Link>
					<Link to="/info" className="text-gray-700 hover:text-sky-600">Info</Link>
				</nav>
			</div>
		</header>
	);
}

