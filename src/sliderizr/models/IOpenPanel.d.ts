declare module sliderizr {
	export interface IOpenPanel {
		deferred: ng.IDeferred<any>;
		panelScope: IPanelScope;
		instance: IPanelInstance<IRouteParams>;
		element: ng.IAugmentedJQuery;
		parent?: IOpenPanel;
	}
}
