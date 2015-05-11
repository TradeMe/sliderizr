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
		 * @returns {} 
		 */
		open(name: string, parent?: IPanelInstance<IRouteParams>): IPanelInstance<IRouteParams>;

		/**
		 * Open a new panel
		 * @param name Name of the panel to open (Must match a route)
		 * @param routeParams Optional parameters to load the panel with (think querystring)
		 * @param parent The parent panel that is opening the new panel (Optional)
		 * @returns {} 
		 */
		open<T extends IRouteParams>(name: string, routeParams: IRouteParams, parent?: IPanelInstance<IRouteParams>): IPanelInstance<T>;

		/**
		 * Open a new panel
		 * @param name Name of the panel to open (Must match a route)
		 * @param routeParams Optional parameters to load the panel with (think querystring)
		 * @param parent The parent panel that is opening the new panel (Optional)
		 * @param activate Set the panel as active once it is opened (default: true
		 * @returns {} 
		 */
		open(name: string, routeParams: IRouteParams, parent?: IPanelInstance<IRouteParams>): IPanelInstance<IRouteParams>;

		getActivePanel(): IPanelInstance<IRouteParams>;

		getAllOpenPanels(): IPanelInstance<IRouteParams>[];
	}
}
