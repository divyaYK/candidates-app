import "./App.css";
import { connect } from "react-redux";

import HomeScreen from "./screens/HomeScreen";
import { shortlistAction } from "./_actions/shortlistAction";
import { rejectAction } from "./_actions/rejectAction";

function App() {
	return (
		<main>
			<HomeScreen />
		</main>
	);
}

const mapStateToProps = (state) => ({
	...state,
});

const mapDispatchToProps = (dispatch) => ({
	shortlistAction: () => dispatch(shortlistAction),
	rejectAction: () => dispatch(rejectAction),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
