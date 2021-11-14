import React from "react";

import { NavLink } from "react-router-dom";

function Navigation() {
	return (
		<div>
			<nav className="navigation-block">
				<ul className="nav-links">
					<li className="nav-item">
						<NavLink activeClassName="active" to="/" className="nav-link">
							All
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							activeClassName="active"
							to="/shortlisted"
							className="nav-link">
							Shortlisted
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							activeClassName="active"
							to="/rejected"
							className="nav-link">
							Rejected
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navigation;
