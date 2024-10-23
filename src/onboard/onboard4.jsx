import React from "react";
import {
	FiEye,
	FiMoreVertical,
	FiCheck,
	FiMessageCircle,
} from "react-icons/fi"; // Icons
import { AiOutlineScan } from "react-icons/ai"; // Scan icon
import { useNavigate } from "react-router-dom";
import person from "../../public/person.jpg"; // Assuming the image is locally available
import boy from "../../public/boy.jpg"; // Assuming the image is locally available

const RecommendationPage = () => {
	const navigate = useNavigate();

	const handleSuperChargeClick = () => {
		// Navigation or action for supercharging
	};

	const handleProClick = () => {
		// Navigation or action for getting FaceLIKE Pro
	};

	const handleInviteFriends = () => {
		// Navigation or action for inviting friends
	};

	return (
		<div className="text-center bg-base-200 flex justify-center items-center p-6 h-[50rem]">
			<div className="grid grid-cols-3 gap-4 w-full items-center">
				{/* Recommendations Section */}
				<div className="mockup-phone">
					<div className="camera"></div>
					<div className="display flex justify-center items-center">
						<div className="flex flex-col justify-center items-center w-full p-4 max-w-[350px]">
							<h2 className="text-4xl font-extrabold text-primary mb-4 text-center">
								Recommendations
							</h2>
							<div className="w-full h-48 rounded-lg bg-gray-300 mb-6 overflow-hidden">
								<img
									src={person}
									alt="Facial Analysis"
									className="w-full h-full object-cover"
								/>
							</div>
							<p className="text-lg text-secondary mb-4 text-center">
								Your best features highlighted
							</p>
							<button
								onClick={handleSuperChargeClick}
								className="btn btn-primary w-full max-w-xs mb-8"
							>
								Supercharge Your Profile
							</button>

							{/* Rating Overview */}
							<div className="flex flex-col mb-6">
								<h3 className="text-lg font-semibold text-primary mb-2">
									Your Ratings
								</h3>
								<div className="flex justify-between text-gray-500">
									<p>Symmetry: 8.5/10</p>
									<p>Jawline: 7.8/10</p>
									<p>Cheekbone Structure: 9.0/10</p>
								</div>
							</div>

							{/* Icons for actions */}
							<div className="flex justify-between w-full max-w-xs mb-6">
								<button className="flex flex-col items-center">
									<AiOutlineScan className="text-3xl text-primary mb-1" />
									<span className="text-xs text-gray-500">Scan</span>
								</button>
								<button className="flex flex-col items-center">
									<FiMoreVertical className="text-3xl text-primary mb-1" />
									<span className="text-xs text-gray-500">Options</span>
								</button>
								<button className="flex flex-col items-center">
									<FiCheck className="text-3xl text-primary mb-1" />
									<span className="text-xs text-gray-500">Check</span>
								</button>
								<button className="flex flex-col items-center">
									<FiMessageCircle className="text-3xl text-primary mb-1" />
									<span className="text-xs text-gray-500">Message</span>
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* User Profile Section */}
				<div className="mockup-phone">
					<div className="camera"></div>
					<div className="display flex justify-center items-center">
						<div className="flex flex-col justify-center items-center w-full p-4 max-w-[350px]">
							<div className="flex flex-col items-center mb-8">
								<FiEye className="text-6xl text-primary mb-4" />
								<p className="text-lg font-semibold text-secondary text-center">
									See Your Results
								</p>
								<p className="mt-2 text-sm text-gray-500 text-center">
									Invite friends to access premium features
								</p>
							</div>

							{/* Circle Image and Ratings */}
							<div className="flex flex-col items-center mb-6">
								<div className="w-32 h-32 rounded-full bg-gray-300 mb-4 overflow-hidden">
									<img
										src={boy}
										alt="Facial Analysis"
										className="w-full h-full object-cover rounded-full"
									/>
								</div>
								<p className="text-md font-semibold text-primary text-center">
									Your Analysis
								</p>
								<p className="text-sm text-gray-500 mt-1">Overall: 8.2/10</p>
							</div>

							{/* Action Buttons */}
							<div className="space-y-4 w-full">
								<button
									onClick={handleProClick}
									className="btn btn-primary w-full max-w-xs"
								>
									Upgrade to FaceLIKE Pro
								</button>
								<button
									onClick={handleInviteFriends}
									className="btn btn-secondary w-full max-w-xs"
								>
									Invite Friends
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Level Up Section */}
				<div className="mockup-phone">
					<div className="camera"></div>
					<div className="display flex flex-col justify-start items-center p-4 max-w-[350px]">
						<button className="absolute top-4 right-4">
							<span className="text-xl text-gray-500">&times;</span>{" "}
						</button>
						<h2 className="text-4xl font-extrabold text-primary mb-2 text-center">
							Level Up Your Analysis
						</h2>
						<p className="text-lg text-secondary text-center mb-4">
							Enhance your features with tailored recommendations
						</p>

						{/* Rating Overview Section */}
						<div className="w-full mb-6">
							<h3 className="text-lg font-semibold text-primary mb-2 text-center">
								Your Detailed Ratings
							</h3>
							<div className="grid grid-cols-2 gap-2">
								{[
									"Overall",
									"Symmetry",
									"Jawline",
									"Cheekbones",
									"Skin Quality",
									"Smile",
								].map((item, index) => (
									<div
										key={index}
										className="flex flex-col items-center border rounded-lg p-2 bg-gray-200"
									>
										<p className="font-semibold text-center">{item}</p>
										<p className="text-lg font-bold text-center">
											8.{index + 1}/10
										</p>
										<div className="w-full h-1 bg-gray-300 rounded-full mt-1 overflow-hidden">
											<div
												className="h-full bg-green-500 rounded-full"
												style={{
													width: `${(8 + index) * 10}%`,
													maxWidth: "100%",
												}}
											></div>
										</div>
									</div>
								))}
							</div>
						</div>

						<p className="text-sm text-gray-500 text-center mb-4">
							Join 1,000,000 others in unlocking their beauty potential
						</p>
						<button className="btn btn-primary w-full max-w-xs mb-4">
							Unlock Your Potential
						</button>
						<p className="text-center text-lg font-semibold text-primary">
							$3.99 per week
						</p>
						{/* Footer Links */}
						<div className="flex justify-between text-sm text-gray-500 mt-4 w-full">
							<a href="#" className="hover:underline">
								Terms of Use
							</a>
							<a href="#" className="hover:underline">
								Restore Purchase
							</a>
							<a href="#" className="hover:underline">
								Privacy Policy
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecommendationPage;
