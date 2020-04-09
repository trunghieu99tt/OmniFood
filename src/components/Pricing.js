import React, { Component } from "react";
import "../css/Reviews.css";
import Heading from "./Heading";

class Pricing extends Component {
	state = {
		heading: "START EATING HEALTHY TODAY",
		pricingOpt: ["Premium", "Pro", "Starter"],
		pricingFee: [399, 149, 19],
		pricingDetail: [
			`That's only 13.30$ per meal`,
			`That's only 14.90$ per meal`,
			``
		],
		pricingBenefit: [
			[
				"1 meal every day",
				"Order 24/7",
				"Access to newest creations",
				"Free delivery"
			],
			[
				"1 meal 10 days/month",
				"Order 24/7",
				"Access to newest creations",
				"Free delivery"
			],
			["1 meal", "Order from 8 am to 12 pm", "", "Free delivery"]
		]
	};

	render() {
		const arr = [1, 2, 3];

		const yes = <i class="far fa-check-circle"></i>;
		const no = <i class="far fa-times-circle"></i>;

		const cards = arr.map((el, index) => {
			const detail = this.state.pricingDetail[index];
			const benefit = this.state.pricingBenefit[index];
			return (
				<div className="col-md-4">
					<div className="card font-weight-light text-left">
						<div className="card-header">
							<h1 className="lead display-4 font-weight-light">
								{this.state.pricingOpt[index]}
							</h1>
							<h3 className="text-warning font-weight-light">
								${this.state.pricingFee[index]} /
								<small>month</small>
							</h3>
							{detail === "" ? <br></br> : <p>{detail}</p>}
						</div>

						<div className="card-body">
							<ul className="lead">
								<li>
									{yes} {benefit[0]}
								</li>
								<li>
									{yes} {benefit[1]}
								</li>
								<li>
									{yes}{" "}
									{benefit[2] !== "" ? benefit[2] : <br></br>}
								</li>
								<li>
									{yes} {benefit[3]}
								</li>
							</ul>
						</div>

						<div className="card-footer text-center">
							{index === 0 ? (
								<button className="btn btn-lg rounded-pill m-3 header__main--btn__real">
									Sign Up Now
								</button>
							) : (
								<button className="btn btn-lg rounded-pill header__main--btn__shadow">
									Sign Up Now
								</button>
							)}
						</div>
					</div>
				</div>
			);
		});

		const bgStyle = {
			backgroundColor: "#f5f5f5"
		};

		return (
			<div
				id="pricing"
				className="py-5"
				style={bgStyle}
				data-aos="fade-up"
				data-aos-duration="1000"
			>
				<Heading text={this.state.heading} />
				<div className="container">
					<div className="row">{cards}</div>
				</div>
			</div>
		);
	}
}

export default Pricing;
