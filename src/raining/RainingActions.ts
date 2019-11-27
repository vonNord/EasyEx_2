import { RainingActionTypes, IRainingCheckboxClickAction } from "./RainingTypes";
import { ActionCreator } from "redux";


export const toggleRain: ActionCreator<IRainingCheckboxClickAction> = (val: boolean) => {
	console.log("RainingActions:toggleRain", val);
	return {
		type: RainingActionTypes.TOGGLERAIN
		, isRaining: val
	};
};
