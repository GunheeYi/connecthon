import ModalPage from './ModalPage';

function Home() {
	return (
		<div>
			<ModalPage isReward={true}/>
			<ModalPage isReward={false}/>
		</div>
	);
}

export default Home;
