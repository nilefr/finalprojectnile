export default function Testimonial({ name, quote, avatarUrl }) {
	return (
		<div className="border rounded p-3 bg-white shadow-sm">
			<div className="font-semibold">{name}</div>
			<div className="text-gray-700 mt-2 text-sm">“{quote}”</div>
		</div>
	);
}

