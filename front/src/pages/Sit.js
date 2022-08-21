import styled, { css } from "styled-components";
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalSeat from "../components/ModalSeat";
import ModalReward from "../components/ModalReward";
import Button from "../components/Button";
import Train from "../components/Train";
import SeatGroup from "../components/SeatGroup";
import Autocomplete from "../components/Autocomplete";
import palette from "../styles/pallete";
import NativeSelect from "@mui/material/NativeSelect";
import SeatGroupButton from "../components/SeatGroupButton";
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

const trainFirstProps = [1, 2, 3, 4, 5, 6, 7, 8];
const trainSecondProps = [1, 2, 3, 4];

const Header = styled.span`
	font-size: 19px;
	font-family: "Pretendard SemiBold";
	// font-weight: bold;
	color: ${palette.black};
	margin: 7px 0;
`;

const Text = styled.div`
	font-size: 16px;
	// font-weight: bold;
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
	// 폰트
	font-size: 18px;
	width: 56px;
	height: 40px;
	border-radius: 12px;
	text-align: center;
	border: 1px solid ${palette.gray_3};

	&:focus {
		outline: 2px solid ${palette.main_purple};
	}
	// Err
	&.Err {
		&:focus {
			outline: 2px solid red;
			border: 2px solid red;
		}
	}
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
	const handleSubmit = () => {
		setOpen(true);
	};
	const handleCancel = () => {
		setOpen(false);
	};

	const [doorFirstNum, setDoorFirstNum] = useState(1);
	const [doorSecondNum, setDoorSecondNum] = useState(1);
	const [seatNum, setSeatNum] = useState(0);
	const [station, setStation] = useState();

	const handleChange_firstNum = (e) => {
		const { value } = e.target;
		setDoorFirstNum(value);
	};
	const handleChange_secNum = (e) => {
		const { value } = e.target;
		setDoorSecondNum(value);
	};
	const setSeatHandler = (n) => {
		setSeatNum(n);
	};

	const getStation = (txt) => {
		setStation(txt);
	};

	return (
		<div>
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
				<NativeSelect
					style={{
						width: "100px",
						height: "50px",
						margin: "0.5rem",
						textAlign: "center",
					}}
					onChange={handleChange_firstNum}
					inputProps={{
						name: "firstProps",
					}}
					defaultValue={1}
				>
					{trainFirstProps.map((firstNum, index) => (
						<option key={index} vaule={firstNum}>
							{firstNum}
						</option>
					))}
				</NativeSelect>
				<span
					style={{
						marginRight: "10px",
						marginLeft: "10px",
						fontFamily: "Pretendard SemiBold",
					}}
				>
					-
				</span>
				<NativeSelect
					style={{
						width: "100px",
						height: "50px",
						margin: "0.5rem",
						textAlign: "center",
					}}
					onChange={handleChange_secNum}
					inputProps={{
						name: "secProps",
					}}
					defaultValue={1}
				>
					{trainSecondProps.map((secondNum, index) => (
						<option key={index} vaule={secondNum}>
							{secondNum}
						</option>
					))}
				</NativeSelect>
				<span
					style={{
						marginLeft: "6px",
						marginRight: "27px",
						fontFamily: "Pretendard SemiBold",
					}}
				>
					번 칸
				</span>
				{/* {seatNumErr ? (
          <TextInput
            onChange={handleChange_seatNum}
            value={seatNum}
            className="Err"
          />
        ) : (
          <TextInput onChange={handleChange_seatNum} value={seatNum} />
        )}
        <span style={{ marginLeft: "6px", fontFamily: "Pretendard SemiBold" }}>
          번 좌석
        </span> */}
			</Text>
			<SeatGroupWrapper>
				<SeatGroupButton
					big={true}
					setSeatHandler={setSeatHandler}
					// seateds={{ seateds }}
					seatNum={seatNum}
				/>
				{/* <SeatGroup big={true} num={seatNum} /> */}
			</SeatGroupWrapper>
			<div
				id="train-point"
				style={{
					margin: 3,
					fontFamily: "Pretendard Medium",
					fontSize: 12,
					color: palette.sub_purple,
				}}
			>
				<img src="./pointer.png" alt="pointer" style={{ margin: 3 }} />
				열차 진행 방향
			</div>
			<HorizontalFlex>
				<Header>내릴 역</Header>
			</HorizontalFlex>
			<Autocomplete getStation={getStation} />
			<BelowFloat>
				<Button
					box_shadow
					onClick={handleSubmit}
					gray={
						doorFirstNum && doorSecondNum && seatNum && station
							? false
							: true
					}
				>
					등록하기
				</Button>
			</BelowFloat>
			<ModalReward
				isOpen={isOpen}
				onCancel={() => {
					window.location.href = "/home";
				}}
				seat={2}
			/>
		</div>
	);
}

export default Sit;
