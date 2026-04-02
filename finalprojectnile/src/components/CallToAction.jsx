export default function CallToAction({ title = "Join the movement", subtitle = "Help make transit better.", buttonText = "Get involved", onClick }) {
	return (
		<section className="bg-sky-600 text-white py-8 rounded-lg my-6">
			<div className="max-w-4xl mx-auto px-4 text-center">
				<h2 className="text-xl font-bold">{title}</h2>
				<p className="mt-2 text-sm opacity-90">{subtitle}</p>
				<div className="mt-4">
					<button onClick={onClick} className="px-4 py-2 bg-white text-sky-600 rounded font-semibold hover:bg-gray-100">
						{buttonText}
					</button>
				</div>
			</div>
		</section>
	);
}

