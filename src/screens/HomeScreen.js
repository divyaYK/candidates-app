import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Candidates from "../components/Candidates";
import Navigation from "../components/Navigation";
import CandidateProfile from "../components/CandidateProfile";
import NotFound from "../components/NotFound";
import Shortlist from "../components/Shortlist";
import Rejected from "../components/Rejected";

function HomeScreen() {
	let shortlisted = [];
	let rejected = [];

	const handleSelection = (id, status) => {
		if (status) {
			shortlisted.push(id);
		} else {
			rejected.push(id);
		}
	};
	return (
		<Router>
			<section className="home-section">
				<Navigation />
				<Routes>
					<Route path="/" exact element={<Candidates />} />
					<Route
						path="/shortlisted"
						exact
						element={<Shortlist shortlisted={shortlisted} />}
					/>
					<Route
						path="/rejected"
						exact
						element={<Rejected rejected={rejected} />}
					/>
					<Route
						path="/:id"
						exact
						element={<CandidateProfile selectFunction={handleSelection} />}
					/>
					<Route path="*" exact element={<NotFound />} />
				</Routes>
			</section>
		</Router>
	);
}

export default HomeScreen;
