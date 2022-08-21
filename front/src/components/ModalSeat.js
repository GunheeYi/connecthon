import React from "react";
import ReactModal from "react-modal";
import palette from "../styles/pallete";
import styled from "styled-components";
import SeatGroup from "./SeatGroup";
import CustomIcon from "./CustomIcon";

const ExitBtn = styled.button`
	width: 24px;
	height: 24px;
	background-color: ${palette.white};
	font-family: "Pretendard Bold";
	border: none;
	font-size: 20px;

	// 정렬
	position: relative;
	margin-left: auto;
`;

const StyledTxt = styled.div`
	background-color: white;
	color: black;
	text-align: center;
	font-family: "Pretendard Bold";

	padding-top: 5px;

	position: relative;
	margin-left: auto;

	align-items: center;
	justify-content: center;
`;

const StyledDiv = styled.div`
	width: 100%;
	color: white;
	font-family: "Pretendard Bold";
	// 정렬
	display: flex;
`;

const StyledMiddle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 30px;
`;

const StyledColor = styled.div`
	padding-top: 50px;
`;

<<<<<<< Updated upstream
const ModalSeat = ({ isOpen, onCancel, seat }) => {
  const handleClickExit = () => {
    onCancel();
  };

  return (
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
          height: "330px",
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
      <StyledDiv>
        <StyledTxt>자리 상세 보기</StyledTxt>
        <ExitBtn onClick={handleClickExit}>x</ExitBtn>
      </StyledDiv>
      <StyledColor>
        <SeatGroup seat={seat} big={true}/>
        <StyledMiddle>
          <CustomIcon txt="4-2" />
        </StyledMiddle>
      </StyledColor>
    </ReactModal>
  );
=======
const ModalSeat = (props) => {
	const handleClickExit = () => {
		props.onCancel();
	};

	return (
		<ReactModal
			isOpen={props.isOpen}
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
					height: "330px",
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
			<StyledDiv>
				<StyledTxt>자리 상세 보기</StyledTxt>
				<ExitBtn onClick={handleClickExit}>x</ExitBtn>
			</StyledDiv>
			<StyledColor>
				<SeatGroup seat={props.seat} big={true} />
				<StyledMiddle>
					<CustomIcon txt={`${props.car}-${props.door}`} />
				</StyledMiddle>
			</StyledColor>
		</ReactModal>
	);
>>>>>>> Stashed changes
};

export default ModalSeat;

ReactModal.setAppElement("#root");
