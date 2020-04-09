import React, { Component } from "react";
import Aos from "aos";
import InfiniteScroll from "react-infinite-scroll-component";

import logo from "./logo.svg";
import "./Bootstrap/css/bootstrap.min.css";
import "./App.css";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Features from "./components/Features";
import Meals from "./components/Meals";
import HowItWorks from "./components/HowItWorks";
import Cities from "./components/Cities";
import Reviews from "./components/Reviews";
import Pricing from "./components/Pricing";
import SignInForm from "./components/SignInForm";
import Footer from "./components/Footer";

class App extends Component {
	state = {
		components: [<Header />, <Features />],
		index: 0
	};

	componentDidMount() {
		Aos.init();
	}

	getMoreContent = () => {
		const cpns = [
			<Meals />,
			<HowItWorks />,
			<Cities />,
			<Reviews />,
			<Pricing />,
			<SignInForm />,
			<Footer />
		];

		const { index, components } = this.state;

		setTimeout(() => {
			if (index < cpns.length) {
				this.setState({
					components: components.concat(cpns[index]),
					index: index + 1
				});
			}
		}, 500);
	};

	render() {
		return (
			<InfiniteScroll
				dataLength={this.state.components.length}
				next={this.getMoreContent}
				hasMore={true}
				loader={<h4></h4>}
				style={{ overflow: "hidden" }}
			>
				{this.state.components}
			</InfiniteScroll>
		);
	}
}

export default App;
