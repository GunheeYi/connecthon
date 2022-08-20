import React, { Component } from "react";
import Clock from "react-live-clock";
class Clocks extends Component {
	render() {
		return (
			<div>
				<Clock
					format={"HH:mm"}
					ticking={true}
					timezone={"Asia/Seoul"}
				/>
			</div>
		);
	}
}
export default Clocks;
