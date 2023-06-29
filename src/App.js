import SideNavBar from "./SideNavBar/SideNavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import H from "./h";
import A from "./a";
import P from "./p";
import I from "./I";
import I2 from "./I2";
import V from "./V";
import AI from "./AI"
import React, { useState } from "react";
import ReactDOM from 'react-dom';
import "../src/app1.css"
// import { BrowserRouter } from "react-router-dom";
import { Router, Routes,Route,  browserHistory,BrowserRouter } from "react-router-dom";

function App() {
	return (
		<div className="ap">
			 <BrowserRouter>
			 
			    <SideNavBar />
		    {/* <Routes> */}
				{/* <h1 style={{display: "inline"}}>Hello Style!</h1> */}
				 <Routes>
                {/* {/* <Route path="/" element={ <home/> } /> */}
                <Route path="/home" element={ <I2 /> } /> 
                <Route path="/ASTE-527-HOME-ARCHIEVE" element={ <A/> } />
				<Route path="/PRESENTATION-VIDEOS" element={ <P /> } />
                <Route path="/ISDC-2018-SLIDES" element={ <I/> } />
				<Route path="/ISDC-2019-SLIDES" element={ <I2 /> } />
                <Route path="/Veniece-Biennale-2021" element={ <V/> } />
				<Route path="/AIAA" element={ <AI/> } />
            </Routes>
			 </BrowserRouter>
			
		</div>
	);
}

export default App;
