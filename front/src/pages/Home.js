import styled from "styled-components";
import Button from "../components/Button";
import EmptyRow from "../components/EmptyRow";
import Train from "../components/Train";
import palette from "../styles/pallete";
import Clocks from "./Clock";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import ModalSeat from "../components/ModalSeat";
import ModalReward from "../components/ModalReward";
import "./Home.css";

const VerticalFlex = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
`;

const HorizontalFlex = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const FillSpace = styled.div`
	flex: auto;
`;

const Header = styled.span`
	font-size: 19px;
	font-weight: bold;
	color: ${palette.black};
	margin: 7px 0;
`;

const Description = styled.span`
	font-size: 12px;
	font-weight: bold;
	color: ${palette.gray_1};
`;

const PurpleStyle = styled.span`
	color: ${palette.main_purple};
`;

const BelowFloat = styled.div`
	position: absolute;
	top: 680px;
	z-index: 2;
`;

const willEmpty = [
	{ door: "4-2", user: "포도잼", remaining: 0 },
	{ door: "1-3", user: "사과잼", remaining: 1 },
	{ door: "8-3", user: "살구잼", remaining: 1 },
	{ door: "2-2", user: "카야잼", remaining: 2 },
	{ door: "5-2", user: "호두잼", remaining: 3 },
	{ door: "5-2", user: "호두잼", remaining: 3 },
	{ door: "5-2", user: "호두잼", remaining: 3 },
	{ door: "5-2", user: "호두잼", remaining: 3 },
];

const Nav = styled.nav`
	display: flex;
	overflow: auto;
	height: 45px;
	&::-webkit-scrollbar {
		width: 8px;
		height: 8px;
		border-radius: 6px;
		background: rgba(255, 255, 255, 0.4);
	}
	&::-webkit-scrollbar-thumb {
		background: rgba(0, 0, 0, 0.3);
		border-radius: 6px;
	}
`;

function Home() {
	const [isOpen, setOpen] = useState(false);
	const isReward = true;
	const handleClick = () => {
		setOpen(true);
	};

	const handleCancel = () => {
		setOpen(false);
	};

	return (
		<div>
			<br />
			<HorizontalFlex>
				<Header>
					내가 <PurpleStyle>탈</PurpleStyle> 지하철은?
				</Header>
				<FillSpace />
				<Description>
					<Clocks />
				</Description>
				<Description> 기준</Description>
			</HorizontalFlex>
			<Train name="외선순환" description="2분 40초 뒤 도착" />

			<br />

			<HorizontalFlex>
				<Header>
					<PurpleStyle>열차 자리</PurpleStyle>가 비기까지
				</Header>
			</HorizontalFlex>
			<div className="mostly-customized-scrollbar">
				{willEmpty.map(
					(item, i) => {
						return (
							<div key={i}>
								<div id="row-data" onClick={handleClick}>
									<EmptyRow
										door={item.door}
										user={item.user}
										remaining={item.remaining}
									/>
								</div>

								{isReward ? (
									<ModalReward
										isOpen={isOpen}
										onCancel={handleCancel}
									/>
								) : (
									<ModalSeat
										isOpen={isOpen}
										onCancel={handleCancel}
										seat={2}
									/>
								)}
							</div>
						);
					},
					[isOpen]
				)}
				<div className="rect" />
			</div>

			<BelowFloat>
				<Link to="/sit">
					<Button box_shadow>자리 등록하기</Button>
				</Link>
			</BelowFloat>
		</div>
	);
}

export default Home;
