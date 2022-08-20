import { React, useState } from "react";
import { Link } from "react-router-dom";
import ModalSeat from "../components/ModalSeat";
import ModalReward from "../components/ModalReward";
import styled from "styled-components";
import Button from "../components/Button";
import Train from "../components/Train";
import SeatGroup from "../components/SeatGroup";
import Autocomplete from "../components/Autocomplete";
import palette from "../styles/pallete";
import "./Sit.css";

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
	margin: 7px 0;
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

const Text = styled.span`
	font-size: 16px;
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
`;

const SeatGroupWrapper = styled.div`
	margin: 20px 0 30px 0;
`;

const TextInput = styled.input`
	width: 56px;
	height: 40px;
	border-radius: 12px;
	border: 1px solid ${palette.gray_3};
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

function Sit() {
	const [isOpen, setOpen] = useState(false);
	const handleClick = () => {
		setOpen(true);
	};
	const handleCancel = () => {
		setOpen(false);
	};

	return (
		<div>
			<br />
			<div id="texted">
				<Text>
					<Link to="/">취소</Link>
				</Text>
				<Text>자리 등록하기</Text>
			</div>
			<br />
			<HorizontalFlex>
				<Header>현재 탑승 중인 열차</Header>
			</HorizontalFlex>
			<Train name="외선순환" description="" />

			<br />

			<HorizontalFlex>
				<Header>앉은 자리</Header>
			</HorizontalFlex>
			<Text>
				<TextInput />
				&nbsp;&nbsp;-&nbsp;&nbsp;
				<TextInput />
				&nbsp;번&nbsp;칸&nbsp;&nbsp;
				<TextInput />
				&nbsp;번&nbsp;&nbsp;좌석
			</Text>
			<SeatGroupWrapper>
				<SeatGroup big={true} />
			</SeatGroupWrapper>

			<HorizontalFlex>
				<Header>내릴 역</Header>
			</HorizontalFlex>
			<Autocomplete />

			<BelowFloat>
				<div onClick={handleClick}>
					<Button box_shadow>등록하기</Button>
				</div>
				<ModalReward isOpen={isOpen} onCancel={handleCancel} seat={2} />
			</BelowFloat>
		</div>
	);
}

export default Sit;
