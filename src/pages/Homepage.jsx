import { useNavigate } from "react-router-dom";
import { FiUploadCloud, FiSearch } from "react-icons/fi"; // Icons for CTA buttons

const HomePage = () => {
	const navigate = useNavigate();

	const handleUploadPhoto = () => {
		navigate("/upload");
	};

	const handleSeeAnalysis = () => {
		navigate("/analysis");
	};

	return (
		<div className="bg-base-200 relative h-full">
			{/* Background Image (Optional, or use a gradient) */}
			{/* <div
				className="absolute top-0 left-0 w-full h-full bg-[url('/path-to-your-image.jpg')] bg-cover bg-center opacity-20"
				aria-hidden="true"
			></div> */}

			{/* Hero Section */}
			<div className="relative flex flex-col items-center justify-center h-screen text-center px-6">
				<h1 className="text-4xl font-extrabold text-primary drop-shadow-lg">
					Reveal the Beauty Within
				</h1>
				<p className="mt-4 text-lg text-secondary max-w-lg">
					Discover insights about your facial features with our AI-powered
					analysis. Whether it's skin quality or symmetry, we'll help you find
					out!
				</p>

				{/* Call to Action Buttons */}
				<div className="mt-8 space-y-0 space-x-4 flex">
					<button
						className="btn btn-primary flex items-center space-x-2 hover:scale-105 transition-transform"
						onClick={handleUploadPhoto}
					>
						<FiUploadCloud size={14} />
						<span>Upload Photo</span>
					</button>

					<button
						className="btn btn-accent flex items-center space-x-2 hover:scale-105 transition-transform"
						onClick={handleSeeAnalysis}
					>
						<FiSearch size={14} />
						<span>See Analysis</span>
					</button>
				</div>
			</div>

			{/* Feature Highlights Section */}
			<div className="relative py-20 bg-base-300 h-screen">
				<div className="text-center">
					<h2 className="text-4xl font-bold text-primary mb-6">
						Why Face Like?
					</h2>
					<p className="text-lg text-secondary mb-8 max-w-xl mx-auto">
						Our advanced AI algorithms analyze various facial aspects including
						jawline, cheekbones, skin quality, and more!
					</p>
				</div>

				{/* Feature Cards */}
				<div className="flex flex-wrap justify-center space-x-6">
					<div className="bg-base-100 p-6 rounded-lg shadow-lg w-64 text-center">
						<h3 className="text-xl font-bold text-primary mb-4">
							AI Facial Recognition
						</h3>
						<p className="text-secondary">
							Our AI detects and analyzes facial structures for personalized
							insights.
						</p>
					</div>

					<div className="bg-base-100 p-6 rounded-lg shadow-lg w-64 text-center">
						<h3 className="text-xl font-bold text-primary mb-4">
							Skin Quality Analysis
						</h3>
						<p className="text-secondary">
							Receive accurate skin quality ratings based on AI-powered
							analysis.
						</p>
					</div>

					<div className="bg-base-100 p-6 rounded-lg shadow-lg w-64 text-center">
						<h3 className="text-xl font-bold text-primary mb-4">
							Customized Recommendations
						</h3>
						<p className="text-secondary">
							Get personalized recommendations to enhance your facial features.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
