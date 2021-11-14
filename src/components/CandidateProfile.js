import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import NotFound from "./NotFound";

function CandidateProfile({ selectFunction }) {
	const { id } = useParams();
	const [candidate, setCandidate] = useState();

	const fetchCandidate = async () => {
		const { data } = await axios.get(
			"https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
		);
		const candidateProfile = data.find((profile) => profile.id === id);
		if (candidateProfile) {
			setCandidate(candidateProfile);
		}
	};

	useEffect(() => {
		fetchCandidate();
	}, []);

	if (candidate) {
		return (
			<div className="profile-section" key={candidate.id}>
				<div className="profile-header">
					<img src={candidate.Image} alt="" className="profile-image" />
				</div>
				<div className="profile-body">
					<h1 className="profile-name">{candidate.name}</h1>
					<p className="profile-details">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
						deserunt nemo impedit qui ipsum nesciunt debitis obcaecati saepe
						veniam pariatur? Laudantium quae cum, modi eum doloribus aliquam
						ducimus, sunt recusandae possimus qui nostrum cupiditate vitae
						debitis dolore omnis dignissimos, eligendi saepe natus eius fuga!
						Aspernatur eaque libero nemo veritatis autem.
					</p>

					<div className="button-section">
						<button
							className="button button-shortlist"
							onClick={() => selectFunction(candidate.id, true)}>
							Shortlist
						</button>
						<button
							className="button button-reject"
							onClick={() => selectFunction(candidate.id, false)}>
							Reject
						</button>
					</div>
				</div>
			</div>
		);
	} else {
		return <NotFound />;
	}
}

export default CandidateProfile;
