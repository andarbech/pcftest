import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from "react";
import * as ReactDOM from "react-dom";
import Dropdown1 from "./Dropdown";

export class ReactStandardControl implements ComponentFramework.StandardControl<IInputs, IOutputs> {
	private notifyOutputChanged: () => void;
	private theContainer: HTMLDivElement;


	constructor() {
	}


	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement): void {
		this.notifyOutputChanged = notifyOutputChanged;
		this.theContainer = container;
	}



		public updateView(context: ComponentFramework.Context<IInputs>) {
		ReactDOM.render(
			React.createElement(
				Dropdown1,
			),
			this.theContainer
		);
	}

	public getOutputs(): IOutputs {
		return {
		};
	}


	public destroy(): void {
		ReactDOM.unmountComponentAtNode(this.theContainer);
	}
}