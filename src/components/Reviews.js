import React, { Component } from "react";
import Heading from "./Heading";
import "../css/Reviews.css";

class Reviews extends Component {
	state = {
		reviewContent: [
			`Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals!`,
			`Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Lisbon, but no one comes even close to Omifood. Me and my family are so in love!`,
			`I was looking for a quick and easy food delivery service in San Franciso. I tried a lot of them and ended up with Omnifood. Best food delivery service in the Bay Area. Keep up the great work!`
		],
		reviewerName: ["Alberto Duncan", "Joana Silva", "Milton Chapman"],
		reviewerImgURL: [
			require("../img/customer-1.jpg"),
			require("../img/customer-2.jpg"),
			require("../img/customer-3.jpg")
		],
		heading: `OUR CUSTOMERS CAN'T LIVE WITHOUT US`
	};

	render() {
		const arr = [1, 2, 3];

		const customers = arr.map((el, index) => {
			return (
				<div className="col-md-4 d-flex flex-column mb-5">
					<p className="pb-5 reviews__content text-left">
						<em>{this.state.reviewContent[index]}</em>
					</p>
					<div className="d-flex align-items-center">
						<div className="reviews__imgContainer">
							<img
								src={this.state.reviewerImgURL[index]}
								alt=""
								className="img-fluid rounded-circle"
							></img>
						</div>
						<p className="pl-2">
							<em>{this.state.reviewerName[index]}</em>
						</p>
					</div>
				</div>
			);
		});

		return (
			<div
				id="reviews"
				className="container-fluid text-white"
				data-aos="fade-up"
				data-aos-duration="1000"
			>
				<div className="container">
					<Heading text={this.state.heading} classes="pt-5" />
					<div className="row">{customers}</div>
				</div>
			</div>
		);
	}
}

export default Reviews;
