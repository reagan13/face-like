import StatusBox from "../components/StatusBox";
import { useState } from "react";
import PropTypes from "prop-types";

const FacialAnalysis = ({ analysisResult }) => {
	const [selectedFeature, setSelectedFeature] = useState(""); // State to track the selected feature
	const [recommendation, setRecommendation] = useState(""); // State to track the recommendation

	// Function to handle StatusBox click
	const handleStatusBoxClick = (feature, recommendation) => {
		setSelectedFeature(feature);
		setRecommendation(recommendation);
	};

	return (
		<div className="bg-base-300 relative py-10 h-full">
			<h1 className="text-4xl font-extrabold text-primary mb-4 text-center pb-10">
				Facial Analysis
			</h1>
			<div className="flex">
				<div className="flex flex-col gap-10 items-start w-1/2 p-5">
					<div className="grid grid-cols-4 gap-10">
						<StatusBox
							title="Overall"
							percentage={analysisResult.facialAnalysis.overall}
							color="bg-green-500"
							onClick={() =>
								handleStatusBoxClick(
									"Overall: Your facial structure exhibits excellent balance and symmetry.",
									"Recommendation: \n" +
										"- Maintain a healthy skincare routine. \n" +
										"- Consider styles that highlight your facial features. \n" +
										"- Stay hydrated for optimal skin quality."
								)
							}
						/>

						<StatusBox
							title="Potential"
							percentage={analysisResult.facialAnalysis.potential}
							color="bg-yellow-500"
							onClick={() =>
								handleStatusBoxClick(
									"Potential: While your features are already quite strong, there are opportunities for enhancement.",
									"Recommendation: \n" +
										"- Focus on refining certain aspects of your grooming. \n" +
										"- Explore different hairstyles to complement your face shape. \n" +
										"- Consider professional skincare treatments."
								)
							}
						/>

						<StatusBox
							title="Jawline"
							percentage={analysisResult.facialAnalysis.jawline.value}
							color="bg-green-500"
							onClick={() =>
								handleStatusBoxClick(
									"Jawline: Your jawline is well-defined, which adds a strong and attractive element to your face.",
									"Recommendation: \n" +
										"- Regularly perform jaw exercises to maintain definition. \n" +
										"- Consider styles that emphasize your jawline, like shorter haircuts. \n" +
										"- Keep facial hair groomed to enhance your jawline's appearance."
								)
							}
						/>

						<StatusBox
							title="Cheekbone"
							percentage={analysisResult.facialAnalysis.cheekbone.value}
							color="bg-green-500"
							onClick={() =>
								handleStatusBoxClick(
									"Cheekbone: Prominent cheekbones enhance your facial structure and provide a beautiful contour.",
									"Recommendation: \n" +
										"- Use makeup techniques like highlighting to accentuate cheekbones. \n" +
										"- Explore hairstyles that frame your face. \n" +
										"- Maintain a healthy diet to support overall skin health."
								)
							}
						/>

						<StatusBox
							title="Skin Quality"
							percentage={analysisResult.facialAnalysis.skinQuality.value}
							color="bg-green-500"
							onClick={() =>
								handleStatusBoxClick(
									"Skin Quality: Your skin appears healthy and radiant, which suggests good skincare practices.",
									"Recommendation: \n" +
										"- Continue your current skincare routine. \n" +
										"- Use sunscreen to protect your skin from UV damage. \n" +
										"- Consider adding serums for extra hydration and glow."
								)
							}
						/>

						<StatusBox
							title="Masculinity"
							percentage={analysisResult.facialAnalysis.masculinity.value}
							color="bg-yellow-500"
							onClick={() =>
								handleStatusBoxClick(
									"Masculinity: Your features convey a strong masculine presence that enhances your attractiveness.",
									"Recommendation: \n" +
										"- Choose styles that complement your masculine features. \n" +
										"- Maintain facial hair to enhance your jawline. \n" +
										"- Consider grooming products that define your features."
								)
							}
						/>

						<StatusBox
							title="Eye Symmetry"
							percentage={analysisResult.facialAnalysis.eyeSymmetry.value}
							color="bg-green-500"
							onClick={() =>
								handleStatusBoxClick(
									"Eye Symmetry: The symmetry of your eyes contributes positively to your facial harmony.",
									"Recommendation: \n" +
										"- Use makeup to further enhance eye symmetry. \n" +
										"- Explore eyebrow shaping to complement your eye shape. \n" +
										"- Maintain good eye hygiene for overall health."
								)
							}
						/>

						<StatusBox
							title="Eyebrow Thickness"
							percentage={analysisResult.facialAnalysis.eyebrowThickness.value}
							color="bg-green-500"
							onClick={() =>
								handleStatusBoxClick(
									"Eyebrow Thickness: Your eyebrows are well-defined and frame your face beautifully.",
									"Recommendation: \n" +
										"- Consider regular grooming to maintain shape and thickness. \n" +
										"- Use eyebrow products to fill in any sparse areas. \n" +
										"- Experiment with different eyebrow styles to see what suits you best."
								)
							}
						/>

						<StatusBox
							title="Forehead Proportion"
							percentage={
								analysisResult.facialAnalysis.foreheadProportion.value
							}
							color="bg-green-500"
							onClick={() =>
								handleStatusBoxClick(
									"Forehead Proportion: The proportions of your forehead are balanced, contributing to your overall facial aesthetics.",
									"Recommendation: \n" +
										"- Consider hairstyles that complement your forehead shape. \n" +
										"- Use makeup to draw attention to your eyes. \n" +
										"- Keep your hair groomed to enhance your features."
								)
							}
						/>
					</div>
				</div>

				{/* Right Section for Displaying Selected Feature Information */}
				<div className="w-1/2 p-5 flex flex-col justify-center items-center">
					<h2 className="text-2xl font-bold text-primary mb-4">
						Feature Information
					</h2>
					<p className="text-lg text-secondary text-center">
						{selectedFeature || "Click a status box to see the details."}
					</p>
					<p className="text-lg text-secondary text-center mt-4">
						{recommendation}
					</p>
				</div>
			</div>
		</div>
	);
};

FacialAnalysis.propTypes = {
	analysisResult: PropTypes.shape({
		facialAnalysis: PropTypes.shape({
			overall: PropTypes.number.isRequired,
			potential: PropTypes.number.isRequired,
			jawline: PropTypes.shape({
				value: PropTypes.number.isRequired,
			}).isRequired,
			cheekbone: PropTypes.shape({
				value: PropTypes.number.isRequired,
			}).isRequired,
			skinQuality: PropTypes.shape({
				value: PropTypes.number.isRequired,
			}).isRequired,
			masculinity: PropTypes.shape({
				value: PropTypes.number.isRequired,
			}).isRequired,
			eyeSymmetry: PropTypes.shape({
				value: PropTypes.number.isRequired,
			}).isRequired,
			eyebrowThickness: PropTypes.shape({
				value: PropTypes.number.isRequired,
			}).isRequired,
			foreheadProportion: PropTypes.shape({
				value: PropTypes.number.isRequired,
			}).isRequired,
		}).isRequired,
	}).isRequired,
};

export default FacialAnalysis;
