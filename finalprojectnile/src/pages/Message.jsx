import { useState } from "react";

export default function Message() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [success, setSuccess] = useState(false);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((current) => ({
			...current,
			[name]: value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setSuccess(true);
		setFormData({ name: "", email: "", message: "" });
	};

	return (
		<div className="max-w-3xl mx-auto px-4 py-10">
			<div className="bg-white rounded-xl shadow p-8">
				<h1 className="text-3xl font-semibold mb-2">Send a message</h1>
				<p className="text-gray-600 mb-6">
					Share your thoughts with the developer about advocating for public transit.
				</p>

				<form onSubmit={handleSubmit} className="space-y-5">
					<label className="block">
						<span className="text-sm font-medium text-gray-700">Name</span>
						<input
							name="name"
							value={formData.name}
							onChange={handleChange}
							placeholder="Your name"
							className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-sky-500 focus:outline-none"
						/>
					</label>

					<label className="block">
						<span className="text-sm font-medium text-gray-700">Email</span>
						<input
							name="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="you@example.com"
							type="email"
							className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-sky-500 focus:outline-none"
						/>
					</label>

					<label className="block">
						<span className="text-sm font-medium text-gray-700">Message</span>
						<textarea
							name="message"
							value={formData.message}
							onChange={handleChange}
							rows="6"
							placeholder="Tell us what public transit needs most..."
							className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-sky-500 focus:outline-none"
						/>
					</label>

					<button
						type="submit"
						className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-3 text-white hover:bg-sky-700"
					>
						Send message
					</button>
				</form>

				{success && (
					<div className="mt-6 rounded-lg bg-emerald-50 border border-emerald-200 p-4 text-emerald-800">
						Thanks! Your message has been sent to the developer.
					</div>
				)}
			</div>
		</div>
	);
}
