import React from "react";
import palette from "../styles/pallete";

{
	/* <Seat occupied="true" big="true" showNum="true" num="12"/> */
}

function Station(props) {
	return (
		<div>
			<div
				style={{
					width: 24,
					height: 24,
					borderRadius: "50%",
					backgroundColor: "green",
					display: "inline-block",
					verticalAlign: "middle",
				}}
			>
				<div
					style={{
						display: "grid",
						placeItems: "center",
						height: "100%",
					}}
				>
					<span style={{ fontSize: 12 }}>2</span>
				</div>
			</div>
			<span
				style={{
					color: palette.black,
					fontSize: 19,
					marginLeft: 8,
					verticalAlign: "middle",
					fontWeight: "bold",
				}}
			>
				{props.name}
			</span>
			<span
				style={{
					color: palette.gray_1,
					fontSize: 11,
					marginLeft: 6,
					verticalAlign: "middle",
					fontWeight: "bold",
				}}
			>
				{props.description}
			</span>
		</div>
	);
}

export default Station;
