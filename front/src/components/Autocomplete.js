import React, { useEffect, useState } from "react";
import styled from "styled-components";
import palette from "../styles/pallete";
// import Title from '../components/Title'

const stations = [
  { id: 201, name: "시청" },
  { id: 202, name: "을지로입구" },
  { id: 203, name: "을지로3가" },
  { id: 204, name: "을지로4가" },
  { id: 205, name: "동대문역사문화공원" },
  { id: 206, name: "신당" },
  { id: 207, name: "상왕십리" },
  { id: 208, name: "왕십리" },
  { id: 209, name: "한양대" },
  { id: 210, name: "뚝섬" },
  { id: 211, name: "성수" },
  { id: 212, name: "건대입구" },
  { id: 213, name: "구의" },
  { id: 214, name: "강변" },
  { id: 215, name: "잠실나루" },
  { id: 216, name: "잠실" },
  { id: 217, name: "잠실새내" },
  { id: 218, name: "종합운동장" },
  { id: 219, name: "삼성" },
  { id: 220, name: "선릉" },
  { id: 221, name: "역삼" },
  { id: 222, name: "강남" },
  { id: 223, name: "교대" },
  { id: 224, name: "서초" },
  { id: 225, name: "방배" },
  { id: 226, name: "사당" },
  { id: 227, name: "낙성대" },
  { id: 228, name: "서울대입구" },
  { id: 229, name: "봉천" },
  { id: 230, name: "신림" },
  { id: 231, name: "신대방" },
  { id: 232, name: "구로디지털단지" },
  { id: 233, name: "대림" },
  { id: 234, name: "신도림" },
  { id: 235, name: "문래" },
  { id: 236, name: "영등포구청" },
  { id: 237, name: "당산" },
  { id: 238, name: "합정" },
  { id: 239, name: "홍대입구" },
  { id: 240, name: "신촌" },
  { id: 241, name: "이대" },
  { id: 242, name: "아현" },
  { id: 243, name: "충정로" },
];

const stationNames = stations.map((station) => station.name);

const AutoComplete = ({ getStation }) => {
  const [inputValue, setInputValue] = useState("");
  const [isHaveInputValue, setIsHaveInputValue] = useState(false);
  const [dropDownList, setDropDownList] = useState(stationNames);
  const [dropDownItemIndex, setDropDownItemIndex] = useState(-1);

  const showDropDownList = () => {
    if (inputValue === "") {
      setIsHaveInputValue(false);
      setDropDownList([]);
    } else {
      const choosenTextList = stationNames.filter((textItem) =>
        textItem.includes(inputValue)
      );
      setDropDownList(choosenTextList);
    }
  };

  const changeInputValue = (event) => {
    getStation(event.target.value);
    setInputValue(event.target.value);
    setIsHaveInputValue(true);
  };

  const clickDropDownItem = (clickedItem) => {
    getStation(clickedItem);
    setInputValue(clickedItem);
    setIsHaveInputValue(false);
  };

  const handleDropDownKey = (event) => {
    //input에 값이 있을때만 작동
    if (isHaveInputValue) {
      if (
        event.key === "ArrowDown" &&
        dropDownList.length - 1 > dropDownItemIndex
      ) {
        setDropDownItemIndex(dropDownItemIndex + 1);
      }

      if (event.key === "ArrowUp" && dropDownItemIndex >= 0)
        setDropDownItemIndex(dropDownItemIndex - 1);
      if (event.key === "Enter" && dropDownItemIndex >= 0) {
        clickDropDownItem(dropDownList[dropDownItemIndex]);
        setDropDownItemIndex(-1);
      }
    }
  };

  useEffect(showDropDownList, [inputValue]);

  return (
    <WholeBox>
      {/* <Title text='AutoComplete' /> */}
      <InputBox isHaveInputValue={isHaveInputValue}>
        <Input
          type="text"
          value={inputValue}
          onChange={changeInputValue}
          onKeyUp={handleDropDownKey}
        />
        <DeleteButton
          onClick={() => {
            getStation("");
            setInputValue("");
          }}
        >
          &times;
        </DeleteButton>
      </InputBox>
      {isHaveInputValue && (
        <DropDownBox>
          {dropDownList.length === 0 && (
            <DropDownItem>해당하는 단어가 없습니다</DropDownItem>
          )}
          {dropDownList.map((dropDownItem, dropDownIndex) => {
            return (
              <DropDownItem
                key={dropDownIndex}
                onClick={() => clickDropDownItem(dropDownItem)}
                onMouseOver={() => setDropDownItemIndex(dropDownIndex)}
                className={
                  dropDownItemIndex === dropDownIndex ? "selected" : ""
                }
              >
                {dropDownItem}
              </DropDownItem>
            );
          })}
        </DropDownBox>
      )}
    </WholeBox>
  );
};

const activeBorderRadius = "12px 12px 0 0";
const inactiveBorderRadius = "12px 12px 12px 12px";

const WholeBox = styled.div`
  padding: 10px;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px;
  border: 2px solid ${palette.main_purple};
  border-radius: ${(props) =>
    props.isHaveInputValue ? activeBorderRadius : inactiveBorderRadius};
  z-index: 3;

  //   &:focus-within {
  //     box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
  //   }
`;

const Input = styled.input`
  flex: 1 0 0;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 19px;
  color: ${palette.main_purple};
  font-weight: bold;
  text-align: center;
`;

const DeleteButton = styled.div`
  cursor: pointer;
  font-size: 19px;
  color: ${palette.main_purple};
`;

const DropDownBox = styled.ul`
  display: block;
  margin: 0 auto;
  padding: 8px 0;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-top: none;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
  list-style-type: none;
  z-index: 3;
`;

const DropDownItem = styled.li`
  padding: 0 16px;

  &.selected {
    background-color: lightgray;
  }
`;

export default AutoComplete;
