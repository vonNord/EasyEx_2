import { Reducer } from "redux";
import { RainingActions, RainingActionTypes, IRainingState } from "./RainingTypes";

const initialRainingState: IRainingState = {
	rainState: true
};

export const rainingReducer: Reducer<IRainingState, RainingActions> = (state = initialRainingState, action) => {
    console.log("reducers called", action.type );
	switch (action.type) {
		case RainingActionTypes.TOGGLERAIN: {
			console.log("rainingReducer", action.isRaining);
			return {
				...state,
				rainState: action.isRaining
			};
		}
	}
	return state || initialRainingState;
};
