import ModalPage from "./ModalPage";
import SeatButton from "../components/SeatButton";
import SeatGroupButton from "../components/SeatGroupButton";
function Home() {
  return (
    <div>
      <SeatButton occupied={false} big={true} inverted={true} num={1} />
      <SeatGroupButton big={true} />
      {/* <ModalPage isReward={true} />
      <ModalPage isReward={false} /> */}
    </div>
  );
}

export default Home;
