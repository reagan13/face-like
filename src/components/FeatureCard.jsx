import PropTypes from "prop-types";
import { FaSmileBeam, FaShapes, FaEye, FaRegEye } from "react-icons/fa";
import { IoBody } from "react-icons/io5";
import { GiLips, GiNoseFront } from "react-icons/gi";
import { TbMoustache } from "react-icons/tb";
import { PiHeadCircuit } from "react-icons/pi";
import { RiEmotionFill } from "react-icons/ri";
import { SlEyeglass } from "react-icons/sl";
import { RxEyeOpen } from "react-icons/rx";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { FaMaskFace } from "react-icons/fa6";

const FeatureCard = ({ feature, description, probability }) => {
	// Convert the probability (0 to 1) to a percentage (0% to 100%)
	const percentage =
		probability !== undefined ? Math.round(probability * 100) : null;

	return (
		<div className="bg-white shadow-md rounded-lg p-4 mb-2 flex flex-col justify-between">
			<div className="flex items-center">
				<h4 className="text-sm font-bold text-primary capitalize ml-2">
					{feature}
				</h4>
			</div>
			<p className="text-xs text-secondary truncate">{description}</p>

			{/* Conditionally render the progress bar only if probability exists */}
			{percentage !== null && (
				<div className="mt-2">
					<div
						className="h-2 rounded-full"
						style={{
							width: `${percentage}%`,
							backgroundColor:
								percentage >= 75
									? "green" // Green for 75% and above
									: percentage >= 60
									? "yellow" // Yellow for 60% to 74%
									: percentage >= 40
									? "orange" // Orange for 40% to 59%
									: "red", // Red for below 40%
						}}
					></div>
					<p className="text-xs mt-1 text-primary">{percentage}%</p>
				</div>
			)}
		</div>
	);
};

FeatureCard.propTypes = {
	feature: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	probability: PropTypes.number, // Probability passed from 0 to 1
};

export default FeatureCard;
