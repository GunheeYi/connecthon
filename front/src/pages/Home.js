import "./Home.css";
import Button from "../components/Button";
import EntranceNum from "../components/EntranceNum";

function Home() {
	return (
		<div>
			<div className="Home-page">
				<h1>Home</h1>
			</div>
			<EntranceNum text={"4-2"} />
			<Button>시작하기</Button>
		</div>
	);
}

export default Home;
