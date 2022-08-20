import React from "react";
import palette from "../styles/pallete";
import Station from "./Station";
import "./Train.css";

{
	/* <Seat occupied="true" big="true" showNum="true" num="12"/> */
}

function Train(props) {
	return (
		<div
			style={{
				height: "72px",
				width: "334px",
				position: "relative",
				borderRadius: "16px",
				margin: "5px 0",
			}}
		>
			<img src="/Group 35.png" alt="logo"></img>

			<div
				style={{
					marginLeft: 16,
					position: "absolute",
					top: "50%",
					msTransform: "translateY(-50%)",
					transform: "translateY(-50%)",
					color: palette.white,
				}}
			>
				<Station name={props.name} description={props.description} />
			</div>
		</div>
	);
}

export default Train;
