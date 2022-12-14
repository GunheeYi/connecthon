import React from "react";
import styled, { css } from "styled-components";
import palette from "../styles/pallete";

const StyledButton = styled.button`
	outline: none;
	border: none;
	border-radius: 12px;

	font-size: 15px;
	font-weight: bold;
	font-family: "Pretendard Bold";
	color: white;

	padding: 0.25rem;s
	cursor: pointer;
	width: 334px;
	height: 48px;
  cursor: pointer;

	background: ${palette.main_purple};
	&:hover {
		background: ${palette.sub_purple};
	}

	// full width
	${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}

	// box shadow
  ${(props) =>
    props.box_shadow &&
    css`
      box-shadow: 4px 4px 20px rgba(94, 89, 254, 0.3);
    `} 
    
    // background: gray
    ${(props) =>
      props.gray &&
      css`
        background: ${palette.gray_3};
        &:hover {
          background: ${palette.gray_3};
        }
      `}
  ${(props) =>
    props.width &&
    css`
      width: ${props.width}px !important;
    `} 
`;

const Button = ({ to, history, ...rest }) => {
  const handleClick = (e) => {
    if (to) {
    }

    if (rest.onClick) {
      rest.onClick(e);
    }
  };
  return <StyledButton {...rest} onClick={handleClick} />;
};

export default Button;
