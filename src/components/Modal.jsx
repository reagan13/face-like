import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-10 bg-black bg-opacity-50 flex items-center justify-center">
			<div className="bg-base-200 p-5 rounded shadow-lg border-2 border-white">
				<div className="text-center">{children}</div>
				<button className="btn btn-primary my-3 w-full" onClick={onClose}>
					Close
				</button>
			</div>
		</div>
	);
};

export default Modal;
