import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Warm from "./Warm";
import Cards from "./Cards";
import Middle from "./Middle";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
            <NavBar />
			<h1 className="text-center mt-5"><Warm/></h1>
			<h4>
			<Cards/>
			</h4>

			<Middle/>
			<Footer/>
		</div>
	);
};

export default Home;