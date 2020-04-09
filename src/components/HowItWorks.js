import React, { Component } from "react";
import "../css/HowItWorks.css";
import Heading from "./Heading";

class HowItWorks extends Component {
	state = {
		stepsDescription: [
			"Choose the subscription plan that best fits your needs and sign up today.",
			"Order your delicious meal using our mobile app or website. Or you can even call us!",
			"Enjoy your meal after less than 20 minutes. See you the next time!",
			"HOW IT WORKS — SIMPLE AS 1, 2, 3",
		],
		imgURL: [
			require("../img/app-iPhone.png"),
			require("../img/download-app-android.png"),
		],
	};

	render() {
		const steps = [...Array(3)].map((el, index) => {
			return (
				<div className="section-steps__main--steps__detail d-flex mb-5">
					<p
						href="#none"
						// className="section-steps__main--steps__detail--index"
						className="btn border border-warning rounded-circle section-steps__main--steps__detail__link"
					>
						{" "}
						{index + 1}{" "}
					</p>
					<p className="section-steps__main--steps__detail--text">
						{this.state.stepsDescription[index]}
					</p>
				</div>
			);
		});

		const bgStyle = {
			backgroundColor: "#f5f5f5",
		};

		return (
			<div
				className="container-fluid py-5"
				style={bgStyle}
				data-aos="fade-up"
				data-aos-duration="1000"
			>
				<div id="section-steps" className="container mt-5">
					<Heading text={this.state.stepsDescription[3]} />

					<div id="section-steps__main">
						<div className="row">
							<div className="col-md-6 section-steps__main__left">
								<img
									id="section-steps__main--img"
									src={this.state.imgURL[0]}
									alt="App IPhone"
									className="img-fluid"
								></img>
							</div>
							<div
								id="section-steps__main--steps"
								className="col-md-6 mt-5"
							>
								{steps}
								<img
									src={this.state.imgURL[1]}
									alt="Download App"
									className="btn"
								></img>
								<img
									src={this.state.imgURL[1]}
									alt="Download App"
									className="btn"
								></img>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default HowItWorks;
