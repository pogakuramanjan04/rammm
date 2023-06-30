import React, { useState } from "react";

import ReactDOM from 'react-dom';
import { Router, Route,  browserHistory, IndexRoute } from 'react-router'
import { Link } from "react-router-dom";
import "./SideNavBar.css";

const SideNavBar = () => {
	const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
		{
			text: "ASTE 527 HOME",
			path:"home",
			// icon: "icons/grid.svg",
		},
		
		{
			text: "ASTE 527 HOME ARCHIEVE",
			path:"ASTE-527-HOME-ARCHIEVE",
			// icon: "icons/user.svg",
		},
		{
			text: "PRESENTATION VIDEOS",
			path:"PRESENTATION-VIDEOS",
			// icon: "icons/message.svg",
		},
		{
			text: "ISDC 2018 SLIDES",
			path:"ISDC-2018-SLIDES",
			// icon: "icons/pie-chart.svg",
		},
		{
			text: "ISDC 2019 SLIDES",
			path:"ISDC-2019-SLIDES",
			// icon: "icons/folder.svg",
		},
		{
			text: "Veniece Biennale 2021",
			path:"Veniece-Biennale-2021",
			// icon: "icons/shopping-cart.svg",
		},
		{
			text: "AIAA",
			path:"AIAA"
			// icon: "icons/heart.svg",
		},
		
	];
	return (

    <div className="r">

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
							<img src="https://res.cloudinary.com/dbie5v8ke/image/upload/v1688054331/samples/Formal_Viterbi_CardOnWhite_z5jpus.jpg" alt="" srcset="" />
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
					{menuItems.map(({ text, icon,path }) => (
						
						<Link to={`${path}`}
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
							
						>
							<img className="menu-item-icon" src={icon} alt="" srcset="" />
							{isExpanded && <p>{text}</p>}
						</Link>
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

    </div>


	);
};

export default SideNavBar;
