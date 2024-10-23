import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import HomePage from "./pages/Homepage";
import UploadPage from "./pages/UploadPage"; // Assuming you have an UploadPhoto page
import AnalysisPage from "./pages/Analysis"; // Assuming you have an Analysis page
import Layout from "./Layout"; // Import the Main component
import OnboardingPage from "./pages/Onboarding";
import OnboardingPage2 from "./onboard/onboard2";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
const App = () => {
	return (
		<Router>
			<Routes>
				{/* Welcome page without Navbar */}
				<Route path="/" element={<WelcomePage />} />

				{/* Main layout with Navbar for HomePage, UploadPage, and AnalysisPage */}
				<Route path="/" element={<Layout />}>
					{/* <Route path="/" element={<OnboardingPage />} /> */}
					<Route path="home" element={<HomePage />} />
					<Route path="features" element={<OnboardingPage2 />} />
					<Route path="upload" element={<UploadPage />} />
					<Route path="analysis" element={<AnalysisPage />} />
					<Route path="about" element={<AboutUs />} />
					<Route path="contact" element={<ContactUs />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
