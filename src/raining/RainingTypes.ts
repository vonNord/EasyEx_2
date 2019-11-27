
export enum RainingActionTypes {
    TOGGLERAIN = "RAIN/TOGGLE"
}

export interface IRainingState {
    readonly rainState: boolean;
}

export interface IRainingCheckboxClickAction {
    type: RainingActionTypes.TOGGLERAIN;
    isRaining: boolean;
}

export type RainingActions = IRainingCheckboxClickAction;

