const selectedReducer = (state, action) => {
	switch (action.type) {
		case "SHORTLISTED":
			return {
				selection: action.payload,
			};
		case "REJECTED":
			return {
				selection: action.payload,
			};
		default:
			return state;
	}
};

export default selectedReducer;
