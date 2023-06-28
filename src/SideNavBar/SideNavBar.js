import React, { useState } from "react";

import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import "./SideNavBar.css";

const SideNavBar = () => {
	const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
		{
			text: "ASTE 527 HOME",
			// icon: "icons/grid.svg",
		},
		
		{
			text: "ASTE 527 HOME ARCHIEVE",
			// icon: "icons/user.svg",
		},
		{
			text: "PRESENTATION VIDEOS",
			// icon: "icons/message.svg",
		},
		{
			text: "ISDC 2018 SLIDES",
			// icon: "icons/pie-chart.svg",
		},
		{
			text: "ISDC 2019 SLIDES",
			// icon: "icons/folder.svg",
		},
		{
			text: "Veniece Biennale 2021",
			// icon: "icons/shopping-cart.svg",
		},
		{
			text: "AIAA",
			// icon: "icons/heart.svg",
		},
		
	];
	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">

					{/* here company logo below company logo*/}
					{isExpanded && (
						<div className="nav-brand">
							<img src="https://lh6.googleusercontent.com/xScTBrtgpH7yyMiqKo8coYUSg_dFEgcpSL0Z6tHM_o7nHWrrLmcnqvSpImn4T8Ck3FzxRabRQUCBXp5wQQoHBbA=w16383" alt="" srcset="" />
							{/* <h2>Showkart</h2> */}
						</div>
					)}
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-menu">
					{menuItems.map(({ text, icon }) => (
						<a to="/sdn/"
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
							href="#"
						>
							<img className="menu-item-icon" src={icon} alt="" srcset="" />
							{isExpanded && <p>{text}</p>}
						</a>
					))}


				</div>
			</div>
			<div className="nav-footer">
				{isExpanded && (
					<div className="nav-details">
						<img
							className="nav-footer-avatar"
							// src="icons/admin-avatar.svg"
							alt=""
							srcset=""
						/>
						<div className="nav-footer-info">
							{/* <p className="nav-footer-user-name">M Showkat</p>
							<p className="nav-footer-user-position">store admin</p> */}
						</div>
					</div>
				)}
				{/* <img className="logout-icon" src="icons/logout.svg" alt="" srcset="" /> */}
			</div>
		</div>
	);
};

export default SideNavBar;
