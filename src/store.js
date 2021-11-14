import { createStore } from "redux";
import selectedReducer from "./_reducers/isSelected";

function configureStore(state = { selection: true }) {
	return createStore(selectedReducer, state);
}

export default configureStore;
