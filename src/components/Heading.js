import React from "react";

const Heading = props => {
	return (
		<h2
			className={
				props.classes +
				" font-weight-light mb-5 heading-text text-center"
			}
		>
			{" "}
			{props.text}{" "}
		</h2>
	);
};

export default Heading;
