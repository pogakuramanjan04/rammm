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
		    {/* <Routes> */}
				<h1 style={{display: "inline"}}>Hello Style!</h1>
				
                {/* <Route path="/" element={ <home/> } />
                <Route path="/home" element={ <H /> } /> */}
                {/* <Route path="/ASTE-527-HOME-ARCHIEVE" element={ <A/> } />
				<Route path="/PRESENTATION-VIDEOS" element={ <P /> } />
                <Route path="/ISDC 2018 SLIDES" element={ <I/> } />
				<Route path="/ISDC 2019 SLIDES" element={ <I2 /> } />
                <Route path="/Veniece-Biennale-2021" element={ <V/> } /> */}
            {/* </Routes> */}
			 </BrowserRouter>
			
		</div>
	);
}

export default App;
