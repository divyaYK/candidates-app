import React from "react";
import { Link } from "react-router-dom";

function Candidate({ cname, ckey, cimg }) {
	return (
		<Link className="card" key={ckey} to={`/${ckey}`}>
			<div className="card-header">
				<img src={cimg} alt="" className="card-img" />
			</div>
			<div className="card-body">
				<h3 className="card-name">{cname}</h3>
			</div>
		</Link>
	);
}

export default Candidate;
