import React, { Component } from "react";
import "../css/Cities.css";
import Heading from "./Heading";

class Cities extends Component {
	state = {
		heading: `WE'RE CURRENTLY IN THESE CITIES`,
		cityName: ["lisbon", "san francisco", "berlin", "london"],
		eatersInCity: [1600, 3700, 2300, 1200],
		chefsInCity: [60, 160, 110, 50],
		hashTag: [
			"@omnifood_lx",
			"@omnifood_sf",
			" @omnifood_berlin",
			"@omnifood_london"
		],
		cityImgURL: [
			require("../img/lisbon-3.jpg"),
			require("../img/san-francisco.jpg"),
			require("../img/berlin.jpg"),
			require("../img/london.jpg")
		]
	};

	render() {
		const arr = [1, 2, 3, 4];

		const cities = arr.map((el, index) => {
			return (
				<div className="col-md-3 mb-5">
					<div className="">
						<img
							className="img-fluid"
							src={this.state.cityImgURL[index]}
							alt=""
						></img>
					</div>
					<div className="text-left font-weight-light">
						<h2 className=" text-uppercase pt-1 font-weight-light">
							{this.state.cityName[index]}
						</h2>
						<p>
							<i class="fas fa-users"></i>
							<span className="pl-2 lead">
								{this.state.eatersInCity[index]}+ happy eaters
							</span>
						</p>
						<p>
							<i class="fas fa-star"></i>
							<span className="pl-2 lead">
								{this.state.chefsInCity[index]}+ top chefs{" "}
							</span>
						</p>
						<a href="#">
							<i class="fab fa-twitter"></i>
							<span className="pl-2 lead text-warning">
								{this.state.hashTag[index]}
							</span>
						</a>
					</div>
				</div>
			);
		});

		return (
			<div
				id="section-cities"
				className="container"
				data-aos="fade-up"
				data-aos-duration="1000"
			>
				<Heading text={this.state.heading} />
				<div className="row">{cities}</div>
			</div>
		);
	}
}

export default Cities;
