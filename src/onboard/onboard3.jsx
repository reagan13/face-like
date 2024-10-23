import React from "react";
import { FaDiscord, FaFacebook, FaTwitter } from "react-icons/fa"; // Social Icons
import { useNavigate } from "react-router-dom";
import community from "../../public/community.jpg";
const OnboardingPage3 = () => {
	const navigate = useNavigate();

	return (
		<div className=" bg-base-200 flex flex-col justify-between p-6 mt-10 h-[50rem] ">
			{/* Top Section: Title and Image */}
			<div className="flex flex-col items-center mb-8">
				<h2 className="text-5xl font-extrabold text-primary mb-4">
					Join the Community
				</h2>
				<p className="text-xl text-secondary mb-4">
					Connect with other Face Like users and share your experiences.
				</p>
				{/* Placeholder for Image */}
				<div className="w-full h-64 bg-gray-200 rounded-lg shadow-lg mb-8">
					{/* Imagine this is a community image */}
					<img
						src={community}
						alt="Community"
						className="w-full h-full object-cover rounded-lg"
					/>
				</div>
			</div>

			{/* Middle Section: Social Media Links */}
			<div className="flex justify-center space-x-12 mb-8">
				<button className="flex flex-col items-center">
					<FaDiscord className="text-7xl text-blue-600 mb-2" />
					<span className="text-md text-gray-600 font-semibold">
						Join Discord
					</span>
				</button>
				<button className="flex flex-col items-center">
					<FaFacebook className="text-7xl text-blue-700 mb-2" />
					<span className="text-md text-gray-600 font-semibold">
						Follow on Facebook
					</span>
				</button>
				<button className="flex flex-col items-center">
					<FaTwitter className="text-7xl text-blue-400 mb-2" />
					<span className="text-md text-gray-600 font-semibold">
						Follow on Twitter
					</span>
				</button>
			</div>

			{/* Bottom Section: Call to Action */}
			<div className="text-center">
				<p className="text-lg text-gray-500 mb-4">
					Stay updated with the latest news and connect with other Face Like
					users.
				</p>
			</div>
		</div>
	);
};

export default OnboardingPage3;
