import { Link } from "react-router-dom";

export default function PolicyCard({ title, summary, actionText = "Learn more", link, onAction }) {
	return (
		<div className="border rounded-lg p-4 bg-white shadow-sm">
			<h3 className="font-semibold text-lg">{title}</h3>
			<p className="text-gray-600 mt-2 text-sm">{summary}</p>
			<div className="mt-4 text-right">
				{link ? (
					<Link
						to={link}
						className="inline-block px-3 py-1 bg-sky-600 text-white rounded text-sm hover:bg-sky-700"
					>
						{actionText}
					</Link>
				) : (
					<button
						onClick={onAction}
						className="px-3 py-1 bg-sky-600 text-white rounded text-sm hover:bg-sky-700"
					>
						{actionText}
					</button>
				)}
			</div>
		</div>
	);
}

