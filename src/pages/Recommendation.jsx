const RecommendationPage = () => {
	return (
		<div className="flex flex-col justify-center items-center h-screen bg-gray-800">
			<div className="bg-gray-900 p-8 rounded-lg shadow-lg text-center">
				<h2 className="text-3xl font-bold text-white">Recommendations</h2>
				<p className="mt-4 text-gray-400">
					Based on your analysis, here are some recommendations:
				</p>
				<ul className="mt-6 text-gray-300">
					<li>1. Consider using a moisturizer for healthier skin.</li>
					<li>2. Try to stay hydrated for better complexion.</li>
					<li>3. Regular exercise can improve your overall appearance.</li>
				</ul>
			</div>
		</div>
	);
};

export default RecommendationPage;
