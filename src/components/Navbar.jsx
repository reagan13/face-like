import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
	return (
		<div className="flex px-5">
			<div className="flex-1">
				<Link
					to="/"
					className="btn btn-ghost normal-case text-lg lg:text-xl text-primary"
				>
					Face Like
				</Link>
			</div>
			<div className="flex flex-none items-center">
				<ul className="menu menu-horizontal px-1 space-x-2 lg:space-x-4">
					<li>
						<Link to="/home" className="text-secondary hover:text-primary">
							Home
						</Link>
					</li>
					<li>
						<Link to="/features" className="text-secondary hover:text-primary">
							Features
						</Link>
					</li>
					<li>
						<Link to="/about" className="text-secondary hover:text-primary">
							About Us
						</Link>
					</li>
					<li>
						<Link to="/contact" className="text-secondary hover:text-primary">
							Contact
						</Link>
					</li>
				</ul>
				{/* Get Started Button */}
				<Link to="/home" className="btn btn-primary ml-2 lg:ml-4 btn-sm">
					Get Started
				</Link>
			</div>
		</div>
		// <div className="navbar bg-base-100 shadow-lg px-4 lg:px-8 border-white border-2">
		// 	{/* Left Side (Logo) */}
		// 	<div className="flex-1 border-white border-2">
		// 		<Link
		// 			to="/"
		// 			className="btn btn-ghost normal-case text-lg lg:text-xl text-primary"
		// 		>
		// 			Face Like
		// 		</Link>
		// 	</div>

		// 	{/* Right Side (Desktop Menu & Mobile Menu) */}
		// 	<div className="flex-none border-2 border-white">
		// 		{/* Desktop Navigation */}
		// 		<div className="hidden lg:flex">
		// 			<ul className="menu menu-horizontal px-1 space-x-2 lg:space-x-4">
		// 				<li>
		// 					<Link to="/home" className="text-secondary hover:text-primary">
		// 						Home
		// 					</Link>
		// 				</li>
		// 				<li>
		// 					<Link
		// 						to="/features"
		// 						className="text-secondary hover:text-primary"
		// 					>
		// 						Features
		// 					</Link>
		// 				</li>
		// 				<li>
		// 					<Link to="/about" className="text-secondary hover:text-primary">
		// 						About Us
		// 					</Link>
		// 				</li>
		// 				<li>
		// 					<Link to="/contact" className="text-secondary hover:text-primary">
		// 						Contact
		// 					</Link>
		// 				</li>
		// 			</ul>
		// 		</div>

		// 		{/* Mobile Dropdown */}
		// 		<div className="dropdown dropdown-end lg:hidden">
		// 			<label tabIndex={0} className="btn btn-ghost">
		// 				<svg
		// 					xmlns="http://www.w3.org/2000/svg"
		// 					className="h-4 w-4"
		// 					fill="none"
		// 					viewBox="0 0 24 24"
		// 					stroke="currentColor"
		// 				>
		// 					<path
		// 						strokeLinecap="round"
		// 						strokeLinejoin="round"
		// 						strokeWidth="2"
		// 						d="M4 6h16M4 12h16m-7 6h7"
		// 					/>
		// 				</svg>
		// 			</label>
		// 			<ul
		// 				tabIndex={0}
		// 				className="menu menu-compact dropdown-content mt-2 p-2 shadow bg-base-100 rounded-box w-40"
		// 			>
		// 				<li>
		// 					<Link to="/home" className="text-secondary">
		// 						Home
		// 					</Link>
		// 				</li>
		// 				<li>
		// 					<Link to="/features" className="text-secondary">
		// 						Features
		// 					</Link>
		// 				</li>
		// 				<li>
		// 					<Link to="/about" className="text-secondary">
		// 						About Us
		// 					</Link>
		// 				</li>
		// 				<li>
		// 					<Link to="/contact" className="text-secondary">
		// 						Contact
		// 					</Link>
		// 				</li>
		// 			</ul>
		// 		</div>

		// 		{/* Get Started Button */}
		// 		<Link to="/home" className="btn btn-primary ml-2 lg:ml-4 btn-sm">
		// 			Get Started
		// 		</Link>
		// 	</div>
		// </div>
	);
};

export default Navbar;
