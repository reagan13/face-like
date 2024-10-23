import { useLocation, useNavigate } from "react-router-dom";
import FeatureCard from "../components/FeatureCard";
import FacialAnalysis from "../sections/FacialAnalysis";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
const AnalysisPage = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { faceDetails, uploadedImage } = location.state || {};
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => setIsModalOpen(true);
	const handleCloseModal = () => setIsModalOpen(false);
	useEffect(() => {
		if (!faceDetails) {
			navigate("/upload"); // Adjust the path according to your route
		}
	}, [faceDetails, navigate]);
	// const { faceDetails } = location.state || {
	// 	face_details: [
	// 		{
	// 			face_rect: {
	// 				y: 123,
	// 				width: 146,
	// 				height: 192,
	// 				x: 221,
	// 			},
	// 			face_detail_attributes_info: {
	// 				mask: {
	// 					probability: 0.9039223,
	// 					type: 0,
	// 				},
	// 				smile: {
	// 					value: 82,
	// 				},
	// 				shape: {
	// 					type: 4,
	// 					probability: 0.5111454,
	// 				},
	// 				skin: {
	// 					type: 1,
	// 					probability: 0.7626303,
	// 				},
	// 				mouth: {
	// 					mouth_open: {
	// 						type: 1,
	// 						probability: 0.85270464,
	// 					},
	// 				},
	// 				moustache: {
	// 					type: 0,
	// 					probability: 0.99841845,
	// 				},
	// 				head_pose: {
	// 					pitch: 5,
	// 					yaw: 3,
	// 					roll: -3,
	// 				},
	// 				nose: {
	// 					type: 2,
	// 					probability: 0.5969668,
	// 				},
	// 				emotion: {
	// 					type: 1,
	// 					probability: 0.9999988,
	// 				},
	// 				eye: {
	// 					glass: {
	// 						type: 0,
	// 						probability: 0.99934024,
	// 					},
	// 					eye_open: {
	// 						type: 0,
	// 						probability: 0.9996189,
	// 					},
	// 					eyelid_type: {
	// 						type: 1,
	// 						probability: 0.669022,
	// 					},
	// 					eye_size: {
	// 						type: 1,
	// 						probability: 0.45427477,
	// 					},
	// 				},
	// 				eyebrow: {
	// 					eyebrow_length: {
	// 						type: 1,
	// 						probability: 0.675679,
	// 					},
	// 					eyebrow_density: {
	// 						type: 0,
	// 						probability: 0.5271881,
	// 					},
	// 					eyebrow_curve: {
	// 						type: 0,
	// 						probability: 0.63670504,
	// 					},
	// 				},
	// 				gender: {
	// 					type: 0,
	// 					probability: 0.99711955,
	// 				},
	// 				hair: {
	// 					length: {
	// 						type: 1,
	// 						probability: 0.92674965,
	// 					},
	// 					bang: {
	// 						type: 0,
	// 						probability: 0.9987853,
	// 					},
	// 					color: {
	// 						type: 1,
	// 						probability: 0.94355357,
	// 					},
	// 				},
	// 				hat: {
	// 					color: {
	// 						type: 5,
	// 						probability: 0.6394936,
	// 					},
	// 					style: {
	// 						type: 2,
	// 						probability: 0.73505944,
	// 					},
	// 				},
	// 				age: 5,
	// 				beauty: 74,
	// 			},
	// 		},
	// 	],
	// }; // Default to an empty object if state is undefined
	// Static data for analysis results
	const analysisResult = {
		facialFeatures: {
			canthalTilt: { description: "Neutral" },
			eyeShape: { description: "Almond eyes" },
			eyeType: { description: "Hunter" },
			faceShape: { description: "Heart" },
			maxillaDevelopment: { description: "Neutral" },
			noseShape: { description: "Roman or Aquiline nose" },
			foreheadWidth: { description: "Moderate" },
			cheekboneStructure: { description: "Prominent" },
			lipShape: { description: "Full" },
			chinShape: { description: "Square" },
			skinTone: { description: "Fair" },
		},
		facialAnalysis: {
			overall: 80,
			potential: 87,
			jawline: { value: 82 },
			cheekbone: { value: 90 },
			skinQuality: { value: 85 },
			masculinity: { value: 75 },
			eyeSymmetry: { value: 88 },
			eyebrowThickness: { value: 70 },
			foreheadProportion: { value: 78 },
		},
	};
	const face = location.state.faceDetails[0].face_detail_attributes_info;
	const age = face.age;
	const beauty = face.beauty;
	const smile = face.smile;

	const gender = face.gender; // type.gender
	const emotion = face.emotion;
	const { eye_open, eye_size, eyelid_type, glass } = face.eye;
	const { eyebrow_curve, eyebrow_density, eyebrow_length } = face.eyebrow;
	const { bang, color, length } = face.hair;
	const { hairColor, style } = face.hat;
	const { pitch, roll, yaw } = face.head_pose;
	const mask = face.mask;
	const mustache = face.moustache;
	const mouth_open = face.mouth.mouth_open;
	const nose = face.nose;
	const shape = face.shape;
	const skin = face.skin;
	const faceAttributes = [
		{ name: "gender", value: gender },
		{ name: "emotion", value: emotion },
		{ name: "eye_open", value: eye_open },
		{ name: "eye_size", value: eye_size },
		{ name: "eyelid_type", value: eyelid_type },
		{ name: "glass", value: glass },
		{ name: "eyebrow_curve", value: eyebrow_curve },
		{ name: "eyebrow_density", value: eyebrow_density },
		{ name: "eyebrow_length", value: eyebrow_length },
		{ name: "bang", value: bang },
		{ name: "color", value: color },
		{ name: "length", value: length },
		{ name: "style", value: style },
		{ name: "mask", value: mask },
		{ name: "moustache", value: mustache },
		{ name: "mouth_open", value: mouth_open },
		{ name: "nose", value: nose },
		{ name: "shape", value: shape },
		{ name: "skin", value: skin },
	];

	console.log(faceAttributes);

	const getDescription = (type, featureName) => {
		switch (featureName) {
			case "gender":
				return type === 0 ? "Male" : "Female";
			case "eye_open":
				return type === 0 ? "Yes" : "No";
			case "eye_size":
				return type === 0
					? "Small eyes"
					: type === 1
					? "Average eyes"
					: "Large eyes";
			case "eyelid_type":
				return type === 0
					? "No distinct eyelid"
					: type === 1
					? "Standard eyelid"
					: type === 2
					? "Double eyelid"
					: type === 3
					? "Hooded eyelid"
					: "Other type";
			case "glass":
				return type === 0 ? "No glasses" : "Glasses present";
			case "eyebrow_density":
				return type === 0
					? "Sparse eyebrows"
					: type === 1
					? "Moderate eyebrows"
					: "Dense eyebrows";
			case "eyebrow_curve":
				return type === 0
					? "Straight eyebrows"
					: type === 1
					? "Arched eyebrows"
					: type === 2
					? "Rounded eyebrows"
					: "Other shape";
			case "eyebrow_length":
				return type === 0
					? "Short eyebrows"
					: type === 1
					? "Medium eyebrows"
					: "Long eyebrows";
			case "bang":
				return type === 0 ? "No bangs" : "Bangs present";
			case "color":
				return type === 0
					? "black"
					: type === 1
					? "Brown"
					: type === 2
					? "Blonde"
					: "Red";
			case "length":
				switch (type) {
					case 0:
						return "Short hair";
					case 1:
						return "Long hair";
					case 2:
						return "Medium hair";
					case 3:
						return "Very short hair";
					case 4:
						return "Very long hair";
					default:
						return "Unknown hair length";
				}
			case "mouth_open":
				return type === 0 ? "Mouth closed" : "Mouth open";
			case "moustache":
				return type === 0 ? "No moustache" : "Moustache present";
			case "skin":
				return type === 0
					? "Very light skin"
					: type === 1
					? "Light skin"
					: type === 2
					? "Medium skin"
					: "Dark skin";
			case "emotion":
				switch (type) {
					case 0:
						return "Sad";
					case 1:
						return "Happy";
					case 2:
						return "Angry";
					case 3:
						return "Surprised";
					case 4:
						return "Neutral";
					default:
						return "Unknown emotion";
				}
			default:
				return "empty";
		}
	};
	// const gender = faceDetails[0].face_detail_attributes
	const filteredAttributes = faceAttributes.filter(({ name }) =>
		[
			"gender",
			"glass",
			"bang",
			"color",
			"eye_size",
			"skin",
			"length",
			"mustache",
			"emotion",
		].includes(name)
	);
	return (
		<div className="bg-base-200 relative h-full mt-10 ">
			{/* First Section: Uploaded Image and Facial Features */}
			<div className="flex flex-col md:flex-row w-full items-center justify-center h-full   ">
				{/* Uploaded Image Section */}
				<div className="flex justify-center mb-4 md:w-1/2">
					{uploadedImage ? (
						<div className="flex flex-col items-center">
							<img
								src={uploadedImage}
								alt="Uploaded"
								className="size-96 object-cover rounded-lg shadow-lg"
							/>
							<div className="mt-2 text-center">
								{/* Assuming age and beauty values are stored in state or props */}
								<p className="text-lg text-secondary">Age: {age}</p>
								<p className="text-lg text-secondary">Beauty: {beauty} %</p>
								<p className="text-lg text-secondary">Smile: {smile} %</p>
							</div>
						</div>
					) : (
						<p className="text-lg text-secondary">No image uploaded.</p>
					)}
				</div>

				{/* Facial Features Section */}
				<div className="grid grid-cols-3 gap-4 text-center">
					{faceDetails &&
						filteredAttributes.map(({ name, value }) => {
							const type = value?.type !== undefined ? value.type : null;
							const description = getDescription(type, name);

							if (type === null || description === "empty") return null;

							return (
								<FeatureCard
									key={name}
									feature={name.replace(/([A-Z])/g, " ")}
									description={description}
								/>
							);
						})}
					<div onClick={handleOpenModal}>
						<FeatureCard feature={"See More"} description={">>>"} />
					</div>
				</div>
				{/* Modal Component */}
				<Modal isOpen={isModalOpen} onClose={handleCloseModal}>
					<div className="grid grid-cols-5 gap-4 text-center">
						{faceAttributes.map(({ name, value }) => {
							const type = value?.type !== undefined ? value.type : null;
							const description = getDescription(type, name);

							if (type === null || description === "empty") return null;

							return (
								<FeatureCard
									key={name}
									feature={name.replace(/([A-Z])/g, " ")}
									description={description}
									probability={value.probability}
								/>
							);
						})}
					</div>
				</Modal>
			</div>
			{/* Second Section: Facial Analysis */}
			<FacialAnalysis analysisResult={analysisResult} />
		</div>
	);
};

export default AnalysisPage;
