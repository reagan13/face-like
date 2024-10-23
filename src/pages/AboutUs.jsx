import { FiUsers, FiStar, FiMessageCircle } from "react-icons/fi"; // Icons for the team section

const AboutUs = () => {
	return (
		<div className="bg-base-200 h-full">
			{/* Hero Section */}
			<div className="relative flex flex-col items-center justify-center h-screen text-center px-6">
				<h1 className="text-4xl font-extrabold text-primary drop-shadow-lg">
					About Us
				</h1>
				<p className="mt-4 text-lg text-secondary max-w-lg">
					We are dedicated to helping you discover your unique beauty through
					advanced AI analysis.
				</p>
			</div>

			{/* Our Mission Section */}
			<div className="py-20 bg-base-300">
				<div className="text-center">
					<h2 className="text-4xl font-bold text-primary mb-6">Our Mission</h2>
					<p className="text-lg text-secondary mb-8 max-w-xl mx-auto">
						At Face Like, we aim to empower individuals by providing insightful
						facial analysis using cutting-edge AI technology. We believe that
						everyone deserves to understand and celebrate their unique beauty.
					</p>
				</div>
			</div>

			{/* Our Team Section */}
			<div className="py-20 bg-base-200">
				<div className="text-center mb-10">
					<h2 className="text-4xl font-bold text-primary mb-6">
						Meet Our Team
					</h2>
					<p className="text-lg text-secondary mb-8 max-w-xl mx-auto">
						Our diverse team of experts combines technology, beauty, and passion
						to bring you the best analysis experience.
					</p>
				</div>

				{/* Team Members */}
				<div className="flex flex-wrap justify-center space-x-6">
					<div className="bg-base-100 p-6 rounded-lg shadow-lg w-64 text-center">
						<FiUsers size={40} className="text-primary mb-4" />
						<h3 className="text-xl font-bold text-primary mb-2">John Doe</h3>
						<p className="text-secondary">Co-Founder & CEO</p>
					</div>

					<div className="bg-base-100 p-6 rounded-lg shadow-lg w-64 text-center">
						<FiStar size={40} className="text-primary mb-4" />
						<h3 className="text-xl font-bold text-primary mb-2">Jane Smith</h3>
						<p className="text-secondary">Lead Developer</p>
					</div>

					<div className="bg-base-100 p-6 rounded-lg shadow-lg w-64 text-center">
						<FiMessageCircle size={40} className="text-primary mb-4" />
						<h3 className="text-xl font-bold text-primary mb-2">
							Emily Johnson
						</h3>
						<p className="text-secondary">Marketing Specialist</p>
					</div>
				</div>
			</div>

			{/* Get in Touch Section */}
			<div className="py-20 bg-base-300">
				<div className="text-center">
					<h2 className="text-4xl font-bold text-primary mb-6">Get in Touch</h2>
					<p className="text-lg text-secondary mb-8 max-w-xl mx-auto">
						We would love to hear from you! Whether you have questions,
						feedback, or just want to say hello, feel free to reach out to us.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
