declare module sliderizr {
	export interface IOpenPanel {
		deferred: ng.IDeferred<any>;
		panelScope: IPanelScope;
		instance: IPanelInstance<IRouteParams>;
		element: ng.IAugmentedJQuery;
		parent?: IOpenPanel;
	}
}

declare module sliderizr {
	export interface IPanelInstance<T extends IRouteParams> {
		/**
		 * The options that were used to construct the panel
		 */
		options: IPanelOptions<T>;

		/**
		 * Close the panel and resolve the 'result' promise
		 * @param result An optional object to be passed to the success value of the 'result' promise
		 * @returns {} 
		 */
		close(result?: any): void;

		/**
		 * Close the panel and reject the 'result' promise
		 * @param reason An optional reason for dismissing the panel, this will be passed as the rejection value of the 'result' promise
		 * @returns {} 
		 */
		dismiss(reason?: any): void;

		/**
		 * Sets the panel as the active panel
		 */
		setActive(): void;

		/**
		 * A promise that is resolved when the panel is closed or rejected if the panel is dismissed
		 */
		result: ng.IPromise<any>;

		/**
		 * A promise that is resolved then the panel is initially opened
		 */
		opened: ng.IPromise<IPanelInstance<T>>;

		/**
		 * Set the panel title
		 * @param title Title of the panel
		 * @returns {} 
		 */
		setTitle(title: string): void;

		/**
		 * Open a child panel
		 * @param name Name of the panel to open
		 */
		openChild<U extends IRouteParams>(name: string, routeParams?: U): IPanelInstance<U>;

		/**
		 * Open a child panel
		 * @param name Name of the panel to open
		 */
		openChild(name: string, routeParams?: IRouteParams): IPanelInstance<IRouteParams>;

		/**
		 * Open a child panel
		 * @param options Options to use to construct the child panel
		 */
		openChild(options: IPanelOptions<IRouteParams>): IPanelInstance<IRouteParams>;

		/**
		 * Open a child panel
		 * @param options Options to use to construct the child panel
		 */
		openChild<U extends IRouteParams>(options: IPanelOptions<IRouteParams>): IPanelInstance<U>;
	}
}

declare module sliderizr {
	export interface IPanelOptions<T extends IRouteParams> {
		name?: string;
		templateUrl?: string;
		controller?: string;
		controllerAs?: string;
		size?: PanelSize;
		params?: T;
		title?: string;
		resolve?: any;
	}
}

declare module sliderizr {
	export interface IPanelRoute {
		templateUrl?: string;
		controller?: string;
		controllerAs?: string;
		title?: string;
		size?: PanelSize;
		resolve?: { [key: string]: any };
		redirectTo?: string|IPanelOptions<IRouteParams>;
	}
}

declare module sliderizr {
	export interface IPanelScope extends ng.IScope {
		$close(result?: any);
		$dismiss(reason?: any);
		$setActive(): void;
		$openChildPanel(name: string, routeParams?: IRouteParams);
		$title: string;
		$active: boolean;
		$panelSize?: PanelSize;
	}
}

declare module sliderizr {
    export interface IRouteCollection {
        [name: string]: IPanelRoute;
    }
}

declare module sliderizr {
	export interface IRouteParams {
		[id: string]: string;
	}
}

declare module sliderizr{
	export interface ISliderizrConfig{
		panelTemplateUrl: string;
		panelInnerTemplateUrl: string;
	}
}
declare module sliderizr {
	export enum PanelSize {
		Small = 1,
		Medium = 2,
		Large = 3
	}
}

declare module sliderizr {
    export interface IPanelRouteProvider extends ng.IServiceProvider {
        when(name: string, route: IPanelRoute): IPanelRouteProvider;
        otherwise(route: IPanelRoute): IPanelRouteProvider;
        otherwise(routeName: string): IPanelRouteProvider;
        config: ISliderizrConfig;
    }
}

declare module sliderizr {
    export interface IPanelRouteService {
        routes: IRouteCollection;
        config: ISliderizrConfig;
    }
}

declare module sliderizr {
	export interface IPanelService {
		/**
		 * Open a new panel
		 * @param name Name of the panel to open (Must match a route)
		 * @param parent The parent panel that is opening the new panel (Optional)
		 * @returns {} 
		 */
		open<T extends IRouteParams>(name: string, parent?: IPanelInstance<IRouteParams>): IPanelInstance<T>;

		/**
		 * Open a new panel
		 * @param name Name of the panel to open (Must match a route)
		 * @param parent The parent panel that is opening the new panel (Optional)
		 * @param activate Set the panel as active once it is opened (default: true
		 */
		open(name: string, parent?: IPanelInstance<IRouteParams>): IPanelInstance<IRouteParams>;

		/**
		 * Open a new panel
		 * @param name Name of the panel to open (Must match a route)
		 * @param routeParams Optional parameters to load the panel with (think querystring)
		 * @param parent The parent panel that is opening the new panel (Optional)
		 */
		open<T extends IRouteParams>(name: string, routeParams: IRouteParams, parent?: IPanelInstance<IRouteParams>): IPanelInstance<T>;

		/**
		 * Open a new panel
		 * @param name Name of the panel to open (Must match a route)
		 * @param routeParams Optional parameters to load the panel with (think querystring)
		 * @param parent The parent panel that is opening the new panel (Optional)
		 * @param activate Set the panel as active once it is opened (default: true
		 */
		open(name: string, routeParams: IRouteParams, parent?: IPanelInstance<IRouteParams>): IPanelInstance<IRouteParams>;

		/**
		 * Open a new panel
		 * @param options Options to use to configure the panel
		 * @param parent The parent panel that is opening the new panel (Optional)
		 */
		open(options: IPanelOptions<IRouteParams>, parent?: IPanelInstance<IRouteParams>): IPanelInstance<IRouteParams>;

		/**
		 * Open a new panel
		 * @param options Options to use to configure the panel
		 * @param parent The parent panel that is opening the new panel (Optional)
		 */
		open<T extends IRouteParams>(options: IPanelOptions<IRouteParams>, parent?: IPanelInstance<IRouteParams>): IPanelInstance<T>;

		getActivePanel(): IPanelInstance<IRouteParams>;

		getAllOpenPanels(): IPanelInstance<IRouteParams>[];
	}
}
