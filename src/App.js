import SideNavBar from "./SideNavBar/SideNavBar";
import React, { useState } from "react";
import ReactDOM from 'react-dom';
// import { BrowserRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<div>
			 <BrowserRouter>
			 <SideNavBar />
			 </BrowserRouter>
			
		</div>
	);
}

export default App;
