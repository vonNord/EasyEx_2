import * as React from "react";
import { toggleRain } from "./RainingActions";
import { connect } from "react-redux";
import { IApplicationState } from "../Store";

interface IProps {
	onCheckboxClick: typeof toggleRain;
	isItRaining: boolean;
}


const LeftComp: React.SFC<IProps> = (props: IProps) => {
	const handleCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log("LeftComp:handleCheckboxClick", e.currentTarget.checked );
		props.onCheckboxClick( e.currentTarget.checked );
	};

	console.log("LeftComp:rendering", props.isItRaining );
	return (
		<div className="comp-container">
			<div className="comp-container-A">
				<div className="comp-container-B">
					Is it raining?
					<input type="checkbox" onChange={handleCheckboxClick} checked={props.isItRaining} />
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch: any) => {
	console.log("LeftComp:mapDispatchToProps");
	return {
		onCheckboxClick: ( val: boolean) => dispatch(toggleRain( val ))
	};
};

const mapStateToProps = (store: IApplicationState) => {
	console.log("LeftComp:mapStateToProps", store.rain.rainState);
	return {
		isItRaining: store.rain.rainState
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftComp);
