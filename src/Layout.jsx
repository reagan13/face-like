import React from "react";
import Navbar from "./components/Navbar"; // Adjust the path based on your project structure
import { Outlet } from "react-router-dom"; // Import Outlet

const Layout = () => {
	return (
		<div className="bg-base-200 h-full ">
			{/* Navbar */}
			<Navbar />

			{/* Main content area with proper height management */}
			<div className="flex-grow">
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
