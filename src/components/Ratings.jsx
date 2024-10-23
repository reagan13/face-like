const ratings = [
	{ label: "Overall", value: 80 },
	{ label: "Potential", value: 87 },
	{ label: "Jawline", value: 76 },
	{ label: "Cheekbones", value: 72 },
	{ label: "Skin Quality", value: 82 },
	{ label: "Masculinity", value: 91 },
];

const RatingsDisplay = () => {
	return (
		<div className="flex flex-col items-center justify-center bg-base-200 p-6">
			<h1 className="text-4xl font-bold text-primary mb-6">Your Ratings</h1>
			<div className="grid grid-cols-2 gap-4">
				{ratings.map((rating, index) => (
					<div key={index} className="bg-white rounded-lg p-4 shadow-lg">
						<div className="flex justify-between mb-2">
							<span className="text-secondary">{rating.label}</span>
							<span className="text-secondary">{rating.value}</span>
						</div>
						<div className="bg-gray-300 rounded-full h-2">
							<div
								className="bg-green-500 h-2 rounded-full"
								style={{ width: `${rating.value}%` }}
							></div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default RatingsDisplay;
