import React, { Component } from "react";
import "../css/Header.css";
import Heading from "./Heading";
import "../css/SignInForm.css";

class SignInForm extends Component {
	state = {
		heading: `WE'RE HAPPY TO HEAR FROM YOU`
	};

	render() {
		return (
			<div
				id="form"
				className="container"
				data-aos="fade-up"
				data-aos-duration="1000"
			>
				<Heading text={this.state.heading} />
				<form>
					<div className="form-group form-inline">
						<div className="row ">
							<label for="name" className="col-md-4">
								Name
							</label>
							<input
								type="text"
								className="form-control col-md-6"
								placeholder="Your Name"
							></input>
						</div>
					</div>
					<div className="form-group form-inline">
						<div className="row">
							<label for="email" className="col-md-4 text-left">
								Email
							</label>
							<input
								type="text"
								className="form-control col-md-6 "
								placeholder="Your Email"
							></input>
						</div>
					</div>
					<div className="form-group form-inline">
						<div className="row">
							<label for="Way" className="col-md-4 ">
								How did you find us?
							</label>
							<select
								name="How"
								id=""
								className="form-control col-md-6"
							>
								<option value="friends">Friend</option>
								<option value="search">Searh engine</option>
								<option value="friends">Friend</option>
							</select>
						</div>
					</div>
					<div className="form-check form-inline">
						<div className="row">
							<label
								for="letters"
								className="col-md-4 form-check-label"
							>
								New Letters
							</label>
							<input
								type="checkbox"
								name="Yes, Please"
								id=""
								className="form-check-input col-md-6"
								value="Yes, Please"
							></input>
						</div>
					</div>
					<div className="form-group form-inline">
						<div className="row">
							<label for="feedback" className="col-md-4">
								Drop a line
							</label>
							<textarea
								name=""
								id=""
								cols="10"
								rows="3"
								className="form-control col-md-6"
							></textarea>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default SignInForm;
