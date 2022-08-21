import React from "react";
import ReactModal from "react-modal";
import palette from "../styles/pallete";
import styled from "styled-components";
import Button from "./Button";

const StyledTxt = styled.div`
	text-align: center;
	font-family: "Pretendard SemiBold";
	font-size: "20px";
	&.remain {
		color: ${palette.main_purple};
		font-size: 12px;
	}
`;

const IllustDiv = styled.div`
	margin: 0 auto;
	margin-top: 30px;
	height: 150px;
	width: 150px;
	background-color: gray;
`;

const Layout = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const ModalReward = ({ isOpen, onCancel }) => {
	const handleClickExit = () => {
		onCancel();
	};

	return (
		<Layout>
			<ReactModal
				isOpen={isOpen}
				style={{
					overlay: {
						position: "fixed",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: "rgba(0, 0, 0, 0.75)",
						width: "375px",
						height: "768px",
						alignItems: "center",
						justifyContent: "center",
						zIndex: 999,
					},
					content: {
						position: "absolute",
						top: "50%",
						left: "50%",
						WebkitTransform: "translate(-50%, -50%)",

						width: "334px",
						height: "396px",
						backgroundColor: palette.white,
						borderRadius: "16px",
						boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.3)",

						overflow: "auto",
						WebkitOverflowScrolling: "touch",
						outline: "none",
						//padding: "20px",

						zIndex: 1000,
					},
				}}
			>
				<br />
				<StyledTxt>
					<img src="./illus.png" />{" "}
				</StyledTxt>

				<StyledTxt style={{ paddingTop: "20px" }}>
					‘빌 자리 열람권 (하루)’을
				</StyledTxt>
				<StyledTxt>받았습니다!</StyledTxt>
				<StyledTxt className="remain" style={{ paddingTop: "8px" }}>
					남은 열람권: 3개
				</StyledTxt>
				<Button
					fullWidth
					onClick={handleClickExit}
					style={{ marginTop: "38px" }}
				>
					확인
				</Button>
			</ReactModal>
		</Layout>
	);
};

export default ModalReward;

ReactModal.setAppElement("#root");
