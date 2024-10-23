import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner"; // Loader spinner

const AnalyzeModal = ({ faceDetails, selectedFile }) => {
	const navigate = useNavigate();

	useEffect(() => {
		// Redirect after 5 seconds
		const timer = setTimeout(() => {
			navigate("/analysis", {
				state: {
					faceDetails,
					uploadedImage: URL.createObjectURL(selectedFile),
				},
			});
		}, 5000); // 5000 milliseconds = 5 seconds

		// Clean up the timer when the component unmounts
		return () => clearTimeout(timer);
	}, [navigate, faceDetails, selectedFile]);

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div className="bg-base-100 p-8 rounded-lg shadow-lg text-center flex flex-col items-center">
				<TailSpin
					height="80"
					width="80"
					color="#3b82f6" // Tailwind blue-500
					ariaLabel="loading"
				/>
				<h2 className="text-2xl font-bold text-primary mt-4">Analyzing...</h2>
				<p className="text-lg text-secondary mt-2">
					Please wait while we analyze your facial features.
				</p>
			</div>
		</div>
	);
};

export default AnalyzeModal;
