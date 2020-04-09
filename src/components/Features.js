import React, { Component } from "react";
import "../css/Features.css";
import Heading from "./Heading";

class Features extends Component {
	state = {
		headings: [
			"UP TO 365 DAYS/YEAR",
			"READY IN 20 MINUTES",
			"100% ORGANIC",
			"ORDER ANYTHING",
			"GET FOOD FAST — NOT FAST FOOD"
		],
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolores ratione molestias vero odio soluta totam, quibusdam esse a iusto eveniet obcaecati, quisquam, excepturi qui expedita error maiores corrupti beatae",
		icons: [
			"fas fa-infinity",
			"far fa-clock",
			"fab fa-nutritionix",
			"fas fa-shopping-cart"
		]
	};

	render() {
		const cols = [...Array(4)].map((el, index) => {
			return (
				<div className="col-md-3 font-weight-light features__main__col">
					<i
						class={
							this.state.icons[index] +
							" features__main--icons mb-5"
						}
					></i>
					<h5 className="text-left"> {this.state.headings[index]}</h5>
					<p className="text-left">{this.state.description} </p>
				</div>
			);
		});

		return (
			<div
				id="features"
				className="container my-5"
				data-aos="fade-up"
				data-aos-duration="1000"
			>
				<div className="features__description text-center">
					<Heading text={this.state.headings[4]} />
					<p className="pt-3">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Quaerat dolores ratione molestias vero odio soluta
						totam, quibusdam esse a iusto eveniet obcaecati,
						quisquam, excepturi qui expedita error maiores corrupti
						beatae.
					</p>
				</div>
				<div className="features__main row mt-5">{cols}</div>
			</div>
		);
	}
}

export default Features;
