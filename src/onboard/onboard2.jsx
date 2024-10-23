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

const OnboardingPage2 = () => {
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
		<div className="text-center bg-base-200 flex justify-center items-center p-6">
			<div className="grid grid-cols-3 gap-4 w-full items-center">
				{/* First Section */}
				<div className="mockup-phone">
					<div className="camera"></div>
					<div className="display flex justify-center items-center w-56 border-2 border-white">
						<div className="flex flex-col justify-center items-center w-full p-4 ">
							{" "}
							{/* Fixed height */}
							{/* Heading: Facial Analysis */}
							<h2 className="text-xl font-bold text-primary mb-4 text-center">
								{" "}
								{/* Standardized font size */}
								Facial Analysis
							</h2>
							{/* Rectangular Image */}
							<div className="w-full h-36 rounded-lg bg-gray-300 mb-4 overflow-hidden">
								{" "}
								{/* Standard image height */}
								<img
									src={person}
									alt="Facial Analysis"
									className="w-full h-full object-cover"
								/>
							</div>
							{/* Free Scan Text */}
							<p className="text-lg text-secondary mb-3 text-center">
								Free Scan in 7 Days
							</p>
							{/* Supercharge Button */}
							<button
								onClick={handleSuperChargeClick}
								className="btn btn-primary  mb-4"
							>
								Supercharge Now
							</button>
							{/* 3 Dots (Navigation Indicators) */}
							<div className="flex justify-center items-center space-x-2 mb-4">
								<span className="size-1 bg-gray-400 rounded-full"></span>
								<span className="size-1 bg-gray-400 rounded-full"></span>
								<span className="size-1 bg-gray-400 rounded-full"></span>
							</div>
							{/* 4 Icons: Scan, Vertical Dots, Check, Message */}
							<div className="flex justify-between w-full max-w-xs mb-2">
								<button className="flex flex-col items-center">
									<AiOutlineScan className="text-xl text-primary mb-1" />
									<span className="text-xs text-gray-500">Scan</span>
								</button>
								<button className="flex flex-col items-center">
									<FiMoreVertical className="text-xl text-primary mb-1" />
									<span className="text-xs text-gray-500">Options</span>
								</button>
								<button className="flex flex-col items-center">
									<FiCheck className="text-xl text-primary mb-1" />
									<span className="text-xs text-gray-500">Check</span>
								</button>
								<button className="flex flex-col items-center">
									<FiMessageCircle className="text-xl text-primary mb-1" />
									<span className="text-xs text-gray-500">Message</span>
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Second Section */}
				<div className="mockup-phone">
					<div className="camera"></div>
					<div className="display flex justify-center items-center w-56 border-2 border-white">
						<div className="flex flex-col justify-center items-center w-full p-4 ">
							<div className="flex flex-col items-center pt-2">
								<FiEye className="text-2xl text-primary pt-1" />
								<p className="text-lg font-semibold text-secondary text-center">
									Reveal your results
								</p>
								<p className="mt-2 text-xs text-gray-500 text-center">
									Invite 3 friends or get FaceLIKE Pro to view your results
								</p>
							</div>
							<div className="flex flex-col items-center pt-4 mb-6">
								<div className="size-32 rounded-full bg-gray-300 mb-4 overflow-hidden">
									<img
										src={boy}
										alt="Facial Analysis"
										className="w-full h-full object-cover rounded-full"
									/>
								</div>
								<p className="text-md font-semibold text-primary text-center">
									Facial Analysis
								</p>
								<p className="text-xs text-gray-500 mt-1">Symmetry: 8.5/10</p>
								<p className="text-xs text-gray-500">Jawline: 7.8/10</p>
								<p className="text-xs text-gray-500">
									Cheekbone Structure: 9.0/10
								</p>
							</div>
							<div className="flex flex-col gap-2 w-full">
								<button onClick={handleProClick} className="btn btn-primary  ">
									Get FaceLIKE Pro
								</button>
								<button
									onClick={handleInviteFriends}
									className="btn btn-secondary  "
								>
									Invite 3 Friends
								</button>
							</div>
						</div>
					</div>
				</div>
				{/* third section */}
				<div className="mockup-phone">
					<div className="camera"></div>
					<div className="display flex flex-col justify-center items-center w-56 border-2 border-white">
						<div className="flex flex-col justify-center items-center w-full p-4 ">
							<h2 className="text-xl font-extrabold text-primary mb-2 text-center">
								Level Up
							</h2>
							<p className="text-sm text-secondary text-center mb-4">
								Proven to help you max your looks
							</p>
							<div className="w-full mb-6">
								<h3 className="text-sm font-semibold text-primary mb-2 text-center">
									Get Your Ratings
								</h3>
								<div className="grid grid-cols-2 gap-2">
									{[
										"Overall",
										"Symmetry",
										"Jawline",
										"Cheekbones",
										"Skin ",
										"Smile",
									].map((item, index) => (
										<div
											key={index}
											className="flex flex-col justify-center items-center border border-gray-300 rounded-lg p-3 bg-base-200 shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
										>
											<p className="font-semibold text-xs text-center text-base-content">
												{item}
											</p>
											<p className="text-xs font-bold text-center text-base-content">
												8.{index + 1}/10
											</p>
											<div className="w-full h-1 bg-gray-300 rounded-full mt-2 overflow-hidden">
												<div
													className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full transition-all duration-300 ease-in-out"
													style={{
														width: `${(8 + index) * 10}%`,
														maxWidth: "100%",
													}}
												/>
											</div>
										</div>
									))}
								</div>
							</div>
							<div className="flex justify-center items-center space-x-2 mb-4">
								<span className="size-1 bg-gray-400 rounded-full"></span>
								<span className="size-1 bg-gray-400 rounded-full"></span>
								<span className="size-1 bg-gray-400 rounded-full"></span>
							</div>
							<p className="text-xs text-gray-500 text-center mb-4">
								1,000,000 scans completed
							</p>
							<button className="btn btn-primary w-full max-w-xs mb-4">
								Unlock Now
							</button>
							<p className="text-center text-md font-semibold text-primary">
								$3.99 per week
							</p>
							<div className="flex justify-between text-xs text-gray-500 mt-4 w-full">
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
		</div>
	);
};

export default OnboardingPage2;
