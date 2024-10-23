import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
	const navigate = useNavigate();

	const handleGetStarted = () => {
		navigate("/home"); // Navigates to the HomePage with the Navbar
	};

	return (
		<div className="bg-base-200  h-screen flex flex-col justify-center items-center">
			<h1 className="text-4xl font-bold text-primary">Welcome to Face Like</h1>
			<p className="mt-4 text-xl text-secondary">Your AI-powered platform!</p>
			<p className="mt-2 text-base text-gray-600">
				Upload your photo and let our AI analyze your facial features, providing
				detailed insights and personalized recommendations.
			</p>
			<button
				onClick={handleGetStarted}
				className="btn btn-primary mt-8 text-lg"
			>
				Get Started
			</button>
		</div>
	);
};

export default WelcomePage;
