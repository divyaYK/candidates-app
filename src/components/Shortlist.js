import React, { useState, useEffect } from "react";
import axios from "axios";
import Candidate from "./Candidate";

function Shortlist(props) {
	let [candidates, setCandidates] = useState([]);
	let candidateCards = [];

	useEffect(() => {
		async function fetchCandidates() {
			const { data } = await axios.get(
				"https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
			);
			setCandidates(data);
		}
		fetchCandidates();
	}, [candidates]);

	if (candidates.length > 0) {
		candidates.map((candidate) => {
			if (props.shortlisted.includes(candidate.id)) {
				candidateCards.push(
					<Candidate
						key={candidate.id}
						cname={candidate.name}
						ckey={candidate.id}
						cimg={candidate.Image}
					/>
				);
			}
		});
	}
	return <section className="candidates-section">{candidateCards}</section>;
}

export default Shortlist;
