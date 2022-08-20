import styled from "styled-components";
import Button from '../components/Button';
import EmptyRow from '../components/EmptyRow';
import Train from '../components/Train';
import palette from "../styles/pallete";

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
`;

const willEmpty = [
	{ "door": "4-2", "user": "포도잼", "remaining": 0 },
	{ "door": "1-3", "user": "사과잼", "remaining": 1 },
	{ "door": "8-3", "user": "살구잼", "remaining": 1 },
	{ "door": "2-2", "user": "카야잼", "remaining": 2 },
	{ "door": "5-2", "user": "호두잼", "remaining": 3 },
	{ "door": "5-2", "user": "호두잼", "remaining": 3 },
	{ "door": "5-2", "user": "호두잼", "remaining": 3 },
	{ "door": "5-2", "user": "호두잼", "remaining": 3 },
]

function Home() {
	return (
		<div>
			<br/>
			<HorizontalFlex>
				<Header>내가 <PurpleStyle>탈</PurpleStyle> 열차는?</Header>
				<FillSpace/>
				<Description>09:41 기준</Description>
			</HorizontalFlex>
			<Train name="외선순환" description="2분 40초 뒤 도착"/>

			<br/>

			<HorizontalFlex>
				<Header><PurpleStyle>열차 자리</PurpleStyle>가 비기까지</Header>
			</HorizontalFlex>
			<div>
				{
					willEmpty.map(item => {
						return <EmptyRow door={item.door} user={item.user} remaining={item.remaining} />
					})
				}
			</div>
			<BelowFloat>
				<Button box_shadow>자리 등록하기</Button>
			</BelowFloat>
		</div>
	);
}

export default Home;
