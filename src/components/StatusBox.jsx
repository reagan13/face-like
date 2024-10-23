import PropTypes from "prop-types";

const StatusBox = ({ title, percentage, color, onClick }) => {
	return (
		<div
			className={`bg-white shadow-md rounded-lg flex flex-col justify-between items-center p-4 size-32 mb-2 cursor-pointer`}
			onClick={onClick} // Added onClick handler
		>
			<h3 className="text-lg font-bold text-primary text-center">{title}</h3>
			<span className="text-sm text-secondary">{percentage}%</span>
			<div className="relative w-full h-2 bg-gray-200 rounded-full ml-1">
				<div
					className={`absolute h-full ${color} transition-all`}
					style={{ width: `${percentage}%` }}
				/>
			</div>
		</div>
	);
};

export default StatusBox;
StatusBox.propTypes = {
	title: PropTypes.string.isRequired,
	percentage: PropTypes.number.isRequired,
	color: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired, // Added onClick prop type
};
