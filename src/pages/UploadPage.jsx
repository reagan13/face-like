import { useState } from "react";
import Navbar from "../components/Navbar";
import { FiUploadCloud } from "react-icons/fi"; // Icon for upload button
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AnalyzeModal from "../components/AnalyzeModal"; // Import the AnalyzeModal component

const UploadPage = () => {
	const [selectedFile, setSelectedFile] = useState(null);
	const [showModal, setShowModal] = useState(false); // State to control modal visibility
	const navigate = useNavigate();

	const handleFileChange = (event) => {
		setSelectedFile(event.target.files[0]);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (selectedFile) {
			const formData = new FormData();
			formData.append("image", selectedFile); // Only send the image file
			formData.append(
				"face_attributes_type",
				"Age,Beauty,Emotion,Eye,Eyebrow,Gender,Hair,Hat,Headpose,Mask,Mouth,Moustache,Nose,Shape,Skin,Smile"
			);

			try {
				console.log("Analyzing face attributes...");

				const response = await axios.post(
					"https://face-analyzer.p.rapidapi.com/facebody/analysis/detect-face-attributes",
					formData,
					{
						headers: {
							"x-rapidapi-key":
								"645514a5dcmsh181c8475ff0cfb0p18929cjsne9a9b5aece99",
							"x-rapidapi-host": "face-analyzer.p.rapidapi.com",
						},
					}
				);

				console.log("Analysis done", response.data);
				const faceDetails = response.data.face_detail_infos || [];
				const isSuccess =
					response.data.error_code === 0 && faceDetails.length > 0;

				// Show the analyzing modal
				setShowModal(true);

				// Handle success or error
				if (isSuccess) {
					// Navigate after 5 seconds if successful
					setTimeout(() => {
						console.log(
							"Faces detected upload:",
							JSON.stringify(faceDetails, null, 2)
						);
						navigate("/analysis", {
							state: {
								faceDetails,
								uploadedImage: URL.createObjectURL(selectedFile),
							},
						});
					}, 5000); // 5000 milliseconds = 5 seconds
				} else {
					// Handle failure
					setTimeout(() => {
						alert("Uploading failed. Please try again.");
						navigate("/upload");
					}, 20000); // 20000 milliseconds = 20 seconds
				}
			} catch (error) {
				console.error("Error analyzing face attributes:", error);
				// Show modal and handle error
				setShowModal(true);
				setTimeout(() => {
					alert("Uploading failed. Please try again.");
					window.location.reload();
				}, 20000); // 20000 milliseconds = 20 seconds
			}
		} else {
			console.error("No file selected");
		}
	};

	return (
		<div className="flex flex-col items-center justify-center text-center px-6 h-full mt-6">
			<h1 className="text-3xl font-extrabold text-primary drop-shadow-lg">
				Upload Your Photo
			</h1>
			<p className="mt-4 text-md text-secondary max-w-lg">
				Upload a clear photo of your face to receive personalized insights!
			</p>

			{/* File Upload Form */}
			<form className="mt-8 w-full max-w-lg" onSubmit={handleSubmit}>
				{!selectedFile ? (
					<label
						htmlFor="file-upload"
						className="flex flex-col items-center justify-center w-full h-60 border-2 border-dashed border-primary rounded-lg cursor-pointer hover:border-accent transition-colors"
					>
						<FiUploadCloud size={40} className="text-primary mb-4" />
						<span className="text-md text-secondary">
							Drag and drop your file here or click to upload
						</span>
						<input
							id="file-upload"
							type="file"
							className="hidden"
							accept="image/*"
							onChange={handleFileChange}
						/>
					</label>
				) : (
					<div className="flex flex-col items-center">
						<img
							src={URL.createObjectURL(selectedFile)}
							alt="Uploaded Preview"
							className="w-80 h-80 object-cover rounded-lg shadow-lg mb-4"
						/>
						<p className="mt-4 text-secondary">
							Uploaded File: <strong>{selectedFile.name}</strong>
						</p>
					</div>
				)}
				<button
					type="submit"
					className="btn btn-primary mt-6 w-full"
					disabled={!selectedFile}
				>
					Submit Photo
				</button>
			</form>

			{/* Show modal if setShowModal is true */}
			{showModal && <AnalyzeModal />}
		</div>
	);
};

export default UploadPage;
