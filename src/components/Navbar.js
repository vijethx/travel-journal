import React from "react";
import logo from "../images/logo.png";

export default function Navbar() {
	return (
		<nav>
			<img src={logo} alt="" />
			<h2 className="logo-text">my travel journal.</h2>
		</nav>
	);
}
