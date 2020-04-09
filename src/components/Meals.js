import React, { Component } from "react";
import "../css/Meals.css";

class Meals extends Component {
	state = {
		imgURL: [
			require("../img/1.jpg"),
			require("../img/2.jpg"),
			require("../img/3.jpg"),
			require("../img/4.jpg"),
			require("../img/5.jpg"),
			require("../img/6.jpg"),
			require("../img/7.jpg"),
			require("../img/8.jpg")
		]
	};

	render() {
		const arr = [1, 2, 3, 4, 5, 6, 7, 8];

		const imgs = arr.map((el, index) => {
			return (
				<div className="meals__imagesContainer col-md-3">
					<img
						src={this.state.imgURL[index]}
						alt="Images"
						className="img-fluid meals__imagesContainer--img"
					></img>
				</div>
			);
		});

		return (
			<div
				id="meals"
				className="container-fluid"
				data-aos="fade-up"
				data-aos-duration="1000"
			>
				<div className="row">{imgs}</div>
			</div>
		);
	}
}

export default Meals;
