import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { data } from "./data";

function App() {
	const dataItems = data.map((item) => <Card {...item} />);
	return (
		<div className="App">
			<Navbar />
			<section className="data-items">{dataItems}</section>
		</div>
	);
}

export default App;
